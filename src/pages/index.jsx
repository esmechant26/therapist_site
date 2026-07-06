import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <section className="section-margin">
      <div className="card card-padding-2">
        <h2 className="section-title text-center">There is always room to grow more and more authentically you!</h2>
        <p className="section-subtitle text-center">Affirming, authentic virtual therapy services for individuals who identify as LGBTQ+, BIPOC or Latine and for couples in California.</p>

        <p className="section-copy">Thank you for being here and welcome!</p>
        <p className="section-copy">My name is Aleida Moreno and I am a Licensed Marriage and Family Therapist (LMFT 162743) in the Bay Area, offering virtual therapy services across California.</p>
        <p className="section-copy">
          I deeply enjoy working with the communities that I am a part of myself. This passion is fueled from the many years spent seeking quality mental health services that also made me feel seen
          and understood within my identities and life experiences and strive to be someone that the people can feel that way around as they embark on their healing journeys.
        </p>
        <p className="section-copy">
          I draw from a variety of modalities for my work because no two people experience any given moment the same way, I believe that the space for healing therapy provides should also be
          individualized to each unique experience. For me, the therapy space is not one for pathologizing behaviors, thoughts, or experiences but rather a space to approach these things with
          curiosity, compassion, and openness.
        </p>

        <button className="btn-primary" onClick={() => navigate("/contact")}>
          Contact Page
        </button>

        <hr className="section-rule" />

        <h3 className="section-subtitle">Therapy at Raiz Psychotherapy</h3>
        <p className="section-copy">I love to work with people who are motivated to engage in therapy, and that can look many different ways.</p>
        <p className="section-copy">
          Sometimes motivation manifests as curiosity to look at certain patterns or areas of your life in new ways, it can also look like knowing exactly what changes you want to make in your life
          and knowing it's time to start that work, and or others being motivated looks like finally taking the big step to ask for support. Regardless of how motivation looks for you, if this
          resonates with you, we can do great work together to get to the root of your experience and create change. Each session is as unique as the whoever is sitting in front of me. What remains
          consistent regardless of what modalities and tools we are using together, is that we will move at your own pace towards understanding how the experiences, attachments, and events you
          experience have shaped you and where you want to go from there.
        </p>
        <p className="section-copy">
          While traditionally therapy can look like diving deep into details of your history, at Raíz Psychotherapy it can also look like working exclusively in the present moment, acknowledging the
          past without having to re-live it.
        </p>

        <button className="small-cta" onClick={() => navigate("/about")}>
          More about me and my approach
        </button>

        <hr className="section-rule" />

        <h3 className="section-subtitle">Who I Work With:</h3>
        <p className="section-copy">
          LGBTQ+ identified individuals wanting support with issues including but not limited to relational issues with family, romantic partners, or platonic relationships, kink/BDSM, gender,
          sexuality, processing childhood, complex, or systemic traumatic experiences.
        </p>
        <p className="section-copy">
          People who identify as Latine/a/o and BIPoC who want specialized, culturally sensitive support around issues including but not limited to intergenerational trauma, first generation family
          issues, the impacts of immigration and acculturation across generations, and other complex, systemic traumatic experiences.
        </p>
        <p className="section-copy">
          Relational Constellations including, people on non-monogamous relationships, polycules, Monogamous couples, friends, and adults wanting to improve their relationships with their parents who
          need support to resolve issues that are affecting the relationship(s).
        </p>
        <p className="section-copy">
          Individuals seeking psychedelic and/or spiritual integration. Have you had an experience in an altered state of consciousness that you're still not quite sure what to make of? Therapy can be
          a great place to process these experiences. Altered states of consciousness can include states influenced by: substances, spiritual awakenings, or near-death-experiences. Specializing in
          integration for Ketamine Assisted Therapy (KAT), this is a great option if you are already connected to a prescriber for your medicine. Please note that for appointments centered around
          integration, the use of any substances is not allowed during session, this is simply a space to process these experiences. If you have questions about KAT, please contact me via the{" "}
          <Link to="/contact">contact page</Link>.
        </p>
      </div>
    </section>
  );
}

export default Home;
