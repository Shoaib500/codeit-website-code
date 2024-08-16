import React from "react";
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./screens/home/home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import About from "./screens/about/about";
import Portfolio from "./screens/portfolio/portfolio";
import WevDev from "./screens/services/webDev/webdev";
import AppDev from "./screens/services/appDev/appdev";
import ContentWriting from "./screens/services/contentWriting/cw";
import BrandMarketing from "./screens/services/brandMarketing/bm";
import DigitalMarketing from "./screens/services/deigitalMarketing/dm";
import ScrollToTop from "./components/scrollToTop/scrollToTop";

function App() {
  return (
    <div className="App">
      <HashRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/webdev" element={<WevDev />} />
          <Route path="/appdev" element={<AppDev />} />
          <Route path="/content-writing" element={<ContentWriting />} />
          <Route path="/brand-marketing" element={<BrandMarketing />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
