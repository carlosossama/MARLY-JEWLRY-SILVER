// src/pages/HomePage.jsx
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import NewCollection from "../components/NewCollection"; // ✅ New section import

function HomePage({ metalType }) {
  return (
    <>
      <HeroSection metalType={metalType} />
      <CategorySection />
      <NewCollection metalType={metalType} /> {/* ✅ Replaces old ProductSection */}
    </>
  );
}

export default HomePage;
