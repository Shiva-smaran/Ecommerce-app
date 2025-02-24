import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20  p-6 text-center">
      <h2 className="text-2xl font-bold">Payment Page</h2>
      <p className="mt-4">This is a dummy payment page.</p>

      <button
        className="bg-green-500 text-white px-6 py-2 mt-6"
        onClick={() => {
          alert("Payment Successful!");
          navigate("/"); // Redirect to Home after payment
        }}
      >
        Confirm Payment
      </button>
    </div>
  );
};

export default Payment;
