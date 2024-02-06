// src/modules/requests.js

import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_HOST}${process.env.REACT_APP_SERVER}`; // Adjust this from .env as necessary

// async function to send payment details to backend.
export async function charge(data) {
  console.log(`data is ${data}`);
  try {
    const response = await axios.post(`${BASE_URL}/payments/charge`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Success:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// async funtion to retrieve user details for login page
export async function getTrans() {
  const transactions = await axios
    .get(`${BASE_URL}/transactions/retrieve`)
    .then((res) => res.data)
    .catch((err) => false);
  return transactions;
}
