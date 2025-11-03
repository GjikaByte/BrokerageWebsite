import React from "react";

export const SolutionsEsp = () => {
  const solutions = [
    {
      title: "Carbon Credits",
      description: "Crédito de carbono que permite compensar emisiones inevitables mediante proyectos certificados.",
      keyBenefit: "Compensación de las emisiones residuales hacia el objetivo de cero neto.",
      linkText: "Descubre más",
      linkHref: "#",
      scope: ["Scope 1", "Scope 2"]
    },
    {
      title: "Acuerdos de Compra de Energía (PPA/GPA)",
      description: "Contratos a largo plazo con generadores de energía renovable para garantizar suministros estables y sostenibles.",
      keyBenefit: "Estabilidad de los costos y desarrollo de infraestructuras renovables.",
      linkText: "Descubre más",
      linkHref: "#",
      scope: ["Scope 2"]
    },
    {
      title: "Biomethane",
      description: "Gas renovable producido a partir de residuos orgánicos, alternativa a los combustibles fósiles para reducir las emisiones Alcance 1 y 3.",
      keyBenefit: "Reducción de las emisiones directas y a lo largo de la cadena de suministro.",
      linkText: "Descubre más",
      linkHref: "#",
      scope: ["Scope 1", "Scope 3"]
    },
    {
      title: "Biofuels & Feedstocks",
      description: "Combustibles renovables y materias primas que sustituyen a los combustibles fósiles en la industria o en el transporte.",
      keyBenefit: "Emisiones Alcance 1 y 3 reducidas para transporte, industria y cadena de suministro.",
      linkText: "Descubre más",
      linkHref: "#",
      scope: ["Scope 1", "Scope 3"]
    },

  ];

  return (
    <section className="page solutions">
        <div className="solutions-hero">
        <h1>Soluciones a medida<br/>para la transición energética</h1>
        <p>Acceso a mercados ambientales, comercio y asesoramiento para créditos de carbono, PPA, EAC, biocombustibles y mucho más.</p>
        </div>

      <h2>Nuestras Soluciones</h2>
      <p className="intro">
        El camino hacia la transición energética requiere herramientas eficaces. Aquí están las soluciones que ponemos a disposición para apoyar su estrategia de sostenibilidad.
      </p>

      <div className="solutions-grid">
        {solutions.map((s, idx) => (
          <div key={idx} className="solution-card">
            <div className="solution-scope">
              {s.scope.map((sc, i) => (
                <span key={i} className="scope-badge">{sc}</span>
              ))}
            </div>
            <h3 className="solution-title">{s.title}</h3>
            <p className="solution-desc">{s.description}</p>
            <p className="solution-kg">{s.keyBenefit}</p>
            <a className="btn ghost solution-link" href={s.linkHref}>
              {s.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
