//MakePurchase page

import React, { useState } from "react";
import { createCheckoutSession } from "../modules/requests";

const MakePurchase = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [quantity, setQuantity] = useState(1);
  const unitAmount = 1000; // Amount in cents for one service

  const handleSubmit = async (event) => {
    event.preventDefault();

    const totalAmount = unitAmount * quantity;

    const paymentData = {
      name,
      surname,
      payment_method_types: "card",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "our services",
            },
            unit_amount: totalAmount * 10, // $10/unit
          },
          quantity,
        },
      ],
    };

    try {
      await createCheckoutSession(paymentData); // Call the createCheckoutSession function with paymentData
      // Reset form fields after successful submission
      setName("");
      setSurname("");
      setQuantity(1); // Reset to initial quantity
    } catch (error) {
      console.error("Error in processing payment:", error);
    }
  };

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Purchase our Service
      </h2>
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
      >
        {/* Name Field */}
        <div className="form-group mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Surname Field */}
        <div className="form-group mb-4">
          <label htmlFor="surname" className="block mb-2">
            Surname
          </label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Quantity Field */}
        <div className="form-group mb-4">
          <label htmlFor="quantity" className="block mb-2">
            Quantity ($10 per unit)
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Make Purchase
        </button>
      </form>
    </div>
  );
};

export default MakePurchase;
