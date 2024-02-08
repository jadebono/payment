import React from "react";
import { useNavigate } from "react-router-dom";

function CancelPage() {
  let navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h1>
        <p className="text-gray-600 font-bold mb-6">
          Your payment has failed. Please return to the main page to try again.
        </p>
        <button
          onClick={handleGoBack}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go Back to Main Page
        </button>
      </div>
    </div>
  );
}

export default CancelPage;
