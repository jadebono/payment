import React, { useState } from "react";
import MakePurchase from "../components/MakePurchase"; // Assuming this is the path to your PaymentForm component
import RetrieveTransactions from "../components/retrieveTrans"; // Assuming this is the path to your RetrieveTransactions component

const ToggleComponentsPage = () => {
  const [activeComponent, setActiveComponent] = useState("");

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Transaction Management
      </h2>
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveComponent("retrieve")}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Retrieve Transactions
        </button>
        <button
          onClick={() => setActiveComponent("submit")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Purchase Service
        </button>
      </div>

      {/* Conditional Rendering */}
      {activeComponent === "retrieve" && <RetrieveTransactions />}
      {activeComponent === "submit" && <MakePurchase />}
    </div>
  );
};

export default ToggleComponentsPage;
