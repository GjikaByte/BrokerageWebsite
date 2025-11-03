import React, { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { HomeEsp } from "./pages/HomeEsp";
import { About } from "./pages/About";
import { AboutEsp } from "./pages/AboutEsp";
import { Services } from "./pages/Services";
import { ServicesEsp } from "./pages/ServicesEsp";
import { Contact } from "./pages/Contact";
import { ContactEsp } from "./pages/ContactEsp";
import { Solutions } from "./pages/Solutions";
import { SolutionsEsp } from "./pages/SolutionsEsp";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App() {
  const [route, setRoute] = useState("home");
  const [lang, setLang] = useState("it");

  // 🔹 Handle both hash changes and language sync
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) {
        setRoute(lang === "es" ? "homeEsp" : "home");
      } else {
        setRoute(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // run once on load
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [lang]); // 👈 when language changes, re-check route too

  // 🔹 Helper: change language safely and reset hash
  const handleLangChange = (newLang) => {
    setLang(newLang);
    if (newLang === "es") {
      if (!window.location.hash.includes("Esp")) {
        window.location.hash = "homeEsp";
      }
    } else {
      if (window.location.hash.includes("Esp")) {
        window.location.hash = "home";
      }
    }
  };

  return (
    <div className="site">
      <Navbar
        onNavigate={(r) => (window.location.hash = r)}
        onLangChange={handleLangChange}
        currentLang={lang}
      />

      {/* --- ITALIAN --- */}
      {lang === "it" && (
        <main className="main">
          {route === "home" && <Home />}
          {route === "about" && <About />}
          {route === "services" && <Services />}
          {route === "solutions" && <Solutions />}
          {route === "contact" && <Contact />}
        </main>
      )}

      {/* --- SPANISH --- */}
      {lang === "es" && (
        <main className="mainEsp">
          {route === "homeEsp" && <HomeEsp />}
          {route === "aboutEsp" && <AboutEsp />}
          {route === "servicesEsp" && <ServicesEsp />}
          {route === "solutionsEsp" && <SolutionsEsp />}
          {route === "contactEsp" && <ContactEsp />}
        </main>
      )}

      <Footer />
    </div>
  );
}
