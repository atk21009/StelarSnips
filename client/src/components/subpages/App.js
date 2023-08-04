import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "../Landing";
import Header from "../Header";
import Footer from "../Footer";

import Services from "./Services";
import Product from "./Product";
import Gallery from "./Gallery";
import Location from "./Location";
import Booking from "./Booking";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
