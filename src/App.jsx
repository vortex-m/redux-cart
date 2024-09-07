import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CardDetails from "./components/CardDetails";
import Cards from "./components/Cards";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
};

export default App;
