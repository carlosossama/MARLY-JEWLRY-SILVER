// src/components/ProductModal.jsx
import React from "react";

function ProductModal({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full relative text-black shadow-lg">
        <button
          className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
        <h2 className="text-xl font-bold text-center mb-2">{product.name}</h2>
        <p className="text-center text-gray-700">الوزن: {product.weight}</p>
        <p className="text-center text-gray-700">العيار: {product.karat}</p>
      </div>
    </div>
  );
}

export default ProductModal;
