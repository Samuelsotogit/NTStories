import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/landing/Home";
import AppNavBar from "./components/appNavBar/AppNavbar";
import NarrativePage from "./components/narrative/Narratives";

function App() {
  const location = useLocation();
  useEffect(() => {
    const map: Record<string, string> = {
      "/": "home",
      "/commission": "commission",
      "/pentecost": "pentecost",
      "/martyr": "martyr",
      "/damascus": "damascus",
      "/disciples": "disciples",
    };
    const page = map[location.pathname] ?? "default";
    document.body.dataset.page = page;
  }, [location.pathname]);

  return (
    <>
      <AppNavBar />
      <div className="app">
        <main className="page-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/:slug" element={<NarrativePage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
export default App;
