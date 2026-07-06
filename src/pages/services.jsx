import React, { useState } from "react";

const serviceItems = [
  {
    id: "individual",
    service: "Individual Therapy",
    cost: "$175 per 50 min session",
    description: "For adults 18 and over. This is a 1:1 space to explore the themes you are curious  about working through in therapy.  ",
  },
  {
    id: "dyadic",
    service: "Dyadic Therapy",
    cost: "$210 per 50 minute session",
    description:
      "For couples, friends, family members who want to work together. This service is  for up two people per session to receive support to be curious about specific  events, patterns, or aspects of the relationship and reconnect. ",
  },
  {
    id: "triadic",
    service: "Triadic (and beyond!) Therapy",
    cost: "$210 per 50 minute session",
    description: "For polycules, friend groups, and families made up of three or more people who  want to work together. This space is welcoming of all relationship constellations.",
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
                <span className="accordion-left">
                  <span className="service-title">{item.service}</span>
                </span>
                <span className="accordion-icon">{open === item.id ? "−" : "+"}</span>
              </button>
              <div id={`${item.id}-panel`} role="region" aria-labelledby={`${item.id}-header`} className={`accordion-panel ${open === item.id ? "open" : ""}`}>
                <p className="service-cost muted">{item.cost}</p>
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
