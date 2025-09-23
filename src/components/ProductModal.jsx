// src/components/ProductModal.jsx
import React from "react";

function ProductModal({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md md:max-w-2xl w-full relative text-black shadow-2xl transform scale-95 opacity-0 animate-modalFadeIn">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 sm:h-80 md:h-[28rem] object-cover rounded-lg mb-6"
        />

        {/* Product Details */}
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
          {product.name}
        </h2>
        <p className="text-center text-gray-700 text-base sm:text-lg mb-2">
          الوزن: {product.weight}
        </p>
        <p className="text-center text-gray-700 text-base sm:text-lg">
          العيار: {product.karat}
        </p>
      </div>
    </div>
  );
}

export default ProductModal;
