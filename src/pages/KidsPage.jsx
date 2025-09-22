import React from 'react';
import { Link } from 'react-router-dom';

const kidsCategories = {
  gold: [
    { name: 'سلسله', image: "/images/kids-gold-chain.jpg" },
    { name: 'خاتم', image: "/images/kids-gold-ring.jpg" },
    { name: 'اسواره', image: "/images/kids-gold-bracelet.jpg" },
  ],
  silver: [
    { name: 'سلسله', image: "/images/kids-silver-chain.jpg" },
    { name: 'خاتم', image: "/images/kids-silver-ring.jpg" },
    { name: 'اسواره', image: "/images/kidsilverbraclet.jpg" },
  ],
};

function KidsPage({ metalType }) {
  const categories = kidsCategories[metalType];

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#D4AF37]">
          Kids' {metalType === 'gold' ? 'Gold' : 'Silver'} Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <Link
              to={`/kids/${cat.name}`}
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

export default KidsPage;
