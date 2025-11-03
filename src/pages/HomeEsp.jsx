import React from "react";

export const HomeEsp = () => {
  return (
    <section className="page home">
      <div className="hero">
        <div className="hero-text">
          <h1>Trading y consultoría para la transición energética</h1>
          <p>
            Operamos en los mercados de materias primas ambientales y de instrumentos relacionados con la transición energética, ofreciendo servicios de trading, intermediación y suministro de liquidez para créditos de carbono, EAC, PPA/GPA, biometano y más.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#services">Scopri i servizi</a>
            <a className="btn ghost" href="#contact">Contattaci</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="card">
            <h4>Soluciones a medida</h4>
            <p>Inteligencia de mercado, gestión de carteras y apoyo estratégico para proyectos de transición.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Porqué elegirnos</h2>
        <div className="features">
          <div className="feature">
            <h3>Liquidez y red</h3>
            <p>Acceso a mercados especializados y contrapartes calificadas.</p>
          </div>
          <div className="feature">
            <h3>Consultoría estratégica</h3>
            <p>Apoyamos a entidades públicas y privadas en la definición de estrategias de sostenibilidad.</p>
          </div>
          <div className="feature">
            <h3>Compliance</h3>
            <p>Desarrollamos actividades dentro de los límites de la ley, con atención a la regulación y los riesgos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
