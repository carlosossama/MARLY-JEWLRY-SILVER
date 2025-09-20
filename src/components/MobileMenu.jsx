import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import ToggleSwitch from './ToggleSwitch';

function MobileMenu({ metalType, setMetalType }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={handleToggleMenu} className="text-white text-3xl">
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      <div className={`fixed top-0 right-0 w-64 h-full bg-[#1F1F1F] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col space-y-6 text-white">
          <a href="#" className="hover:text-yellow-300" onClick={handleToggleMenu}>Home</a>
          <a href="#" className="hover:text-yellow-300" onClick={handleToggleMenu}>Contact</a>

          {/* Toggle Switch */}
          <div className="pt-4 border-t border-white/20">
            <p className="text-sm mb-2 text-gray-300">Choose Metal</p>
            <ToggleSwitch metalType={metalType} setMetalType={setMetalType} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
