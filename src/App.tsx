import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/landing/Home";
import AppNavBar from "./components/appNavBar/AppNavbar";
import NarrativePage from "./components/narrative/Narratives";

function App() {
  return (
    <>
      <AppNavBar />
      <div className="app">
        <main className="page-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/:slug" element={<NarrativePage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
export default App;
