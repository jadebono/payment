// payments.js
// routes for all interactions with stripe
// receives payment data from frontend
// saves payment data in db
// redirects to stripe payment
// receives response from stripe

"use strict";

import dotenv from "dotenv";
import express from "express";
import { ObjectId } from "mongodb";
import { SaveToDB } from "../mongoConnect.js";
import Stripe from "stripe";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_PRIVATE_TEST_KEY);

//create new transaction data to store in mongo
//!! in production this should happen ONLY after a successful transaction has taken place
// !! for testing this will take place as soon as the request is received
async function storeToDB(data) {
  const name = data.name;
  const surname = data.surname;
  const paymentMethodTypes = data.payment_method_types;
  const [lineItem] = data.line_items; // Destructure the first item from the array
  const {
    price_data: { currency, product_data, unit_amount },
    quantity,
  } = lineItem;
  const productData = product_data.name; // get product data from object
  // create date and time that payment req received by server:
  const currentDate = new Date();
  const padZero = (num) => (num < 10 ? `0${num}` : num); // padding for leading zero in case of single digit days.
  const date = `${padZero(currentDate.getDate())}-${padZero(
    currentDate.getMonth() + 1
  )}-${currentDate.getFullYear()}`;
  const time = `${padZero(currentDate.getHours())}:${padZero(
    currentDate.getMinutes()
  )}:${padZero(currentDate.getSeconds())}`;
  const mongoPayload = {
    name,
    surname,
    time,
    date,
    paymentMethodTypes,
    currency,
    productData,
    unit_amount,
    quantity,
  };
  try {
    await SaveToDB(process.env.DB_COLLECTION_PAYMENTS, mongoPayload);
    console.log("Form data received");
  } catch (error) {
    console.error("Error saving data to DB:", error);
    throw new Error("Failed to save data to DB");
  }
}

export const paymentsRouter = express.Router();

/*
* This works to send provided payment to Stripe directly NOT through an external page
// Test route to Stripe
// post route to payments/charge to receive the data submitted by the frontend form
paymentsRouter.route("/charge").post(async (req, res) => {
  console.log(`charge route triggered`);
  try {
    // sample purchase data to send to stripe
    const charge = await stripe.charges.create({
      amount: 1000, // Amount in cents
      currency: "usd",
      source: "tok_visa", // Pre-made test token
      description: "Test charge",
    });
    console.log(`Charge successful:`, charge);
    res
      .status(200)
      .json({ success: true, message: "Charge created successfully", charge });
  } catch (error) {
    console.error(`Charge failed:`, error);
    res.status(500).json({
      success: false,
      message: "Charge creation failed",
      error: error.message,
    });
  }
});
*/

paymentsRouter.route("/create-checkout-session").post(async (req, res) => {
  await storeToDB(req.body);
  console.log("saved to DB");

  // this try-catch block is to test success/cancel routes
  // since payment cannot be completed because this is all
  // test data and test functionality
  try {
    res.json({ url: "http://localhost:3000/payment-success" });
  } catch {
    res.json({ url: "http://localhost:3000/payment-cancelled" });
  }

  // This is the code to redirect to an external payment page
  // try {
  //   const session = await stripe.checkout.sessions.create({
  //     payment_method_types: ["card"],
  //     line_items: [
  //       {
  //         price_data: {
  //           currency: "usd",
  //           product_data: {
  //             name: "T-shirt",
  //           },
  //           unit_amount: 2000,
  //         },
  //         quantity: 1,
  //       },
  //     ],
  //     mode: "payment",
  //     success_url: "http://localhost:3000/payment-success",
  //     cancel_url: "http://localhost:3000/payment-cancelled",
  //   });
  //   res.json({ url: session.url }); // Send the session URL
  //   res.json({ id: session.id }); // send the session id
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }
});
