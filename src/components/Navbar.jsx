// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ToggleSwitch.css";

function Navbar({ metalType, setMetalType }) {
  const [isGold, setIsGold] = useState(metalType === "gold");

  const handleToggle = () => {
    const newType = isGold ? "silver" : "gold";
    setIsGold(!isGold);
    setMetalType(newType);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-black/70 via-gray-900/70 to-black/70 shadow-md border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-[#D4AF37] hover:text-yellow-300 transition-colors">
          MARLY JEWLRY & SILVER
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-6 font-medium">
          <Link to="/" className="text-white hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link to="/contact" className="text-white hover:text-yellow-300 transition-colors">
            Contact
          </Link>

          {/* Toggle Switch */}
          <div className="switch-wrapper cursor-pointer" onClick={handleToggle}>
            <div className={`switch ${isGold ? "gold" : "silver"}`}>
              <span className="label left">Gold</span>
              <span className="label right">Silver</span>
              <div className="slider" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
