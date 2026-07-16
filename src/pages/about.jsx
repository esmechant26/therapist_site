import React from "react";
import headshot1 from "../assets/headshot1.jpg";

function About() {
  return (
    <section className="section-margin">
      <div className="servicios-hero-grid">
        <div className="servicios-hero-copy">
          <h2 className="section-title section-title--spaced">About Me</h2>
          <p>
            I’m Aleida, a gender non-conforming, lesbian latine and bilingual (English/Spanish) therapist living in the Bay Area in California. I am proud to be a part of the communities I am
            passionate about serving.
          </p>
          <p>
            I am a Licensed Marriage and Family Therapist in California (LMFT 162743). I have a B.A. in Gender and Women’s Studies from University of California, Berkeley and an M.A. in Integral
            Counseling Psychology from California Institute of Integral Studies. These degrees combined with my lived experiences have helped provide me a strong foundation for my worldview and
            practice, as well as a strong toolbox of modalities and interventions to draw from in order to provide individualized client-centered care to each person I work with. I enjoy when therapy
            feels authentic, collaborative, and deeply grounded in a sense of connection.
          </p>
          <p>
            Outside of the therapy space, I recharge by spending time with loved ones, taking naps with my pets, traveling when I can, movement through strength training, yoga, or pilates and making
            my way through my very large “currently reading” pile.
          </p>
        </div>
        <div className="servicios-hero-image about-hero-image">
          <img src={headshot1} alt="Aleida Moreno" />
          <span className="image-credit">Image by S. Kumar</span>
        </div>
      </div>

      <h3 className="section-subtitle">I have worked in community mental health for the last ten years in both non clinical and clinical roles and have worked with the following populations:</h3>
      <section className="invert-section">
        <ul>
          <li>youth in the foster care system in school based settings </li>
          <li>survivors of sexual and domestic violence or human trafficking of all genders and immigration statuses</li>
          <li>
            adults navigating housing insecurity, court systems and substance use with mental health diagnoses (typically referred to as Dual Diagnosis) LBGTQ+ people of all ages navigating complex
            trauma, gender exploration and transition, the impacts of perfectionism, relational issues including parent-child relationships non-monoogramy, and the trauma navigating this day-and-age’s
            “imperialist-white-supremacist-capitalist heteropatriarchy and its systems of oppression (bell hooks)” Immigrant parents who want to improve their relationships with their adult U.S. born
            kids
          </li>
          <li>BIPOC needing support for processing themes like generational, childhood and systemic trauma and relational issues with their members of their family, partners and/or friends</li>
        </ul>
      </section>

      <p>Because no two people experience any given moment the same way, I believe that the space for healing therapy provides should also be individualized to each unique experience. </p>
      <p>
        My eclectic therapeutic style draws from a variety of modalities. I draw from a lot of different theories and modalities to create an individualized experience for each of my clients depending
        on each person’s goals and preferences.{" "}
      </p>
      <p>
        I was trained in psychodynamic theory and incorporate somatic techniques learned through my training in Somatic Experiencing. I also draw a lot from attachment theory and emotionally-focused
        therapy (EFT). My work in community health has also trained me in cognitive behavioral therapy (CBT), dialectical behavior therapy (DBT), and acceptance and commitment therapy (ACT)
        interventions, and I use these once in a while as they are evidence-based interventions. When I do incorporate techniques from these last three modalities, I like to combine the interventions
        with client-centered and holistic interventions an d techniques to ensure that each client's individual set of strengths and experiences is honored as we work together towards their goals.
      </p>

      <div className="servicios-hero-copy">
        <h3 className="section-subtitle">Training</h3>
        <p>Somatic Experiencing Beginning through Intermediate II (2017-2020)</p>
        <p>Trained in Psychodynamic modalities during my studies at CIIS (2019-2022)</p>
        <p>Ketamine Assisted Therapy Training from Alchemy Collective (2023)</p>
        <p>Emotionally Focused Therapy for Couples (2026)</p>
        <hr />
      </div>
    </section>
  );
}

export default About;
