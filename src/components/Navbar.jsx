// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For mobile menu icons
import "./ToggleSwitch.css";

function Navbar({ metalType, setMetalType }) {
  const [isGold, setIsGold] = useState(metalType === "gold");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    const newType = isGold ? "silver" : "gold";
    setIsGold(!isGold);
    setMetalType(newType);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-black/70 via-gray-900/70 to-black/70 shadow-md border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-bold text-[#D4AF37] hover:text-yellow-300 transition-colors"
        >
          MARLY JEWLRY & SILVER
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-yellow-300 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right Section → Toggle + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Toggle Switch */}
          <div
            className="switch-wrapper cursor-pointer"
            onClick={handleToggle}
          >
            <div className={`switch ${isGold ? "gold" : "silver"}`}>
              <span className="label left">Gold</span>
              <span className="label right">Silver</span>
              <div className="slider" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 space-y-4 text-center">
          <Link
            to="/"
            className="block text-white hover:text-yellow-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-yellow-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
