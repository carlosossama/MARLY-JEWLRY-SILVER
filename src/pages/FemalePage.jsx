import React from 'react';
import { Link } from 'react-router-dom';

const femaleCategories = {
  gold: [
    { name: 'حلق', image: "/images/female-gold-earring.jpg" },
    { name: 'كوليه', image: "/images/female-gold-necklace.jpg" },
    { name: 'سلسله', image: "/images/female-gold-chain.jpg" },
    { name: 'خاتم', image: "/images/female-gold-ring.jpg" },
    { name: 'اسوره', image: "/images/female-gold-bracelet.jpg" },
    { name: 'خلخال', image: "/images/female-gold-anklet.jpg" },
  ],
  silver: [
    { name: 'حلق', image: "/images/female-silver-earring.jpg" },
    { name: 'كوليه', image: "/images/female-silver-necklace.jpg" },
    { name: 'سلسله', image: "/images/female-silver-chain.jpg" },
    { name: 'خاتم', image: "/images/female-silver-ring.jpg" },
    { name: 'اسوره', image: "/images/female-silver-bracelet.jpg" },
    { name: 'خلخال', image: "/images/female-silver-anklet.jpg" },
  ],
};

function FemalePage({ metalType }) {
  const categories = femaleCategories[metalType];

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#D4AF37]">
          Women's {metalType === 'gold' ? 'Gold' : 'Silver'} Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <Link
              to={`/female/${cat.name}`}
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md overflow-hidden text-center transition-transform hover:scale-105 hover:border-yellow-300"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FemalePage;
