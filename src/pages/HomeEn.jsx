// pages/HomeEn.jsx
import React from "react";

export const HomeEn = () => {
  return (
    <section className="page home">
      <div className="hero">
        <div className="hero-text">
          <h1>Trading and consultancy for the energy transition</h1>
          <p>
            We operate in the markets for environmental raw materials and instruments related to the energy transition, offering consulting services, strategic brokerage, and liquidity management support for carbon credits, EACs, PPAs/GPAs, biomethane, and more.
          </p>
          <div className="cta-row">
            <a
              className="btn primary"
              href="#servicesEn"
              onClick={(e) => {
                e.preventDefault();
                const target = '#servicesEn';
                if (window.location.hash !== target) {
                  window.location.hash = target;            // <-- include the '#'
                } else {
                  // if already on #services, force your router to react
                  window.dispatchEvent(new HashChangeEvent('hashchange'));
                }
              }}
            >
              Discover the services
            </a>
            <a
            className="btn ghost"
            href="#contactEn"
            onClick={(e) => {
              e.preventDefault();
              const target = "#contactEn"; // full hash
              if (window.location.hash !== target) {
                window.location.hash = target;
              } else {
                // trigger route reload if already there
                window.dispatchEvent(new HashChangeEvent("hashchange"));
              }
            }}
          >
            Contact us
          </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="card">
            <h4>Tailored solutions</h4>
            <p>Market intelligence, portfolio management, and strategic support for transition projects.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Why choose us</h2>
        <div className="features">
          <div className="feature">
            <h3>Liquidity & network</h3>
            <p>Access to specialized markets and qualified counterparties.</p>
          </div>
          <div className="feature">
            <h3>Strategic advisory</h3>
            <p>We support public and private entities in defining sustainability strategies.</p>
          </div>
          <div className="feature">
            <h3>Compliance</h3>
            <p>Activities conducted within legal boundaries, with attention to regulation and risk.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
