// App.js
import "./App.css";
import React from "react";
import TechnologyUsed from "./Pages/TechnologyUsed";
import AllVisuals from "./Allvisuals/AllVisuals";
import AboutMe from "./Pages/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AllVisuals />} />
          <Route path="/technologyused" element={<TechnologyUsed />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
