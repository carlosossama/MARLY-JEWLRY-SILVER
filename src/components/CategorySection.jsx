// src/components/CategorySection.jsx
import { Link } from "react-router-dom";
import "../styles/luxCards.css";

const categories = [
  { name: "Female", image: "/images/femalet.jpg", path: "/female" },
  { name: "Male", image: "/images/malet.jpg", path: "/male" },
  { name: "Kids", image: "/images/kid.jpg", path: "/kids" },
];

function CategorySection({ metalType }) {
  return (
    <section className="py-10 px-3 sm:px-6 bg-white">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-yellow-700 mb-6 sm:mb-10">
        Shop by Category
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link
            to={cat.path}
            key={cat.name}
            className={`lux-card ${metalType} group relative rounded-xl overflow-hidden shadow-md sm:shadow-lg`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy" // ✅ lazy load
              className="w-full h-48 sm:h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="label text-base sm:text-lg md:text-xl">{cat.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
