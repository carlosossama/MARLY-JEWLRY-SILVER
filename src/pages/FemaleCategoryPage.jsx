// src/pages/FemaleCategoryPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductModal from "../components/ProductModal";

const femaleProducts = {
  gold: {
    "خاتم": [
      { name: "خاتم ذهبي 1", image: "/images/mensilverneck.jpg", weight: "5g", karat: "عيار 21" },
      { name: "خاتم ذهبي 2", image: "/images/femring2.jpg", weight: "4g", karat: "عيار 18" },
    ],
    "كوليه": [
      { name: "كوليه ذهبي 1", image: "/images/femneck1.jpg", weight: "10g", karat: "عيار 21" },
    ],
  },
  silver: {
    "خاتم": [
      { name: "خاتم فضة 1", image: "/images/femsilverring1.jpg", weight: "3g", karat: "عيار 925" },
    ],
    "كوليه": [
      { name: "كوليه فضة 1", image: "/images/femsilverneck1.jpg", weight: "6g", karat: "عيار 925" },
    ],
  },
};

function FemaleCategoryPage({ metalType }) {
  const { subcategory } = useParams();
  const products = femaleProducts[metalType]?.[subcategory] || [];

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen px-6 py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-pink-400">
          {subcategory} - {metalType === "gold" ? "ذهب" : "فضة"}
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-400">لا توجد منتجات</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedProduct(product)}
              >
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
                <h3 className="text-lg mt-3 text-center">{product.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default FemaleCategoryPage;
