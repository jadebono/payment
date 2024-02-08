import React from "react";
import { useNavigate } from "react-router-dom";

function SuccessPage() {
  let navigate = useNavigate(); // Renamed for clarity

  const handleGoBack = () => {
    navigate("/"); // Directly use navigate for navigation
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Payment Successful
        </h1>
        <p className="text-gray-600 font-bold mb-6">
          Your payment was processed successfully.
        </p>
        <button
          onClick={handleGoBack}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go Back to Main Page
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
