import fs from "fs";
import path from "path";
import crypto from "crypto";
import { getMongoDb } from "./mongodb";

export interface DbUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  salt: string;
  institution: string;     // เช่น วิทยาลัยเทคนิค...
  department: string;      // แผนกวิชา เช่น เทคโนโลยีสารสนเทศ
  educationLevel: string;  // เช่น ปวช., ปวส., ปริญญาตรี
  isVerified: boolean;
  role: "student" | "instructor" | "admin";
  createdAt: string;
  updatedAt: string;
}

export interface OtpRecord {
  email: string;
  code: string;
  expiresAt: number;
  createdAt: number;
}

export interface SessionRecord {
  token: string;
  userId: string;
  expiresAt: number;
}

export interface DatabaseSchema {
  users: DbUser[];
  otps: OtpRecord[];
  sessions: SessionRecord[];
}

const DB_FILE_PATH = path.join(process.cwd(), "src", "data", "db.json");

export function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
}

export function generateSalt(): string {
  return crypto.randomBytes(16).toString("hex");
}

export function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// -------------------------------------------------------------
// Local JSON File Database Helpers (Fallback for Local / Offline)
// -------------------------------------------------------------

function ensureDbFile(): DatabaseSchema {
  try {
    const dir = path.dirname(DB_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (!fs.existsSync(DB_FILE_PATH)) {
      const initialData: DatabaseSchema = {
        users: getInitialSeedUsers(),
        otps: [],
        sessions: [],
      };
      fs.writeFileSync(DB_FILE_PATH, JSON.stringify(initialData, null, 2), "utf-8");
      return initialData;
    }

    const content = fs.readFileSync(DB_FILE_PATH, "utf-8");
    return JSON.parse(content) as DatabaseSchema;
  } catch (err) {
    console.error("Error reading database file:", err);
    return { users: getInitialSeedUsers(), otps: [], sessions: [] };
  }
}

function saveDb(data: DatabaseSchema): void {
  try {
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("Error saving database file:", err);
  }
}

function getInitialSeedUsers(): DbUser[] {
  const now = new Date().toISOString();
  return [
    {
      id: "usr_kitsvcadmin",
      name: process.env.ADMIN_USERNAME || "kitsvcadmin",
      email: "kitsvcadmin@itacademy.ac.th",
      passwordHash: hashPassword(process.env.ADMIN_PASSWORD || "kitsvc2570", "salt_kitsvcadmin"),
      salt: "salt_kitsvcadmin",
      institution: "ศูนย์เทคโนโลยีสารสนเทศ อาชีวศึกษา",
      department: "ฝ่ายบริหารจัดการระบบแอดมินและการสอน",
      educationLevel: "ผู้ดูแลระบบสูงสุด (Super Admin)",
      isVerified: true,
      role: "admin",
      createdAt: now,
      updatedAt: now,
    },
    {
      id: "user-demo-admin",
      name: "อาจารย์ สมเกียรติ สิทธิพร",
      email: "teacher@itacademy.ac.th",
      passwordHash: hashPassword("admin1234", "salt_demo"),
      salt: "salt_demo",
      institution: "วิทยาลัยเทคนิคเชียงใหม่",
      department: "แผนกวิชาเทคโนโลยีสารสนเทศ",
      educationLevel: "อาจารย์ผู้สอน",
      isVerified: true,
      role: "instructor",
      createdAt: now,
      updatedAt: now,
    },
    {
      id: "user-demo-student",
      name: "ธนกฤต ชัยชนะ (นักเรียนสาธิต)",
      email: "student@itacademy.ac.th",
      passwordHash: hashPassword("123456", "salt_student"),
      salt: "salt_student",
      institution: "วิทยาลัยเทคนิคมีนบุรี",
      department: "แผนกช่างเทคนิคคอมพิวเตอร์",
      educationLevel: "ปวส. 1",
      isVerified: true,
      role: "student",
      createdAt: now,
      updatedAt: now,
    }
  ];
}

let isMongoSeeded = false;
async function ensureMongoSeed(db: any) {
  if (isMongoSeeded) return;
  try {
    const usersCount = await db.collection("users").countDocuments();
    if (usersCount === 0) {
      console.log("[MongoDB Cloud] Seeding initial database records...");
      // Check if local db.json has users to migrate
      let seedUsers = getInitialSeedUsers();
      try {
        if (fs.existsSync(DB_FILE_PATH)) {
          const local = JSON.parse(fs.readFileSync(DB_FILE_PATH, "utf-8"));
          if (Array.isArray(local.users) && local.users.length > 0) {
            seedUsers = local.users;
          }
        }
      } catch (e) {}

      await db.collection("users").insertMany(seedUsers);
      await db.collection("users").createIndex({ email: 1 }, { unique: true });
      await db.collection("users").createIndex({ id: 1 }, { unique: true });
      await db.collection("sessions").createIndex({ token: 1 }, { unique: true });
      await db.collection("otps").createIndex({ email: 1 });
      console.log("[MongoDB Cloud] Database seeded successfully.");
    }
    isMongoSeeded = true;
  } catch (err) {
    console.error("[MongoDB Cloud] Seed error:", err);
  }
}

// -------------------------------------------------------------
// User CRUD Operations (Async Hybrid)
// -------------------------------------------------------------

export async function findUserByEmail(email: string): Promise<DbUser | undefined> {
  const mongo = await getMongoDb();
  if (mongo) {
    await ensureMongoSeed(mongo);
    const user = await mongo.collection("users").findOne({ email: email.trim().toLowerCase() }, { projection: { _id: 0 } });
    return (user as unknown as DbUser) || undefined;
  }

  const db = ensureDbFile();
  return db.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export async function findUserById(id: string): Promise<DbUser | undefined> {
  const mongo = await getMongoDb();
  if (mongo) {
    await ensureMongoSeed(mongo);
    const user = await mongo.collection("users").findOne({ id }, { projection: { _id: 0 } });
    return (user as unknown as DbUser) || undefined;
  }

  const db = ensureDbFile();
  return db.users.find((u) => u.id === id);
}

export async function createUser(userData: {
  name: string;
  email: string;
  password: string;
  institution: string;
  department: string;
  educationLevel: string;
}): Promise<{ user: DbUser; otpCode: string }> {
  const salt = generateSalt();
  const passwordHash = hashPassword(userData.password, salt);
  const now = new Date().toISOString();

  const newUser: DbUser = {
    id: "usr_" + crypto.randomUUID().slice(0, 12),
    name: userData.name.trim(),
    email: userData.email.trim().toLowerCase(),
    passwordHash,
    salt,
    institution: userData.institution.trim() || "ไม่ระบุสถาบัน",
    department: userData.department.trim() || "เทคโนโลยีสารสนเทศ",
    educationLevel: userData.educationLevel.trim() || "ปวช.",
    isVerified: false,
    role: "student",
    createdAt: now,
    updatedAt: now,
  };

  const otpCode = generateOtp();
  const otpRecord: OtpRecord = {
    email: newUser.email,
    code: otpCode,
    expiresAt: Date.now() + 10 * 60 * 1000,
    createdAt: Date.now(),
  };

  const mongo = await getMongoDb();
  if (mongo) {
    await ensureMongoSeed(mongo);
    await mongo.collection("users").insertOne(newUser);
    await mongo.collection("otps").deleteMany({ email: newUser.email });
    await mongo.collection("otps").insertOne(otpRecord);
    return { user: newUser, otpCode };
  }

  const db = ensureDbFile();
  db.users.push(newUser);
  db.otps = db.otps.filter((o) => o.email.toLowerCase() !== newUser.email.toLowerCase());
  db.otps.push(otpRecord);
  saveDb(db);

  return { user: newUser, otpCode };
}

export async function verifyUserOtp(
  email: string,
  code: string
): Promise<{ success: boolean; message: string; user?: DbUser; sessionToken?: string }> {
  const cleanEmail = email.trim().toLowerCase();
  const mongo = await getMongoDb();

  if (mongo) {
    await ensureMongoSeed(mongo);
    const user = (await mongo.collection("users").findOne({ email: cleanEmail }, { projection: { _id: 0 } })) as unknown as DbUser | null;
    if (!user) {
      return { success: false, message: "ไม่พบบัญชีผู้ใช้นี้ในระบบ" };
    }

    const otpRecord = (await mongo.collection("otps").findOne({
      email: cleanEmail,
      code: code.trim(),
    })) as unknown as OtpRecord | null;

    if (!otpRecord) {
      return { success: false, message: "รหัส OTP 6 หลักไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง" };
    }

    if (Date.now() > otpRecord.expiresAt) {
      return { success: false, message: "รหัส OTP หมดอายุแล้ว กรุณากดขอรหัสใหม่" };
    }

    // Mark as verified
    await mongo.collection("users").updateOne(
      { email: cleanEmail },
      { $set: { isVerified: true, updatedAt: new Date().toISOString() } }
    );
    await mongo.collection("otps").deleteMany({ email: cleanEmail });

    const sessionToken = "sess_" + crypto.randomUUID();
    await mongo.collection("sessions").insertOne({
      token: sessionToken,
      userId: user.id,
      expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000,
    });

    user.isVerified = true;
    return { success: true, message: "ยืนยันอีเมลสำเร็จ ยินดีต้อนรับสู่ IT Academy!", user, sessionToken };
  }

  const db = ensureDbFile();
  const user = db.users.find((u) => u.email.toLowerCase() === cleanEmail);
  if (!user) {
    return { success: false, message: "ไม่พบบัญชีผู้ใช้นี้ในระบบ" };
  }

  const otpRecord = db.otps.find(
    (o) => o.email.toLowerCase() === cleanEmail && o.code === code.trim()
  );

  if (!otpRecord) {
    return { success: false, message: "รหัส OTP 6 หลักไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง" };
  }

  if (Date.now() > otpRecord.expiresAt) {
    return { success: false, message: "รหัส OTP หมดอายุแล้ว กรุณากดขอรหัสใหม่" };
  }

  user.isVerified = true;
  user.updatedAt = new Date().toISOString();
  db.otps = db.otps.filter((o) => o.email.toLowerCase() !== cleanEmail);

  const sessionToken = "sess_" + crypto.randomUUID();
  db.sessions.push({
    token: sessionToken,
    userId: user.id,
    expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000,
  });

  saveDb(db);
  return { success: true, message: "ยืนยันอีเมลสำเร็จ ยินดีต้อนรับสู่ IT Academy!", user, sessionToken };
}

export async function resendOtpForEmail(
  email: string
): Promise<{ success: boolean; message: string; otpCode?: string }> {
  const cleanEmail = email.trim().toLowerCase();
  const otpCode = generateOtp();
  const otpRecord: OtpRecord = {
    email: cleanEmail,
    code: otpCode,
    expiresAt: Date.now() + 10 * 60 * 1000,
    createdAt: Date.now(),
  };

  const mongo = await getMongoDb();
  if (mongo) {
    await ensureMongoSeed(mongo);
    const user = await mongo.collection("users").findOne({ email: cleanEmail });
    if (!user) {
      return { success: false, message: "ไม่พบบัญชีอีเมลนี้ในระบบ" };
    }
    await mongo.collection("otps").deleteMany({ email: cleanEmail });
    await mongo.collection("otps").insertOne(otpRecord);
    return { success: true, message: `ส่งรหัส OTP ใหม่ไปยัง ${cleanEmail} สำเร็จ`, otpCode };
  }

  const db = ensureDbFile();
  const user = db.users.find((u) => u.email.toLowerCase() === cleanEmail);
  if (!user) {
    return { success: false, message: "ไม่พบบัญชีอีเมลนี้ในระบบ" };
  }

  db.otps = db.otps.filter((o) => o.email.toLowerCase() !== cleanEmail);
  db.otps.push(otpRecord);
  saveDb(db);

  return { success: true, message: `ส่งรหัส OTP ใหม่ไปยัง ${cleanEmail} สำเร็จ`, otpCode };
}

export async function loginUser(
  email: string,
  password: string
): Promise<{
  success: boolean;
  message: string;
  user?: DbUser;
  sessionToken?: string;
  isUnverified?: boolean;
  otpCode?: string;
}> {
  const cleanEmail = email.trim().toLowerCase();
  const mongo = await getMongoDb();

  if (mongo) {
    await ensureMongoSeed(mongo);
    const user = (await mongo.collection("users").findOne({ email: cleanEmail }, { projection: { _id: 0 } })) as unknown as DbUser | null;
    if (!user) {
      return { success: false, message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" };
    }

    const hash = hashPassword(password, user.salt);
    if (hash !== user.passwordHash) {
      return { success: false, message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" };
    }

    if (!user.isVerified) {
      const otpCode = generateOtp();
      await mongo.collection("otps").deleteMany({ email: cleanEmail });
      await mongo.collection("otps").insertOne({
        email: cleanEmail,
        code: otpCode,
        expiresAt: Date.now() + 10 * 60 * 1000,
        createdAt: Date.now(),
      });

      return {
        success: false,
        isUnverified: true,
        message: "บัญชีของคุณยังไม่ได้ยืนยันอีเมล กรุณากรอกรหัส OTP",
        user,
        otpCode,
      };
    }

    const sessionToken = "sess_" + crypto.randomUUID();
    await mongo.collection("sessions").insertOne({
      token: sessionToken,
      userId: user.id,
      expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000,
    });

    return { success: true, message: "เข้าสู่ระบบสำเร็จ", user, sessionToken };
  }

  const db = ensureDbFile();
  const user = db.users.find((u) => u.email.toLowerCase() === cleanEmail);
  if (!user) {
    return { success: false, message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" };
  }

  const hash = hashPassword(password, user.salt);
  if (hash !== user.passwordHash) {
    return { success: false, message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" };
  }

  if (!user.isVerified) {
    const otpCode = generateOtp();
    db.otps = db.otps.filter((o) => o.email.toLowerCase() !== cleanEmail);
    db.otps.push({
      email: user.email,
      code: otpCode,
      expiresAt: Date.now() + 10 * 60 * 1000,
      createdAt: Date.now(),
    });
    saveDb(db);

    return {
      success: false,
      isUnverified: true,
      message: "บัญชีของคุณยังไม่ได้ยืนยันอีเมล กรุณากรอกรหัส OTP",
      user,
      otpCode,
    };
  }

  const sessionToken = "sess_" + crypto.randomUUID();
  db.sessions.push({
    token: sessionToken,
    userId: user.id,
    expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000,
  });

  saveDb(db);
  return { success: true, message: "เข้าสู่ระบบสำเร็จ", user, sessionToken };
}

export async function validateSession(token: string): Promise<DbUser | null> {
  const mongo = await getMongoDb();
  if (mongo) {
    await ensureMongoSeed(mongo);
    const session = await mongo.collection("sessions").findOne({
      token,
      expiresAt: { $gt: Date.now() },
    });
    if (!session) return null;

    const user = await mongo.collection("users").findOne({ id: session.userId }, { projection: { _id: 0 } });
    return (user as unknown as DbUser) || null;
  }

  const db = ensureDbFile();
  const session = db.sessions.find((s) => s.token === token && s.expiresAt > Date.now());
  if (!session) return null;

  const user = db.users.find((u) => u.id === session.userId);
  return user || null;
}

// -------------------------------------------------------------
// Admin Backoffice Operations
// -------------------------------------------------------------

export async function getAllUsers(): Promise<Omit<DbUser, "passwordHash" | "salt">[]> {
  const mongo = await getMongoDb();
  if (mongo) {
    await ensureMongoSeed(mongo);
    const users = await mongo.collection("users").find({}, { projection: { _id: 0, passwordHash: 0, salt: 0 } }).toArray();
    return users as unknown as Omit<DbUser, "passwordHash" | "salt">[];
  }

  const db = ensureDbFile();
  return db.users.map(({ passwordHash, salt, ...safeUser }) => safeUser);
}

export async function adminCreateUser(userData: {
  name: string;
  email: string;
  password?: string;
  institution: string;
  department: string;
  educationLevel: string;
  role?: "student" | "instructor" | "admin";
  isVerified?: boolean;
}): Promise<DbUser> {
  const salt = generateSalt();
  const rawPassword = userData.password || "123456";
  const passwordHash = hashPassword(rawPassword, salt);
  const now = new Date().toISOString();

  const newUser: DbUser = {
    id: "usr_" + crypto.randomUUID().slice(0, 12),
    name: userData.name.trim(),
    email: userData.email.trim().toLowerCase(),
    passwordHash,
    salt,
    institution: userData.institution.trim() || "ไม่ระบุสถาบัน",
    department: userData.department.trim() || "เทคโนโลยีสารสนเทศ",
    educationLevel: userData.educationLevel.trim() || "ปวช. 1",
    isVerified: userData.isVerified ?? true,
    role: userData.role || "student",
    createdAt: now,
    updatedAt: now,
  };

  const mongo = await getMongoDb();
  if (mongo) {
    await ensureMongoSeed(mongo);
    await mongo.collection("users").insertOne(newUser);
    return newUser;
  }

  const db = ensureDbFile();
  db.users.push(newUser);
  saveDb(db);
  return newUser;
}

export async function updateUser(
  id: string,
  updates: Partial<Pick<DbUser, "name" | "institution" | "department" | "educationLevel" | "role" | "isVerified">>
): Promise<DbUser | null> {
  const now = new Date().toISOString();
  const sanitizedUpdates: any = { updatedAt: now };
  if (updates.name !== undefined) sanitizedUpdates.name = updates.name.trim();
  if (updates.institution !== undefined) sanitizedUpdates.institution = updates.institution.trim();
  if (updates.department !== undefined) sanitizedUpdates.department = updates.department.trim();
  if (updates.educationLevel !== undefined) sanitizedUpdates.educationLevel = updates.educationLevel.trim();
  if (updates.role !== undefined) sanitizedUpdates.role = updates.role;
  if (updates.isVerified !== undefined) sanitizedUpdates.isVerified = updates.isVerified;

  const mongo = await getMongoDb();
  if (mongo) {
    await ensureMongoSeed(mongo);
    await mongo.collection("users").updateOne({ id }, { $set: sanitizedUpdates });
    const updated = await mongo.collection("users").findOne({ id }, { projection: { _id: 0 } });
    return (updated as unknown as DbUser) || null;
  }

  const db = ensureDbFile();
  const user = db.users.find((u) => u.id === id);
  if (!user) return null;

  Object.assign(user, sanitizedUpdates);
  saveDb(db);
  return user;
}

export async function deleteUser(id: string): Promise<boolean> {
  const mongo = await getMongoDb();
  if (mongo) {
    await ensureMongoSeed(mongo);
    const user = await mongo.collection("users").findOne({ id });
    if (!user) return false;

    await mongo.collection("users").deleteOne({ id });
    await mongo.collection("sessions").deleteMany({ userId: id });
    if (user.email) {
      await mongo.collection("otps").deleteMany({ email: user.email.toLowerCase() });
    }
    return true;
  }

  const db = ensureDbFile();
  const index = db.users.findIndex((u) => u.id === id);
  if (index === -1) return false;

  const deletedUser = db.users[index];
  db.users.splice(index, 1);
  db.sessions = db.sessions.filter((s) => s.userId !== id);
  db.otps = db.otps.filter((o) => o.email.toLowerCase() !== deletedUser.email.toLowerCase());
  saveDb(db);
  return true;
}

// -------------------------------------------------------------
// Safe Session & OTP Masking Utilities (Prevent Token & OTP Leakage)
// -------------------------------------------------------------

export function hashSessionId(token: string): string {
  return "sid_" + crypto.createHash("sha256").update(token).digest("hex").slice(0, 16);
}

export function maskToken(token: string): string {
  if (!token || token.length < 10) return "******";
  return token.slice(0, 8) + "..." + token.slice(-4);
}

export function maskOtpCode(code: string): string {
  if (!code || code.length < 4) return "******";
  return "•••" + code.slice(-3);
}

export async function getAllSessions(): Promise<
  (SessionRecord & { user?: { name: string; email: string; institution: string } })[]
> {
  const mongo = await getMongoDb();
  if (mongo) {
    await ensureMongoSeed(mongo);
    const sessions = (await mongo.collection("sessions").find({}, { projection: { _id: 0 } }).toArray()) as unknown as SessionRecord[];
    const users = (await mongo.collection("users").find({}, { projection: { _id: 0, id: 1, name: 1, email: 1, institution: 1 } }).toArray()) as unknown as DbUser[];
    const userMap = new Map(users.map((u) => [u.id, u]));

    return sessions.map((s) => {
      const u = userMap.get(s.userId);
      return {
        ...s,
        user: u ? { name: u.name, email: u.email, institution: u.institution } : undefined,
      };
    });
  }

  const db = ensureDbFile();
  return db.sessions.map((s) => {
    const user = db.users.find((u) => u.id === s.userId);
    return {
      ...s,
      user: user ? { name: user.name, email: user.email, institution: user.institution } : undefined,
    };
  });
}

/**
 * Returns session list sanitized for admin UI/API.
 * Raw tokens are replaced with safe session hashes and masked preview strings.
 */
export async function getAllSessionsSafe(): Promise<
  {
    id: string;
    token: string;
    tokenMasked: string;
    userId: string;
    expiresAt: number;
    user?: { name: string; email: string; institution: string };
  }[]
> {
  const sessions = await getAllSessions();
  const now = Date.now();
  return sessions
    .filter((s) => s.expiresAt > now)
    .map((s) => {
      const sid = hashSessionId(s.token);
      return {
        id: sid,
        token: sid, // Safe session identifier, never the raw secret token
        tokenMasked: maskToken(s.token),
        userId: s.userId,
        expiresAt: s.expiresAt,
        user: s.user,
      };
    });
}

/**
 * Revokes a session either by exact token or by hashed session ID (sid_...).
 */
export async function deleteSession(identifier: string): Promise<boolean> {
  const cleanId = identifier.trim();
  const mongo = await getMongoDb();
  if (mongo) {
    await ensureMongoSeed(mongo);
    // Direct match on raw token
    const directResult = await mongo.collection("sessions").deleteOne({ token: cleanId });
    if ((directResult.deletedCount ?? 0) > 0) return true;

    // Check by hashed session ID
    const allSessions = (await mongo.collection("sessions").find({}).toArray()) as unknown as (SessionRecord & { _id: any })[];
    for (const s of allSessions) {
      if (hashSessionId(s.token) === cleanId) {
        await mongo.collection("sessions").deleteOne({ _id: s._id });
        return true;
      }
    }
    return false;
  }

  const db = ensureDbFile();
  const beforeCount = db.sessions.length;
  db.sessions = db.sessions.filter(
    (s) => s.token !== cleanId && hashSessionId(s.token) !== cleanId
  );
  saveDb(db);
  return db.sessions.length < beforeCount;
}

export async function getAllOtps(): Promise<OtpRecord[]> {
  const mongo = await getMongoDb();
  if (mongo) {
    await ensureMongoSeed(mongo);
    const otps = await mongo.collection("otps").find({}, { projection: { _id: 0 } }).toArray();
    return otps as unknown as OtpRecord[];
  }

  const db = ensureDbFile();
  return db.otps;
}

/**
 * Returns pending OTP list with codes securely masked.
 */
export async function getAllOtpsSafe(): Promise<
  {
    email: string;
    code: string;
    expiresAt: number;
    createdAt: number;
  }[]
> {
  const otps = await getAllOtps();
  const now = Date.now();
  return otps
    .filter((o) => o.expiresAt > now)
    .map((o) => ({
      email: o.email,
      code: maskOtpCode(o.code),
      expiresAt: o.expiresAt,
      createdAt: o.createdAt,
    }));
}

export async function getAdminStats() {
  const mongo = await getMongoDb();
  let users: DbUser[] = [];
  let sessions: SessionRecord[] = [];
  let otps: OtpRecord[] = [];
  let isMongo = false;

  if (mongo) {
    await ensureMongoSeed(mongo);
    users = (await mongo.collection("users").find({}, { projection: { _id: 0 } }).toArray()) as unknown as DbUser[];
    sessions = (await mongo.collection("sessions").find({}, { projection: { _id: 0 } }).toArray()) as unknown as SessionRecord[];
    otps = (await mongo.collection("otps").find({}, { projection: { _id: 0 } }).toArray()) as unknown as OtpRecord[];
    isMongo = true;
  } else {
    const db = ensureDbFile();
    users = db.users;
    sessions = db.sessions;
    otps = db.otps;
  }

  const roles = {
    students: users.filter((u) => u.role === "student").length,
    instructors: users.filter((u) => u.role === "instructor").length,
    admins: users.filter((u) => u.role === "admin").length,
  };

  const verifiedCount = users.filter((u) => u.isVerified).length;
  const unverifiedCount = users.filter((u) => !u.isVerified).length;

  const institutionMap: Record<string, number> = {};
  users.forEach((u) => {
    const inst = u.institution || "ไม่ระบุสถาบัน";
    institutionMap[inst] = (institutionMap[inst] || 0) + 1;
  });
  const institutions = Object.entries(institutionMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  const departmentMap: Record<string, number> = {};
  users.forEach((u) => {
    const dept = u.department || "เทคโนโลยีสารสนเทศ";
    departmentMap[dept] = (departmentMap[dept] || 0) + 1;
  });
  const departments = Object.entries(departmentMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  const educationMap: Record<string, number> = {};
  users.forEach((u) => {
    const edu = u.educationLevel || "ปวช.";
    educationMap[edu] = (educationMap[edu] || 0) + 1;
  });
  const educationLevels = Object.entries(educationMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  const now = Date.now();
  const activeSessions = sessions.filter((s) => s.expiresAt > now).length;
  const activeOtps = otps.filter((o) => o.expiresAt > now).length;

  let dbFileSizeKb = 0;
  try {
    if (fs.existsSync(DB_FILE_PATH)) {
      const stats = fs.statSync(DB_FILE_PATH);
      dbFileSizeKb = Math.round((stats.size / 1024) * 10) / 10;
    }
  } catch (e) {}

  const memory = process.memoryUsage();

  return {
    totalUsers: users.length,
    verifiedUsers: verifiedCount,
    unverifiedUsers: unverifiedCount,
    roles,
    activeSessions,
    activeOtps,
    institutions,
    departments,
    educationLevels,
    telemetry: {
      status: "healthy",
      dbStatus: isMongo ? "connected (MongoDB Atlas Cloud)" : "connected (Local JSON Storage)",
      dbType: isMongo ? "MongoDB Atlas (Global Cloud Cluster)" : "Local JSON Storage (ACID file stream)",
      dbPath: isMongo ? "mongodb+srv://[Cloud Cluster]" : "src/data/db.json",
      dbFileSizeKb: isMongo ? 0 : dbFileSizeKb,
      uptimeSeconds: Math.floor(process.uptime()),
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      heapUsedMb: Math.round((memory.heapUsed / 1024 / 1024) * 10) / 10,
      heapTotalMb: Math.round((memory.heapTotal / 1024 / 1024) * 10) / 10,
      rssMb: Math.round((memory.rss / 1024 / 1024) * 10) / 10,
      timestamp: new Date().toISOString(),
    },
  };
}

// -------------------------------------------------------------
// Dedicated Admin Authentication (kitsvcadmin / kitsvc2570)
// -------------------------------------------------------------

export async function loginAdmin(
  username: string,
  password: string
): Promise<{
  success: boolean;
  message: string;
  adminUser?: Omit<DbUser, "passwordHash" | "salt">;
  token?: string;
}> {
  const cleanUsername = username.trim().toLowerCase();
  const mongo = await getMongoDb();

  // 1. Configurable master admin credential gate (supports ADMIN_USERNAME & ADMIN_PASSWORD env vars)
  const masterAdminUser = (process.env.ADMIN_USERNAME || "kitsvcadmin").toLowerCase().trim();
  const masterAdminPass = process.env.ADMIN_PASSWORD || "kitsvc2570";

  if (
    (cleanUsername === masterAdminUser || cleanUsername === "kitsvcadmin@itacademy.ac.th") &&
    password === masterAdminPass
  ) {
    let target: DbUser | null = null;
    const token = "admin_sess_" + crypto.randomUUID();

    if (mongo) {
      await ensureMongoSeed(mongo);
      target = (await mongo.collection("users").findOne({
        $or: [
          { email: "kitsvcadmin@itacademy.ac.th" },
          { name: masterAdminUser },
          { id: "usr_kitsvcadmin" },
        ],
      }, { projection: { _id: 0 } })) as unknown as DbUser | null;

      if (!target) {
        const salt = "salt_kitsvcadmin";
        const passwordHash = hashPassword(masterAdminPass, salt);
        const now = new Date().toISOString();
        const newAdmin: DbUser = {
          id: "usr_kitsvcadmin",
          name: masterAdminUser,
          email: "kitsvcadmin@itacademy.ac.th",
          passwordHash,
          salt,
          institution: "ศูนย์เทคโนโลยีสารสนเทศ อาชีวศึกษา",
          department: "ฝ่ายบริหารจัดการระบบแอดมินและการสอน",
          educationLevel: "ผู้ดูแลระบบสูงสุด (Super Admin)",
          isVerified: true,
          role: "admin",
          createdAt: now,
          updatedAt: now,
        };
        await mongo.collection("users").insertOne(newAdmin);
        target = newAdmin;
      }

      await mongo.collection("sessions").insertOne({
        token,
        userId: target.id,
        expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
      });

      const { passwordHash: _, salt: __, ...safeAdmin } = target;
      return {
        success: true,
        message: "เข้าสู่ระบบแอดมินสำเร็จ ยินดีต้อนรับผู้ดูแลระบบสูงสุด",
        adminUser: safeAdmin,
        token,
      };
    }

    const db = ensureDbFile();
    target = db.users.find(
      (u) =>
        u.email.toLowerCase() === "kitsvcadmin@itacademy.ac.th" ||
        u.name.toLowerCase() === masterAdminUser ||
        u.id === "usr_kitsvcadmin"
    ) || null;

    if (!target) {
      const salt = "salt_kitsvcadmin";
      const passwordHash = hashPassword(masterAdminPass, salt);
      const now = new Date().toISOString();
      const newAdmin: DbUser = {
        id: "usr_kitsvcadmin",
        name: masterAdminUser,
        email: "kitsvcadmin@itacademy.ac.th",
        passwordHash,
        salt,
        institution: "ศูนย์เทคโนโลยีสารสนเทศ อาชีวศึกษา",
        department: "ฝ่ายบริหารจัดการระบบแอดมินและการสอน",
        educationLevel: "ผู้ดูแลระบบสูงสุด (Super Admin)",
        isVerified: true,
        role: "admin",
        createdAt: now,
        updatedAt: now,
      };
      db.users.unshift(newAdmin);
      target = newAdmin;
    }

    db.sessions.push({
      token,
      userId: target.id,
      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    });
    saveDb(db);

    const { passwordHash: _, salt: __, ...safeAdmin } = target;
    return {
      success: true,
      message: "เข้าสู่ระบบแอดมินสำเร็จ ยินดีต้อนรับผู้ดูแลระบบสูงสุด",
      adminUser: safeAdmin,
      token,
    };
  }

  // 2. Generic admin/instructor verification
  if (mongo) {
    await ensureMongoSeed(mongo);
    const admin = (await mongo.collection("users").findOne({
      role: { $in: ["admin", "instructor"] },
      $or: [
        { email: cleanUsername },
        { name: cleanUsername },
        { id: cleanUsername },
      ],
    }, { projection: { _id: 0 } })) as unknown as DbUser | null;

    if (!admin) {
      return { success: false, message: "ชื่อผู้ใช้หรือรหัสผ่านแอดมินไม่ถูกต้อง" };
    }

    const hash = hashPassword(password, admin.salt);
    if (hash !== admin.passwordHash) {
      return { success: false, message: "ชื่อผู้ใช้หรือรหัสผ่านแอดมินไม่ถูกต้อง" };
    }

    const token = "admin_sess_" + crypto.randomUUID();
    await mongo.collection("sessions").insertOne({
      token,
      userId: admin.id,
      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    });

    const { passwordHash: _, salt: __, ...safeAdmin } = admin;
    return {
      success: true,
      message: "เข้าสู่ระบบแอดมินสำเร็จ",
      adminUser: safeAdmin,
      token,
    };
  }

  const db = ensureDbFile();
  const admin = db.users.find(
    (u) =>
      (u.role === "admin" || u.role === "instructor") &&
      (u.email.toLowerCase() === cleanUsername ||
       u.name.toLowerCase() === cleanUsername ||
       u.id.toLowerCase() === cleanUsername)
  );

  if (!admin) {
    return { success: false, message: "ชื่อผู้ใช้หรือรหัสผ่านแอดมินไม่ถูกต้อง" };
  }

  const hash = hashPassword(password, admin.salt);
  if (hash !== admin.passwordHash) {
    return { success: false, message: "ชื่อผู้ใช้หรือรหัสผ่านแอดมินไม่ถูกต้อง" };
  }

  const token = "admin_sess_" + crypto.randomUUID();
  db.sessions.push({
    token,
    userId: admin.id,
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
  });
  saveDb(db);

  const { passwordHash: _, salt: __, ...safeAdmin } = admin;
  return {
    success: true,
    message: "เข้าสู่ระบบแอดมินสำเร็จ",
    adminUser: safeAdmin,
    token,
  };
}

export async function validateAdminSession(
  token: string
): Promise<Omit<DbUser, "passwordHash" | "salt"> | null> {
  const mongo = await getMongoDb();
  if (mongo) {
    await ensureMongoSeed(mongo);
    const session = await mongo.collection("sessions").findOne({
      token,
      expiresAt: { $gt: Date.now() },
    });
    if (!session) return null;

    const user = (await mongo.collection("users").findOne({
      id: session.userId,
      role: { $in: ["admin", "instructor"] },
    }, { projection: { _id: 0, passwordHash: 0, salt: 0 } })) as unknown as Omit<DbUser, "passwordHash" | "salt"> | null;

    return user;
  }

  const db = ensureDbFile();
  const session = db.sessions.find((s) => s.token === token && s.expiresAt > Date.now());
  if (!session) return null;

  const user = db.users.find((u) => u.id === session.userId);
  if (!user || (user.role !== "admin" && user.role !== "instructor")) return null;

  const { passwordHash, salt, ...safeUser } = user;
  return safeUser;
}
