import React from "react";
import headshot1 from "../assets/headshot1.jpg";

function About() {
  return (
    <section className="section-margin">
      <div className="servicios-hero-grid">
        <div className="servicios-hero-copy">
          <h2 className="section-title section-title--spaced">About Me</h2>
          <p>
            Thank you for taking time to read about me. My name is Aleida Moreno, I go by they/them pronouns. I am gender non-conforming, queer and bilingual in English and Spanish. One of my favorite
            parts of being a therapist is serving communities I am a part of.
          </p>
          <p>
            I am a Licensed Marriage and Family Therapist in California, my license number is LMFT 162743. I have a B.A. in Gender and Women’s Studies from University of California, Berkeley and an
            M.A. in Integral Counseling Psychology from California Institute of Integral Studies. I mention my education because these paths of study, combined with my lived experiences, have helped
            provide me with a strong foundation for my worldview and practice. I incorporate anti-oppressive, decolonial, and liberation psychology theories into my practice and enjoy when therapy
            feels authentic, collaborative, and grounded in a sense of connection.
          </p>
          <p>
            In my life outside of therapy, I recharge by spending connective quality time with my loved ones and pets. I also enjoy exploring new places in nature, engaging in movement through
            weightlifting or pilates, and slowly making my way through my large pile of books I’m “currently reading”.
          </p>
        </div>
        <div className="servicios-hero-image about-hero-image">
          <img src={headshot1} alt="Aleida Moreno" />
          <span className="image-credit">Image by S. Kumar</span>
        </div>
      </div>
      <section className="invert-section">
        <h3 className="section-subtitle">I have worked in community mental health for the last ten years in both non clinical and clinical roles and have worked with the following populations:</h3>

        <ul>
          <li>Youth in the foster care system in school based settings aged 3-19</li>
          <li>Survivors of sexual and domestic violence or human trafficking of all genders and immigration statuses</li>
          <li>Adults with co-occurring substance use with mental health diagnoses</li>
          <li>
            LBGTQ+ people of all ages navigating complex trauma, gender exploration and transition, the impacts of perfectionism, relational issues including parent-child relationships non-monoogramy,
            and the trauma navigating this day-and-age’s “imperialist-white-supremacist-capitalist heteropatriarchy and its systems of oppression (bell hooks)”
          </li>
          <li>Immigrants and people with immigration history in their lineage</li>
          <li>Parents who want to improve their relationships with their adult U.S. born kids</li>
          <li>BIPOC needing support for processing themes like generational, childhood and systemic trauma and relational issues with their members of their family, partners and/or friends</li>
        </ul>
      </section>

      <p>
        I create an individualized experience for each of my clients depending on their goals and preferences. My personal style in the therapy space has been described by past clients as warm,
        authentic, solution-oriented, and empowering. I am not a “blank slate” therapist by any means and I enjoy showing up authentically, laughing with my clients, and am open to answering questions
        my clients may have about my personal or political values because I know this can impact their experience in the therapy space. I am very open to feedback from my clients and strive to do my
        part to create an environment of trust and safety so that my clients feel comfortable providing feedback.
      </p>
      <p>
        My therapeutic style can be described as eclectic and draws from a variety of modalities. In my time in graduate school, I was trained in psychodynamic theory which serves as a foundation to
        my style. In sessions I incorporate somatic techniques learned through my training in Somatic Experiencing, draw a lot from attachment science and emotionally-focused therapy (EFT), especially
        for relationship therapy. I also have experience utilizing cognitive behavioral therapy (CBT), dialectical behavior therapy (DBT), and acceptance and commitment therapy (ACT) interventions in
        client-centered and strengths-based ways to ensure that each client's individual set of strengths and experiences is honored as we work together towards their goals.
      </p>

      <div className="invert-section">
        <h3 className="section-subtitle">Clinical training experience</h3>
        <p>Somatic Experiencing Beginning through Intermediate II (2017-2020)</p>
        <p>Trained in Psychodynamic modalities during my studies at CIIS (2019-2022)</p>
        <p>Ketamine Assisted Therapy Training from Alchemy Collective (2023)</p>
        <p>Emotionally Focused Therapy for Couples (2026)</p>
      </div>
    </section>
  );
}

export default About;
