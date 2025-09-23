// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MalePage from "./pages/MalePage";
import FemalePage from "./pages/FemalePage";
import KidsPage from "./pages/KidsPage";
import MaleCategoryPage from "./pages/MaleCategoryPage";
import FemaleCategoryPage from "./pages/FemaleCategoryPage";
import KidsCategoryPage from "./pages/KidsCategoryPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop"; // ✅ add this

function App() {
  const [metalType, setMetalType] = useState("gold");

  return (
    <Router>
      <Navbar metalType={metalType} setMetalType={setMetalType} />
      <ScrollToTop /> {/* ✅ auto scrolls to top on route change */}
      <Routes>
        <Route path="/" element={<HomePage metalType={metalType} />} />
        <Route path="/male" element={<MalePage metalType={metalType} />} />
        <Route path="/female" element={<FemalePage metalType={metalType} />} />
        <Route path="/kids" element={<KidsPage metalType={metalType} />} />
        <Route
          path="/male/:subcategory"
          element={<MaleCategoryPage metalType={metalType} />}
        />
        <Route
          path="/female/:subcategory"
          element={<FemaleCategoryPage metalType={metalType} />}
        />
        <Route
          path="/kids/:subcategory"
          element={<KidsCategoryPage metalType={metalType} />}
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
