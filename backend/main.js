import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { ConnectMDB, CloseMDB } from "./mongoConnect.js";
import { paymentsRouter } from "./routes/payments.js";

const app = express();

// List of allowed origins
const allowedOrigins = ["http://localhost:3000", "http://127.0.0.1:5501"];

// Middleware to parse JSON and urlencoded data
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// run dotenv.config()
dotenv.config();

// routes
app.use("/payments", paymentsRouter);

// connect to db at server start
ConnectMDB();

// close connection on "exit" and "uncaughtException"
process.on("exit", () => CloseMDB());
process.on("uncaughtException", (error) => {
  console.log(error);
  CloseMDB();
});

// listen for connections
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.HOST}${process.env.PORT}`);
});
