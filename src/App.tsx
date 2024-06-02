import React from "react";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./screens/home/home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import About from "./screens/about/about";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
