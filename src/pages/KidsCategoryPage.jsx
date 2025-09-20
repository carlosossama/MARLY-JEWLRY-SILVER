// src/pages/KidsCategoryPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductModal from "../components/ProductModal";

const kidsProducts = {
  gold: {
    "خاتم": [
      { name: "خاتم أطفال ذهبي", image: "/images/kidgoldring.jpg", weight: "2g", karat: "عيار 18" },
    ],
    "سلسله": [
      { name: "سلسلة أطفال ذهب", image: "/images/kidgoldneck.jpg", weight: "3g", karat: "عيار 21" },
    ],
  },
  silver: {
    "خاتم": [
      { name: "خاتم أطفال فضة", image: "/images/kidsilverring.jpg", weight: "1.5g", karat: "عيار 925" },
    ],
    "سلسله": [
      { name: "سلسلة أطفال فضة", image: "/images/kidsilverneck.jpg", weight: "2.5g", karat: "عيار 925" },
    ],
  },
};

function KidsCategoryPage({ metalType }) {
  const { subcategory } = useParams();
  const products = kidsProducts[metalType]?.[subcategory] || [];

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen px-6 py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-teal-300">
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

export default KidsCategoryPage;
