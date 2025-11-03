import React from "react";

export const Navbar = ({ onNavigate }) => {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand" onClick={()=> onNavigate("home")}>
          <div className="logo">♻︎</div>
          <div>
            <div className="brand-title">NomeSocietà</div>
            <div className="brand-sub">Trading & Consulenza Ambientale</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">Chi siamo</a>
          <a href="#services">Servizi</a>
          <a href="#contact">Contatti</a>
        </nav>
      </div>
    </header>
  );
};
