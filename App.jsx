// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import NavBar from "./components/NavBar.jsx";
// import Home from "./pages/index.jsx";
// import About from "./pages/about.jsx";
// import Services from "./pages/services.jsx";
// import FAQ from "./pages/faq.jsx";
// import Contact from "./pages/contact.jsx";
// import "./App.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <main className="page-content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/faq" element={<FAQ />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </main>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/index.jsx";
import About from "./pages/about.jsx";
import Services from "./pages/services.jsx";
import FAQ from "./pages/faq.jsx";
import Contact from "./pages/contact.jsx";
import "./App.css";

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === "raiz2026") {
      setAuthorized(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!authorized) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        <h1>Raíz Psychotherapy</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "0.75rem",
              marginRight: "0.5rem",
            }}
          />

          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <NavBar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
