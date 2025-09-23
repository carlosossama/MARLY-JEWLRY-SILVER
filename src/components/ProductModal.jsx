// src/components/ProductModal.jsx
import React, { useEffect } from "react";

function ProductModal({ product, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full relative text-black shadow-lg overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        {/* Product Info */}
        <h2 className="text-xl font-bold text-center mb-2">{product.name}</h2>
        <p className="text-center text-gray-700">الوزن: {product.weight}</p>
        <p className="text-center text-gray-700">العيار: {product.karat}</p>
      </div>
    </div>
  );
}

export default ProductModal;
