import React from "react";

export const HomeEsp = () => {
  return (
    <section className="page home">
      <div className="hero">
        <div className="hero-text">
          <h1>Consultoría para la transición energética</h1>
          <p>
           Operamos en los mercados de materias primas ambientales y en los instrumentos relacionados con la transición energética, ofreciendo servicios de consultoría, intermediación estratégica y apoyo en la gestión de la liquidez para créditos de carbono, EAC, PPA/GPA, biometano y otros.
          </p>
          <div className="cta-row">
            <a
              className="btn primary"
              href="#servicesEsp"
              onClick={(e) => {
                e.preventDefault();
                const target = '#servicesEsp';
                if (window.location.hash !== target) {
                  window.location.hash = target;            // <-- include the '#'
                } else {
                  // if already on #services, force your router to react
                  window.dispatchEvent(new HashChangeEvent('hashchange'));
                }
              }}
            >
              Descubre los servicios
            </a>
            <a
            className="btn ghost"
            href="#contactEsp"
            onClick={(e) => {
              e.preventDefault();
              const target = "#contactEsp"; // full hash
              if (window.location.hash !== target) {
                window.location.hash = target;
              } else {
                // trigger route reload if already there
                window.dispatchEvent(new HashChangeEvent("hashchange"));
              }
            }}
          >
            Contáctanos
          </a>
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
