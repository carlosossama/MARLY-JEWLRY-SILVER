function HeroSection({ metalType }) {
  const headingColor =
    metalType === 'gold' ? 'text-yellow-800' :
    metalType === 'silver' ? 'text-gray-800' : 'text-rose-800';

  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center">
      <img
        src={metalType === 'gold' ? "/images/hero.jpg" :
             metalType === 'silver' ? "/images/silver.jpg" : "/images/rose.jpg"}
        alt="Jewelry Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-white p-4 bg-black/50 rounded-lg backdrop-blur">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${headingColor}`}>Discover Timeless Beauty</h2>
        <p className="text-lg md:text-xl">
          Fine {metalType.charAt(0).toUpperCase() + metalType.slice(1)} Jewelry for Every Occasion
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
