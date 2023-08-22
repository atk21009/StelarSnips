import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./Landing";
import Header from "./Header";
import Footer from "./Footer";

import Product from "./subpages/Product";
import Location from "./subpages/Location";
import Booking from "./subpages/Booking";
import Services from "./subpages/Services";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
