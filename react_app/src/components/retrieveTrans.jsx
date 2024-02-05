import React, { useState } from "react";
import { getTrans } from "../modules/requests";

const RetrieveTransactions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const handleRetrieveClick = async () => {
    setIsLoading(true);

    try {
      const transactions = await getTrans(); // Fetch the data using the getTrans function
      console.log(`The response.data contains: ${transactions}`);
      setTransactions(transactions); // Assuming response.data contains the array of transactions
    } catch (error) {
      console.error("Error retrieving transactions:", error);
    }

    setIsLoading(false);
  };

  const getRowStyle = (index) => {
    // Alternate colors for rows
    return index % 2 === 0 ? "bg-green-200" : "bg-green-400";
  };

  return (
    <div className="container mx-auto my-10 p-4 border rounded-md shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Transaction History
      </h2>
      <button
        onClick={handleRetrieveClick}
        disabled={isLoading}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        {isLoading ? "Retrieving..." : "Retrieve Transactions"}
      </button>
      {transactions && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Transactions:</h3>
          <ul>
            {transactions.map((transaction, index) => (
              <li
                key={transaction._id}
                className={`mb-2 p-2 ${getRowStyle(index)}`}
              >
                Name: {transaction.name}, Email: {transaction.email}, Card
                Number: {transaction.card_number}, Expiry: {transaction.expiry}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RetrieveTransactions;
