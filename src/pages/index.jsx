import React from "react";
import { useNavigate, Link } from "react-router-dom";
import headshot3 from "../assets/headshot3.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="section-margin">
        <h2 className="section-title home-title">There is always room to grow towards a more authentic You!</h2>

        <p className="section-subtitle text-center">Virtual therapy services for LGBTQ+ folks, BIPOC, and Spanish Speakers in California </p>

        <section className="home-intro-grid">
          <div className="home-intro-copy">
            <p className="section-copy">Thank you for being here and welcome!</p>

            <p className="section-copy">
              My name is Aleida Moreno and I am a Licensed Marriage and Family Therapist (LMFT 162743) in the Bay Area, offering virtual therapy services across California.
            </p>

            <p className="section-copy">
              I deeply enjoy working with the communities that I am a part of myself. This passion is fueled from the many years spent seeking quality mental health services that also made me feel
              seen and understood within my identities and life experiences and strive to be someone that the people can feel that way around as they embark on their healing journeys.
            </p>

            <p className="section-copy">
              I draw from a variety of modalities for my work because no two people experience any given moment the same way. I believe that the space for healing therapy provides should also be
              individualized to each unique experience. For me, the therapy space is not one for pathologizing behaviors, thoughts, or experiences but rather a space to approach these things with
              curiosity, compassion, and openness.
            </p>

            <button className="btn-primary" onClick={() => navigate("/contact")}>
              Contact Page
            </button>
          </div>

          <div className="home-intro-image">
            <img src={headshot3} alt="Aleida Moreno smiling" />
            <span className="home-hero-credit">Image by Jaq Cieslak</span>
          </div>
        </section>

        <section className="invert-section">
          <h3 className="section-subtitle">Therapy at Raiz Psychotherapy</h3>

          <p>I love to work with people who are motivated to engage in therapy, and that can look many different ways.</p>

          <p>
            Sometimes motivation manifests as curiosity to look at certain patterns or areas of your life in new ways. It can also look like knowing exactly what changes you want to make in your life
            and knowing it's time to start that work. For others, motivation looks like finally taking the big step to ask for support.
          </p>

          <p>
            Regardless of how motivation looks for you, if this resonates with you, we can do great work together to get to the root of your experience and create change. Each session is as unique as
            whoever is sitting in front of me.
          </p>

          <p>
            What remains consistent regardless of what modalities and tools we are using together is that we will move at your own pace towards understanding how the experiences, attachments, and
            events you experience have shaped you and where you want to go from there.
          </p>

          <p>
            While traditionally therapy can look like diving deep into details of your history, at Raíz Psychotherapy it can also look like working exclusively in the present moment, acknowledging the
            past without having to re-live it.
          </p>

          <button className="small-cta" onClick={() => navigate("/about")}>
            More about me and my approach
          </button>
        </section>

        <h3 className="section-subtitle">Who I Work With</h3>

        <p>
          LGBTQ+ identified individuals wanting support with issues including but not limited to relational issues with family, romantic partners, or platonic relationships, kink/BDSM, gender,
          sexuality, processing childhood, complex, or systemic traumatic experiences.
        </p>

        <p>
          People who identify as Latine/a/o and BIPoC who want specialized, culturally sensitive support around issues including but not limited to intergenerational trauma, first generation family
          issues, the impacts of immigration and acculturation across generations, and other complex, systemic traumatic experiences.
        </p>

        <p>
          Relational Constellations including people in non-monogamous relationships, polycules, monogamous couples, friends, and adults wanting to improve their relationships with their parents who
          need support to resolve issues that are affecting the relationship(s).
        </p>

        <p>
          Individuals seeking psychedelic and/or spiritual integration. Have you had an experience in an altered state of consciousness that you're still not quite sure what to make of? Therapy can be
          a great place to process these experiences.
        </p>

        <p>
          Altered states of consciousness can include states influenced by substances, spiritual awakenings, or near-death experiences. Specializing in integration for Ketamine Assisted Therapy (KAT),
          this is a great option if you are already connected to a prescriber for your medicine.
        </p>

        <p>
          Please note that for appointments centered around integration, the use of any substances is not allowed during session. This is simply a space to process these experiences. If you have
          questions about KAT, please contact me via the <Link to="/contact">contact page</Link>.
        </p>

        <h3 className="section-subtitle">About the Practice</h3>
        <p>Raíz [rrah-ees] is a Spanish noun that means “root” </p>
        <p>
          Raíz Psychotherapy, is deeply grounded in the understanding of how systemic issues of the world we live in play major roles in our mental health. By acknowledging the systemic, I take a
          liberatory approach as we dive deeper in our work together to explore the factors influencing your day-to-day life to better support you in meeting your therapeutic goals.{" "}
        </p>
        <p>
          I chose the name Raíz Psychotherapy because I have a long-time appreciation and awe for plants and the way roots exist in the dark and soil to sustain the plant that lives above ground,
          often hidden but always doing life-sustaining work. I love the idea of roots serving as symbols of growth, depth, grounding, establishing belonging, and unique intrinsic knowledge.{" "}
        </p>
      </section>
    </main>
  );
}

export default Home;
