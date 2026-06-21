import mysql from "mysql2/promise";

// export const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// export const db = mysql.createPool({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password123",
//   database: "finbuddy",
//   connectionLimit: 10,
// });

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "finbuddy";

if (!uri) {
  throw new Error("Missing required environment variable: MONGODB_URI");
}

let clientPromise: Promise<MongoClient> | undefined;

function getClient() {
  if (!clientPromise) {
    clientPromise = MongoClient.connect(uri!, {
      // Avoid socket hanging under serverless runtimes
      serverSelectionTimeoutMS: 10_000,
      maxPoolSize: 5,
    });
  }
  return clientPromise;
}

export const db = await (async () => {
  const client = await getClient();
  return client.db(dbName);
})();
