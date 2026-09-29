import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI || "";

let client: MongoClient;
let clientPromise: Promise<MongoClient> | null = null;

if (uri) {
  if (process.env.NODE_ENV === "development") {
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }
}

export async function getMongoDb(): Promise<Db | null> {
  const currentUri = process.env.MONGODB_URI || "";
  if (!currentUri) return null;

  try {
    if (!clientPromise) {
      client = new MongoClient(currentUri);
      clientPromise = client.connect();
    }
    const connectedClient = await clientPromise;
    return connectedClient.db("it_academy");
  } catch (error) {
    console.error("MongoDB Atlas connection error:", error);
    return null;
  }
}
