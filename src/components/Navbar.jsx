import React from "react";
import Logo from "../assets/Logo.png";
import espFlag from "../assets/espFlag.png";
import itFlag from "../assets/itFlag.png"; 

export const Navbar = ({ onNavigate, onLangChange, currentLang }) => {
  return (
    <>
      {currentLang === "it" ? (
        <header className="nav">
          <div className="nav-inner">
            <div className="brand" onClick={() => onNavigate("home")}>
              <div className="logo">
                <img src={Logo} alt="Europe Flow logo" />
              </div>
              <div>
                <div className="brand-title">Europe Flow</div>
                <div className="brand-sub">
                  Trading & Consulenza Ambientale
                </div>
              </div>
            </div>

            <nav className="nav-links">
              <a href="#home">Home</a>
              <a href="#about">Chi siamo</a>
              <a href="#services">Servizi</a>
              <a href="#solutions">Soluzioni</a>
              <a href="#contact">Contatti</a>

              {/* Language Switch → Spanish */}
              <a
                href="#homeEsp"
                onClick={(e) => {
                  e.preventDefault(); // prevent default jump
                  onLangChange("es"); // switch to Spanish
                  window.location.hash = "homeEsp"; // correct Spanish route
                }}
              >
                <img
                  src={espFlag}
                  alt="Versión en español"
                  className="lang-flag"
                />
              </a>
            </nav>
          </div>
        </header>
      ) : (
        <header className="nav">
          <div className="nav-inner">
            <div className="brand" onClick={() => onNavigate("homeEsp")}>
              <div className="logo">
                <img src={Logo} alt="Europe Flow logo" />
              </div>
              <div>
                <div className="brand-title">Europe Flow</div>
                <div className="brand-sub">
                  Trading y Consultoría Ambiental
                </div>
              </div>
            </div>

            <nav className="nav-links">
              {/* Spanish Navigation */}
              <a
                href="#homeEsp"
                onClick={(e) => {
                  e.preventDefault(); // prevent default jump
                  
                  window.location.hash = "homeEsp"; // correct Spanish route
                }}
              >
                Inicio
              </a>

              <a
                href="#aboutEsp"
                onClick={(e) => {
                  e.preventDefault(); // prevent default jump
                  window.location.hash = "aboutEsp"; // correct Spanish route
                }}
              >
                Quiénes somos
              </a>

              <a
                href="#servicesEsp"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = "servicesEsp";
                }}
              >
                Servicios
              </a>

              <a
                href="#solutionsEsp"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = "solutionsEsp";
                }}
              >
                Soluciones
              </a>

              <a
                href="#contactEsp"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = "contactEsp";
                }}
              >
                Contacto
              </a>

              {/* Language Switch → Italian */}
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  onLangChange("it");
                  window.location.hash = "home";
                }}
              >
                <img
                  src={itFlag}
                  alt="Versione italiana"
                  className="lang-flag"
                />
              </a>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};
