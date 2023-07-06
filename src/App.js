import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listen from "./pages/Listen";
import Shows from "./pages/Shows";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import "./App.css";
import Socials from "./components/Socials";

function App() {
  return (
    <Router>
      <div className="header">
        <h1 className="name">Clarence Jamessss</h1>
        <div className="socials">
          <Socials />
        </div>
      </div>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
