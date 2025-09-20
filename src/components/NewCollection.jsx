// src/components/NewCollection.jsx
import React from "react";

const goldItems = [
  { name: "خاتم ذهب", image: "/images/goldring1.jpg" },
  { name: "خاتم ذهب", image: "/images/goldring2.jpg" },
  { name: "اسورة ذهب", image: "/images/goldbracelet1.jpg" },
  { name: "اسورة ذهب", image: "/images/goldbracelet2.jpg" },
];

const silverItems = [
  { name: "خاتم فضة", image: "/images/silverring1.jpg" },
  { name: "خاتم فضة", image: "/images/silverring2.jpg" },
  { name: "اسورة فضة", image: "/images/silverbracelet1.jpg" },
  { name: "اسورة فضة", image: "/images/silverbracelet2.jpg" },
];

function NewCollection({ metalType }) {
  const products = metalType === "gold" ? goldItems : silverItems;

  return (
    <section className="px-6 py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#D4AF37] tracking-wide">
          New Collection - {metalType === "gold" ? "Gold" : "Silver"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:border-gold-400 transition-all duration-300 border border-white/20"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewCollection;
