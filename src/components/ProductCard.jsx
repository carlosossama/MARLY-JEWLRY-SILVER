import React from "react";

function ProductCard({ product, onClick }) {
  return (
    <div
      className="relative bg-white bg-opacity-10 backdrop-blur-lg border border-yellow-500 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transform transition duration-300"
      onClick={() => onClick(product)}
    >
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-yellow-300">{product.name}</h3>
      </div>
    </div>
  );
}

export default ProductCard;
