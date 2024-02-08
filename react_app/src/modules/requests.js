// src/modules/requests.js

import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_HOST}${process.env.REACT_APP_SERVER}`; // Adjust this from .env as necessary

// async function to send payment details to backend.
// export async function charge(data) {
//   console.log(`data is ${data}`);
//   try {
//     const response = await axios.post(`${BASE_URL}/payments/charge`, data, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log("Success:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// }
/*

*/

export async function createCheckoutSession(paymentData) {
  try {
    const response = await axios.post(
      `${BASE_URL}/payments/create-checkout-session`,
      JSON.stringify(paymentData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Success:", response.data);
    // !! This is test redirect when server responds with a test url for test redirection
    // Assuming the server responds with a URL to redirect to
    // for test purposes
    if (response.data.url) {
      window.location.href = response.data.url;
    } else {
      console.error("No URL returned from server");
    }

    /*
    code to redirect from successful/cancelled payment
    * working but commented out since this code cannot be tested as payment with third party has only test functionality 
    const checkoutSessionUrl = response.data.url;

    if (checkoutSessionUrl) {
      // Redirect user to success/cancel page
      window.location.href = checkoutSessionUrl;
    } else {
      console.error("No checkout session URL returned");
    }

    return response.data;
    */
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// async funtion to retrieve transactions
export async function getTrans() {
  const transactions = await axios
    .get(`${BASE_URL}/transactions/retrieve`)
    .then((res) => res.data)
    .catch((err) => false);
  return transactions;
}
