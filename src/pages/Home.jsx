import React from "react";

export const Home = () => {
  return (
    <section className="page home">
      <div className="hero">
        <div className="hero-text">
          <h1>Trading e consulenza per la transizione energetica</h1>
          <p>
           Operiamo nei mercati delle materie prime ambientali e degli strumenti legati alla transizione energetica, offrendo servizi di consulenza, intermediazione strategica e supporto alla gestione della liquidità per crediti di carbonio, EAC, PPA/GPA, biometano e altro.
          </p>
          <div className="cta-row">
            <a
              className="btn primary"
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const target = '#services';
                if (window.location.hash !== target) {
                  window.location.hash = target;            // <-- include the '#'
                } else {
                  // if already on #services, force your router to react
                  window.dispatchEvent(new HashChangeEvent('hashchange'));
                }
              }}
            >
              Scopri i servizi
            </a>
            <a
            className="btn ghost"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const target = "#contact"; // full hash
              if (window.location.hash !== target) {
                window.location.hash = target;
              } else {
                // trigger route reload if already there
                window.dispatchEvent(new HashChangeEvent("hashchange"));
              }
            }}
          >
            Contattaci
          </a>
          </div>


        </div>
        <div className="hero-visual">
          <div className="card">
            <h4>Soluzioni su misura</h4>
            <p>Market intelligence, gestione portafogli e supporto strategico per progetti di transizione.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Perché scegliere noi</h2>
        <div className="features">
          <div className="feature">
            <h3>Liquidità e network</h3>
            <p>Accesso a mercati specialistici e counterpart qualificati.</p>
          </div>
          <div className="feature">
            <h3>Consulenza strategica</h3>
            <p>Supportiamo enti pubblici e privati nella definizione di strategie di sostenibilità.</p>
          </div>
          <div className="feature">
            <h3>Compliance</h3>
            <p>Svolgiamo attività entro i limiti di legge, con attenzione a regolamentazione e rischi.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
