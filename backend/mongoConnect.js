// mongoConnect.js
"use strict";

import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

// connection URI
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ecom.9evjz.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;

//create a new MongoClient
const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

// connect the client to the payprocessor database
const db = client.db(process.env.DB_NAME);

// create a test connection
export async function TestConnectMDB() {
  try {
    await client.db(process.env.DB_USERNAME).command({ ping: 1 });
    console.log(`connected successfully`);
  } catch (error) {
    console.log(error);
  }
}

// create connection
export async function ConnectMDB() {
  await client
    .connect()
    .then(console.log("Connected successfullY to database!"))
    .catch((error) => console.log(error));
}

// close connection
export async function CloseMDB() {
  await client
    .close()
    .then(console.log("Connection to database closed successfullY!"))
    .catch((error) => console.log(error));
}

// function to add document to a collection
export async function SaveToDB(col, data) {
  try {
    await db.collection(col).insertOne(data);
  } catch (error) {
    console.log(error);
  }
}
