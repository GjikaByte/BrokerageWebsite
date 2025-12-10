import React from "react";

export const SolutionsEn = () => {
  const solutions = [
    {
      title: "Carbon Credits",
      description: "Carbon credit that allows offsetting unavoidable emissions through certified projects.",
      keyBenefit: "Compensation of residual emissions toward the net-zero target.",
      linkText: "Discover more",
      linkHref: "#",
      scope: ["Scope 1", "Scope 2"]
    },
    {
      title: "Power Purchase Agreements (PPA/GPA)",
      description: "Contratos a largo plazo con generadores de energía rLong-term contracts with renewable energy generators to ensure stable and sustainable supplies.enovable para garantizar suministros estables y sostenibles.",
      keyBenefit: "Cost stability and development of renewable infrastructures.",
      linkText: "Discover more",
      linkHref: "#",
      scope: ["Scope 2"]
    },
    {
      title: "Biomethane",
      description: "Renewable gas produced from organic waste, an alternative to fossil fuels to reduce Scope 1 and 3 emissions.",
      keyBenefit: "Reduction of direct emissions and throughout the supply chain.",
      linkText: "Discover more",
      linkHref: "#",
      scope: ["Scope 1", "Scope 3"]
    },
    {
      title: "Biofuels & Feedstocks",
      description: "Renewable fuels and raw materials that replace fossil fuels in industry or transportation.",
      keyBenefit: "Scope 1 and 3 emissions reduced for transportation, industry, and supply chain.",
      linkText: "Discover more",
      linkHref: "#",
      scope: ["Scope 1", "Scope 3"]
    },

  ];

  return (
    <section className="page solutions">
        <div className="solutions-hero">
        <h1>Tailored solutions<br/>for the energy transition</h1>
        <p>Access to environmental markets, trade, and advice on carbon credits, PPAs, EACs, biofuels, and much more.</p>
        </div>

      <h2>Our Solutions</h2>
      <p className="intro">
        The path toward the energy transition requires effective tools. Here are the solutions we can support with for your sustainability strategy.
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
