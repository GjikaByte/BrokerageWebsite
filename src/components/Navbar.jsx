import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo3.png";
import espFlag from "../assets/espFlag.png";
import itFlag from "../assets/itFlag.png";
import ukFlag from "../assets/ukFlag.png";

export const Navbar = ({ onNavigate, onLangChange, currentLang }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const getHomeHash = () => {
    if (currentLang === "it") return "#home";
    if (currentLang === "es") return "#homeEsp";
    if (currentLang === "en") return "#homeEn";
    return "#home";
  };

  useEffect(() => {
    const hash = window.location.hash.toLowerCase();

    if (hash === "" || hash === "#") {
      window.location.hash = getHomeHash();
      return;
    }

    if (hash === "#en") {
      onLangChange("en");
      window.location.hash = "#homeEn";
      return;
    }

    if (hash === "#es") {
      onLangChange("es");
      window.location.hash = "#homeEsp";
      return;
    }

    if (hash === "#it") {
      onLangChange("it");
      window.location.hash = "#home";
      return;
    }
  }, []);

  const LangFlags = ({ exclude }) => (
    <>
      {exclude !== "it" && (
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onLangChange("it");
            window.location.hash = "#home";
            closeMenu();
          }}
        >
          <img src={itFlag} alt="Italiano" className="lang-flag" />
        </a>
      )}
      {exclude !== "es" && (
        <a
          href="#homeEsp"
          onClick={(e) => {
            e.preventDefault();
            onLangChange("es");
            window.location.hash = "#homeEsp";
            closeMenu();
          }}
        >
          <img src={espFlag} alt="Español" className="lang-flag" />
        </a>
      )}
      {exclude !== "en" && (
        <a
          href="#homeEn"
          onClick={(e) => {
            e.preventDefault();
            onLangChange("en");
            window.location.hash = "#homeEn";
            closeMenu();
          }}
        >
          <img src={ukFlag} alt="English" className="lang-flag" />
        </a>
      )}
    </>
  );

  const NavLinks = ({ links }) => (
    <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
      {links.map((l, i) => (
        <a
          key={i}
          href={l.href}
          onClick={(e) => {
            closeMenu();
          }}
        >
          {l.label}
        </a>
      ))}
      <LangFlags exclude={currentLang} />
    </nav>
  );

  const content = {
    it: {
      links: [
        { href: "#home", label: "Home" },
        { href: "#about", label: "Chi siamo" },
        { href: "#services", label: "Servizi" },
        { href: "#solutions", label: "Soluzioni" },
        { href: "#contact", label: "Contatti" },
      ],
    },
    es: {
      links: [
        { href: "#homeEsp", label: "Inicio" },
        { href: "#aboutEsp", label: "Quiénes somos" },
        { href: "#servicesEsp", label: "Servicios" },
        { href: "#solutionsEsp", label: "Soluciones" },
        { href: "#contactEsp", label: "Contacto" },
      ],
    },
    en: {
      links: [
        { href: "#homeEn", label: "Home" },
        { href: "#aboutEn", label: "About us" },
        { href: "#servicesEn", label: "Services" },
        { href: "#solutionsEn", label: "Solutions" },
        { href: "#contactEn", label: "Contact" },
      ],
    },
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <div
          className="brand"
          onClick={() => {
            window.location.hash = getHomeHash();
            onNavigate("home");
          }}
        >
          <div className="logo">
            <img src={Logo} alt="Europe Flow logo" />
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <NavLinks links={content[currentLang].links} />
      </div>
    </header>
  );
};
