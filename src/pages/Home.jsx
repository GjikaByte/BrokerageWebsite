import React from "react";

export const Home = () => {
  return (
    <section className="page home">
      <div className="hero">
        <div className="hero-text">
          <h1>Trading e consulenza per la transizione energetica</h1>
          <p>
            Operiamo nei mercati delle materie prime ambientali e degli strumenti legati alla transizione energetica,
            offrendo servizi di trading, intermediazione e fornitura di liquidità per crediti di carbonio, EAC, PPA/GPA, biometano e altro.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#services">Scopri i servizi</a>
            <a className="btn ghost" href="#contact">Contattaci</a>
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
