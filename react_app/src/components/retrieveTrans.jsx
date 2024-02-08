import React, { useState } from "react";
import { getTrans } from "../modules/requests";

const RetrieveTransactions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState(null);

  const handleRetrieveClick = async () => {
    setIsLoading(true);
    try {
      const transactions = await getTrans(); // Assuming getTrans returns the transaction data
      setTransactions(transactions);
    } catch (error) {
      console.error("Error retrieving transactions:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto my-10 p-4 border rounded-md shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Transaction History
      </h2>
      <div className="flex justify-center items-center h-full">
        <button
          onClick={handleRetrieveClick}
          disabled={isLoading}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          {isLoading ? "Retrieving..." : "Retrieve Transactions"}
        </button>
      </div>
      {transactions && (
        <div className="mt-4 overflow-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                {Object.keys(transactions[0]).map((key) => (
                  <th key={key} className="border p-2 bg-gray-200">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={transaction._id}
                  className={index % 2 === 0 ? "bg-green-300" : "bg-green-100"}
                >
                  {Object.values(transaction).map((value, idx) => (
                    <td key={idx} className="border p-2">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RetrieveTransactions;
