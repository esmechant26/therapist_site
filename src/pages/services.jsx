import React, { useState } from "react";

const serviceItems = [
  {
    id: "individual",
    service: "Individual Therapy",
    description: "Individual therapy description",
  },
  {
    id: "relationship",
    service: "Relationship Therapy",
    description: "Relationship therapy description",
  },
  {
    id: "ketamine",
    service: "Ketamine Assisted Therapy",
    description: "Ketamine therapy description",
  },
  {
    id: "immigration",
    service: "Immigration Evaluations",
    description: "Immigration Evaluations description",
  },
];

function Services() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen((current) => (current === id ? null : id));

  return (
    <section className="section-margin">
      <div className="card card-padding-2">
        <h2 className="section-title">Services</h2>

        <div className="accordion" role="list">
          {serviceItems.map((item) => (
            <div className="accordion-item" key={item.id} role="listitem">
              <button
                className={`accordion-header ${open === item.id ? "open" : ""}`}
                aria-expanded={open === item.id}
                aria-controls={`${item.id}-panel`}
                id={`${item.id}-header`}
                onClick={() => toggle(item.id)}
              >
                <span>{item.service}</span>
                <span className="accordion-icon">{open === item.id ? "−" : "+"}</span>
              </button>
              <div id={`${item.id}-panel`} role="region" aria-labelledby={`${item.id}-header`} className={`accordion-panel ${open === item.id ? "open" : ""}`}>
                <p className="muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
