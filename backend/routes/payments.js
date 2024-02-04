// payments.js
// routes for all interactions with stripe
// receives payment data from frontend
// sends payment data to stripe
// receives response from stripe

"use strict";

import express from "express";
export const paymentsRouter = express.Router();

// post route to payments/charge to receive the data submitted by the frontend form
paymentsRouter.route("/charge").post(async (req, res) => {
  console.log("Form data received:", req.body);
  res.status(200).send("Form data received");
});
