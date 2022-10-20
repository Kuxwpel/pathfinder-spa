import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Destinations from "./pages/Destinations";
import Book from "./pages/Book";
import Travel from "./pages/Travel";
import View from "./pages/View";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route render={() => <Navigate to="/" />} />
          <Route path="/" element={<Main />} />
          <Route path="/pathfinder-spa" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/book" element={<Book />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/view" element={<View />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
