import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  function refreshPage() {
    window.location.reload(false);
  }
  const handleOrder = (e) => {
    e.preventDefault();
    if (!name || !address) {
      alert("Please fill in all details");
      return;
    }
    alert("Order placed successfully!");
    navigate("/");
    refreshPage()
  };

  return (
    <div className="pt-20 p-6">
      <h2 className="text-2xl font-bold">Checkout</h2>

      <form onSubmit={handleOrder} className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="Shipping Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="card">Credit/Debit Card</option>
          <option value="cod">Cash on Delivery</option>
        </select>

        <div className="text-xl font-bold mt-6">Total: ₹{totalPrice.toFixed(2)}</div>

        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
