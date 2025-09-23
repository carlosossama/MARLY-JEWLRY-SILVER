// src/components/ProductCard.jsx
import React from "react";

function ProductCard({ product, onClick }) {
  return (
    <div
      className="relative bg-white bg-opacity-10 backdrop-blur-lg border border-yellow-500 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transform transition duration-300 shadow-md hover:shadow-lg"
      onClick={() => onClick(product)}
    >
      {/* Product Image with responsive srcSet */}
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        srcSet={`${product.image}?w=300 300w, ${product.image}?w=600 600w`}
        sizes="(max-width: 640px) 100vw, 50vw"
        className="w-full h-44 sm:h-56 md:h-64 object-cover"
      />

      {/* Product Info */}
      <div className="p-3 sm:p-4 text-center">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-yellow-300">
          {product.name}
        </h3>
      </div>
    </div>
  );
}

export default ProductCard;
