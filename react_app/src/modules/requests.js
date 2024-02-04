// src/modules/requests.js

import axios from "axios";

const BASE_URL = "http://localhost:4000"; // Adjust this as necessary

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
