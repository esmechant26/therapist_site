import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/index.jsx";
import About from "./pages/about.jsx";
import Services from "./pages/services.jsx";
import Servicios from "./pages/servicios.jsx";
import FAQ from "./pages/faq.jsx";
import Contact from "./pages/contact.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="footer-content">
          <p>
            Practice Address: Fully remote in Oakland, California | Phone Number: 510-544-6979 | Social:{" "}
            <a href="https://instagram.com/raizpsychotherapy" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <span className="footer-social-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm8.75 1.5a4.25 4.25 0 0 0-4.25-4.25h-8.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.5 3.5zm-1.5 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5z" />
                </svg>
              </span>
              @raizpsychotherapy
            </a>
          </p>
          <p></p>
          <p></p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
