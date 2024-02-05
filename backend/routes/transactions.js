// transactions.js
// routes for all interactions with transactions db

"use strict";

import dotenv from "dotenv";
import express from "express";
import { ObjectId } from "mongodb";
import { LoadAllFromDB, SaveToDB } from "../mongoConnect.js";

dotenv.config();

export const transactionsRouter = express.Router();

// post route to payments/charge to receive the data submitted by the frontend form
transactionsRouter.route("/retrieve").get(async (req, res) => {
  const data = await LoadAllFromDB(process.env.DB_COLLECTION_PAYMENTS);
  console.log("Form data received:", data);
  res.send(data);
});
