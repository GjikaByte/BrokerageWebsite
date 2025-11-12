import React, { useState } from "react";
import Logo from "../assets/Logo3.png";
import espFlag from "../assets/espFlag.png";
import itFlag from "../assets/itFlag.png";
import ukFlag from "../assets/ukFlag.png";

export const Navbar = ({ onNavigate, onLangChange, currentLang }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const LangFlags = ({ exclude }) => (
    <>
      {exclude !== "it" && (
        <a href="#home" onClick={(e) => { e.preventDefault(); onLangChange("it"); closeMenu(); }}>
          <img src={itFlag} alt="Italiano" className="lang-flag" />
        </a>
      )}
      {exclude !== "es" && (
        <a href="#homeEsp" onClick={(e) => { e.preventDefault(); onLangChange("es"); closeMenu(); }}>
          <img src={espFlag} alt="Español" className="lang-flag" />
        </a>
      )}
      {exclude !== "en" && (
        <a href="#homeEn" onClick={(e) => { e.preventDefault(); onLangChange("en"); closeMenu(); }}>
          <img src={ukFlag} alt="English" className="lang-flag" />
        </a>
      )}
    </>
  );

  const NavLinks = ({ links }) => (
    <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
      {links.map((l, i) => (
        <a key={i} href={l.href} onClick={closeMenu}>{l.label}</a>
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
        <div className="brand" onClick={() => onNavigate("home")}>
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
