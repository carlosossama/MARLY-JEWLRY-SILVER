import { Link } from "react-router-dom";
import "../styles/luxCards.css";

const categories = [
  { name: "Female", image: "/images/femalet.jpg", path: "/female" },
  { name: "Male", image: "/images/malet.jpg", path: "/male" },
  { name: "Kids", image: "/images/kid.jpg", path: "/kids" },
];

function CategorySection({ metalType }) {
  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <h3 className="text-2xl sm:text-3xl font-bold text-center text-yellow-700 mb-8 sm:mb-10">
        Shop by Category
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <Link
            to={cat.path}
            key={cat.name}
            className={`lux-card ${metalType} group relative rounded-2xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-56 sm:h-72 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="label text-lg sm:text-xl lg:text-2xl">{cat.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
