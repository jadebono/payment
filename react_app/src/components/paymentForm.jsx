import React from "react";
import { charge } from "../modules/requests";

const PaymentForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const object = {};
    formData.forEach((value, key) => (object[key] = value));
    const json = JSON.stringify(object);

    console.log("Form data object:", object); // Log the final object
    console.log("JSON string:", json); // Log the JSON string

    try {
      const response = await charge(json);
      console.log("Response from charge:", response);
      // Handle success response here
    } catch (error) {
      // Handle error here
      console.error("Error in processing payment:", error);
    }
  };

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4">Payment Form</h2>
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
      >
        <div className="form-group mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="card-number" className="block mb-2">
            Card Number
          </label>
          <input
            // !! for testing purposes this field will take a number not longer than 3 digits but not validated as a valid card number
            // !! use Luhn's algorithm for validating this at deployment
            type="text"
            id="card-number"
            name="card_number"
            required
            // !! restrict to number only
            pattern="\d*"
            maxLength="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="expiry" className="block mb-2">
            Expiry Date
          </label>
          <input
            // !! Date picker
            type="month"
            id="expiry"
            name="expiry"
            placeholder="MM/YY"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="cvc" className="block mb-2">
            CVC
          </label>

          <input
            // !! for testing purposes this input will take any number not longer           than 3 digits but not validated for CVC
            type="text"
            id="cvc"
            name="cvc"
            required
            // !! restrict to number only
            pattern="\d*"
            maxLength="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
