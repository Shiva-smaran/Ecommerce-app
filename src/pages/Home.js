import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

const Home = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(200000);
  const [sortOrder, setSortOrder] = useState("default");

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) => selectedCategory === "All" || product.category === selectedCategory)
    .filter((product) => product.price <= maxPrice)
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  const categories = ["All", ...new Set(products.map((product) => product.category))];

  return (
    <div className="p-6 pt-20">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />

      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="200000"
            step="5000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="cursor-pointer  w-100 accent-blue-500"
          />
          <span>₹{maxPrice.toLocaleString()}</span>
        </div>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="default">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <div className="flex justify-center">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain rounded-md hover:scale-105 transition-transform"
                />
              </Link>  
              </div>
              <h2 className="text-lg font-bold mt-2">{product.title}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-green-600 font-bold text-lg">₹{product.price.toLocaleString()}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-600 transition-all"
              >
                Add to Cart
              </button>
              <Link
                to={`/product/${product.id}`}
                className="block text-center text-blue-600 mt-2 hover:text-blue-800"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
