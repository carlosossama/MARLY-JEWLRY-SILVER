import { useParams } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

const maleProducts = {
  gold: {
    "سلسله": [
      { name: "سلسلة ذهبية 1", image: "/images/menneck1.jpg", weight: "15", karat: "21" },
      { name: "سلسلة ذهبية 2", image: "/images/menneck2.jpg", weight: "18", karat: "21" },
    ],
    "خاتم": [
      { name: "خاتم ذهبي 1", image: "/images/menring1.jpg", weight: "7", karat: "18" },
      { name: "خاتم ذهبي 2", image: "/images/menring2.jpg", weight: "9", karat: "21" },
    ],
    "انسيال": [
      { name: "انسيال ذهبي 1", image: "/images/menbrace1.jpg", weight: "11", karat: "21" },
      { name: "انسيال ذهبي 2", image: "/images/menbrace2.jpg", weight: "10", karat: "18" },
    ],
  },
  silver: {
    "سلسله": [
      { name: "سلسلة فضة 1", image: "/images/mensilverneck1.jpg", weight: "16", karat: "925" },
      { name: "سلسلة فضة 2", image: "/images/mensilverneck2.jpg", weight: "14", karat: "925" },
    ],
    "خاتم": [
      { name: "خاتم فضة 1", image: "/images/mensilverring1.jpg", weight: "6", karat: "925" },
      { name: "خاتم فضة 2", image: "/images/mensilverring2.jpg", weight: "8", karat: "925" },
    ],
    "انسيال": [
      { name: "انسيال فضة 1", image: "/images/mensilverbrace1.jpg", weight: "12", karat: "925" },
      { name: "انسيال فضة 2", image: "/images/mensilverbrace2.jpg", weight: "13", karat: "925" },
    ],
  },
};

function MaleCategoryPage({ metalType }) {
  const { subcategory } = useParams();
  const products = maleProducts[metalType]?.[subcategory] || [];

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen px-6 py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400">
          {subcategory} - {metalType === "gold" ? "Gold" : "Silver"}
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-400">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} onClick={setSelectedProduct} />
            ))}
          </div>
        )}

        {/* Modal */}
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </div>
    </div>
  );
}

export default MaleCategoryPage;
