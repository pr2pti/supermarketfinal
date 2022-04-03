import React from "react";
import logo from "./logo.svg";
import "./App.css";


import Header from "./components/Header";
import Slider from "./components/Slider";
import Mainslider from "./components/Mainslider";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      </Routes>
      

      
    </BrowserRouter>
  );
}

export default App;
