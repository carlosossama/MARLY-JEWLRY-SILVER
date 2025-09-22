import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ NEW
import HomePage from "./pages/HomePage";
import MalePage from "./pages/MalePage";
import FemalePage from "./pages/FemalePage";
import KidsPage from "./pages/KidsPage";
import MaleCategoryPage from "./pages/MaleCategoryPage";
import FemaleCategoryPage from "./pages/FemaleCategoryPage"; 
import KidsCategoryPage from "./pages/KidsCategoryPage"; 
import ContactPage from "./pages/ContactPage"; 

function App() {
  const [metalType, setMetalType] = useState("gold");

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white font-sans">
        {/* ✅ Navbar always on top */}
        <Navbar metalType={metalType} setMetalType={setMetalType} />

        {/* ✅ Page content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage metalType={metalType} />} />
            <Route path="/male" element={<MalePage metalType={metalType} />} />
            <Route path="/female" element={<FemalePage metalType={metalType} />} />
            <Route path="/kids" element={<KidsPage metalType={metalType} />} />

            {/* ✅ Deep Routes */}
            <Route path="/male/:subcategory" element={<MaleCategoryPage metalType={metalType} />} />
            <Route path="/female/:subcategory" element={<FemaleCategoryPage metalType={metalType} />} />
            <Route path="/kids/:subcategory" element={<KidsCategoryPage metalType={metalType} />} />

            {/* ✅ Contact Page */}
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        {/* ✅ Footer always at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
