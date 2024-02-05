// payments.js
// routes for all interactions with stripe
// receives payment data from frontend
// sends payment data to stripe
// receives response from stripe

"use strict";

import dotenv from "dotenv";
import express from "express";
import { ObjectId } from "mongodb";
import { SaveToDB } from "../mongoConnect.js";

dotenv.config();

export const paymentsRouter = express.Router();

// post route to payments/charge to receive the data submitted by the frontend form
paymentsRouter.route("/charge").post(async (req, res) => {
  const data = req.body;
  await SaveToDB(process.env.DB_COLLECTION_PAYMENTS, data);
  console.log("Form data received:", data);
  res.status(200).send("Form data received");
});
