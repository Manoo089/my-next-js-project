import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "online-shop";

export default async function handler({ query: { typ } }, res) {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("products");

  const findResult = await collection.find({ category: typ }).toArray();

  res.status(200).json(findResult);
}
