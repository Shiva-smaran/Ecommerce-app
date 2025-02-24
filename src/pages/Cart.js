import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="pt-20 p-6">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-lg">🛒 Your cart is empty!</p>
          <button
            className="w-50 bg-blue-500 text-white py-2 mt-4 hover:text-blue-800"
            onClick={() => navigate("/")}
          >Add items to cart</button>
        </div>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="border p-4 flex justify-between items-center mt-4">
              <img src={product.image} alt={product.title} className="w-20 h-20 object-cover" />
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-green-600">₹{product.price} x {product.qty} = ₹{product.price * product.qty}</p>
              <button onClick={() => removeFromCart(product.id)} className="bg-red-500 text-white px-4 py-2">
                Remove
              </button>
            </div>
          ))}

          <div className="text-xl font-bold mt-6">
            Total Price: ₹{totalPrice.toFixed(2)}
          </div>

          <button
            className="w-full bg-green-500 text-white py-2 mt-4"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Pay
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
