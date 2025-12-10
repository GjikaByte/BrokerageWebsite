import React from "react";

export const Solutions = () => {
  const solutions = [
    {
      title: "Carbon Credits",
      description: "Credito di carbonio che consente di compensare emissioni non evitabili mediante progetti certificati.",
      keyBenefit: "Compensazione delle emissioni residue verso il target net-zero.",
      linkText: "Scopri di più",
      linkHref: "#contact",
      scope: ["Scope 1", "Scope 2"]
    },
    {
      title: "Power Purchase Agreements (PPA/GPA)",
      description: "Contratti a lungo termine con generatori di energia rinnovabile per garantire forniture stabili e sostenibili.",
      keyBenefit: "Stabilità dei costi + sviluppo infrastrutture rinnovabili.",
      linkText: "Scopri di più",
      linkHref: "#contact",
      scope: ["Scope 2"]
    },
    {
      title: "Biomethane",
      description: "Gas rinnovabile prodotto da scarti organici, alternativa ai combustibili fossili per ridurre le emissioni Scope 1 e 3.",
      keyBenefit: "Riduzione delle emissioni dirette e lungo la catena di fornitura.",
      linkText: "Scopri di più",
      linkHref: "#contact",
      scope: ["Scope 1", "Scope 3"]
    },
    {
      title: "Biofuels & Feedstocks",
      description: "Carburanti rinnovabili e materie prime che sostituiscono combustibili fossili nell’industria o nei trasporti.",
      keyBenefit: "Emissions Scope 1 e 3 ridotte per trasporto, industria e supply chain.",
      linkText: "Scopri di più",
      linkHref: "#contact",
      scope: ["Scope 1", "Scope 3"]
    },
  ];

  return (
    <section className="page solutions">
        <div className="solutions-hero">
        <h1>Soluzioni su misura<br/>per la transizione energetica</h1>
        <p>Accesso a mercati ambientali, trading e consulenza per crediti di carbonio, PPA, EAC, biocarburanti e molto altro.</p>
        </div>

      <h2>Le nostre Soluzioni</h2>
      <p className="intro">
        Il percorso verso la transizione energetica richiede strumenti efficaci. Ecco le soluzioni che coadiuviamo per supportare la vostra strategia di sostenibilità.
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
