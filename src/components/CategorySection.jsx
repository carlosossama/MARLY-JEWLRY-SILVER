import { Link } from 'react-router-dom';
import '../styles/luxCards.css'; // You’ll create this next

const categories = [
  { name: 'Female', image: "/images/femalet.jpg", path: '/female' },
  { name: 'Male', image: "/images/malet.jpg", path: '/male' },
  { name: 'Kids', image: "/images/kid.jpg", path: '/kids' },
];

function CategorySection({ metalType }) {
  return (
    <section className="py-12 px-6 bg-white">
      <h3 className="text-3xl font-bold text-center text-yellow-700 mb-10">Shop by Category</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link
            to={cat.path}
            key={cat.name}
            className={`lux-card ${metalType} group relative`}
          >
            <img src={cat.image} alt={cat.name} className="w-full h-90 object-cover" />
            <div className="label">{cat.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
