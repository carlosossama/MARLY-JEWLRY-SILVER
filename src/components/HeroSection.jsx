// src/components/HeroSection.jsx
function HeroSection({ metalType }) {
  const headingColor =
    metalType === "gold"
      ? "text-yellow-800"
      : metalType === "silver"
      ? "text-gray-800"
      : "text-rose-800";

  return (
    <section className="relative h-[50vh] sm:h-[65vh] md:h-[70vh] flex items-center justify-center text-center">
      <img
        src={
          metalType === "gold"
            ? "/images/hero.jpg"
            : metalType === "silver"
            ? "/images/silver.jpg"
            : "/images/rose.jpg"
        }
        alt="Jewelry Background"
        loading="lazy" // ✅ lazy load
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-white px-4 py-3 sm:p-6 md:p-8 bg-black/50 rounded-lg backdrop-blur">
        <h2
          className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 ${headingColor}`}
        >
          Discover Timeless Beauty
        </h2>
        <p className="text-sm sm:text-base md:text-xl leading-relaxed">
          Fine {metalType.charAt(0).toUpperCase() + metalType.slice(1)} Jewelry
          for Every Occasion
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
