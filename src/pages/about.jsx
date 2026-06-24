import React from "react";
import headshot from "../assets/aleidamorenoheadshot.avif";

function About() {
  return (
    <section className="section-margin">
      <div className="card card-padding-2">
        <h2 className="section-title section-title--spaced">Aleida Moreno</h2>
        <div className="about-hero-row">
          <img src={headshot} alt="Aleida Moreno" className="hero-image hero-image--small" />
          <div className="about-training">
            <h3>Additional Training</h3>
            <p className="muted">Somatic Experiencing Beginning through Intermediate II (2017-2020)</p>
            <p className="muted">Trained in Psychodynamic modalities during my studies at CIIS (2019-2022)</p>
            <p className="muted">Ketamine Assisted Therapy Training from Alchemy Collective (2023)</p>
            <p className="muted">Emotionally Focused Therapy for Couples (2026)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
