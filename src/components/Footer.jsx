import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-lg text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-gold mb-4">MARLY JEWELRY & SILVER</h2>
          <p className="text-gray-300 text-sm">
            Luxury crafted gold & silver jewelry for women, men, and kids.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gold transition">Home</a></li>
            <li><a href="/female" className="hover:text-gold transition">Female</a></li>
            <li><a href="/male" className="hover:text-gold transition">Male</a></li>
            <li><a href="/kids" className="hover:text-gold transition">Kids</a></li>
            <li><a href="/contact" className="hover:text-gold transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold text-gold mb-4">Contact</h3>
          <p className="text-gray-300 text-sm mb-2">
            📍 Madinaty, East Hub G12
          </p>
          <p className="text-gray-300 text-sm mb-2">
            ⏰ Daily from 12 PM – 12 AM
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gold transition"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-gold transition"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-gold transition"><FaTiktok size={18} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        <p>
          © 2025 Mamdouh Jewelry | Developed by{" "}
          <span className="text-gold font-semibold">Carlos Osama</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
