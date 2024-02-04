import cors from "cors";
import express from "express";
import { paymentsRouter } from "./routes/payments.js";

const app = express();
const port = 4000;

// List of allowed origins
const allowedOrigins = ["http://localhost:3000", "http://127.0.0.1:5501"];

// Middleware to parse JSON and urlencoded data
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/payments", paymentsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
