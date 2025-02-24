import React,{useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]); 
  
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-3xl font-bold">❌ Product Not Found</h2>
        <p className="mt-2 text-gray-600">The product you are looking for does not exist.</p>
        <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Go Back Home
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="container mx-auto p-6 pt-20 stick">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-auto max-h-[70vh] object-contain rounded-lg shadow-lg mx-auto"
            />
        </div>


        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <p className="text-green-600 text-2xl font-semibold mt-4">₹{product.price}</p>

          {/* Additional Details */}
          {product.specifications && (
            <div className="mt-4 border-t pt-4">
              <h3 className="text-lg font-semibold text-gray-700">Specifications:</h3>
              <ul className="mt-2 text-gray-600 space-y-1">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <li key={key}>
                    <strong className="capitalize">{key.replace("_", " ")}:</strong> {Array.isArray(value) ? value.join(", ") : value}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-6 py-2 rounded mt-6 hover:bg-blue-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-800 mb-4">You may also like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((p) => (
            <Link
              to={`/product/${p.id}`}
              key={p.id}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img src={p.image} alt={p.title} className="w-40 h-40 object-cover rounded-md" />
              <h4 className="font-semibold text-gray-900">{p.title}</h4>
              <p className="text-green-600 font-bold">₹{p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
