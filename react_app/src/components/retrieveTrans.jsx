import React, { useState } from "react";

const RetrieveTransactions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState(null);

  const handleRetrieveClick = async () => {
    setIsLoading(true);
    // Placeholder for actual transaction retrieval logic
    // Example: setTransactions(await fetchTransactions());
    setTimeout(() => {
      setIsLoading(false);
      setTransactions([{ id: 1, amount: "$20.00", date: "2024-02-10" }]); // Mock data
    }, 2000); // Mock async delay
  };

  return (
    <div className="container mx-auto my-10 p-4 border rounded-md shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center ">
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
            {transactions.map((transaction) => (
              <li key={transaction.id} className="mb-2">
                Amount: {transaction.amount}, Date: {transaction.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RetrieveTransactions;
