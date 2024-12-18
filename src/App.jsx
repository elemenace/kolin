import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Product from "./components/Product";
import Footer from "./components/Footer";
import About from "./components/About";
import Shop from "./components/Shop";
import Cosmetics from "./components/Cosmetics";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          {/* Define routes for different components */}
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Product /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
