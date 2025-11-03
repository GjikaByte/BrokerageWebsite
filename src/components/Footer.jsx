import React from "react";

export const Footer = () => (
  <footer className="footer">
    <div className="wrap">
      <div>© {new Date().getFullYear()} NomeSocietà — Tutti i diritti riservati</div>
      <div className="footer-links">
        <a href="#about">Privacy</a>
        <a href="#contact">Contatti</a>
      </div>
    </div>
  </footer>
);
