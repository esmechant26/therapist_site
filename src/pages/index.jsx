import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../index.css";
import headshot3 from "../assets/headshot3.jpg";

const workWithSections = [
  {
    id: "lgbtq",
    title: "LGBTQ+ identified individuals",
    summary:
      "Raíz Psychotherapy specializes in providing LGBTQ+ Affirming therapy to individuals and relationships in California. It is not limited to any one style of therapy or to themes specifically around identity or sexuality but rather is a framework that is able to be applied in any setting, theme, or conversation. Some of the themes I have experience supporting LGBTQ+ individuals and relationships in include but are not limited to:",
    details: [
      {
        id: "lgbtq-relational-issues",
        label: "Relational issues",
        content: [
          "Conflicts with family, romantic partners, colleagues, or platonic relationships that are impacting the relationship, patterns of defensiveness, exploring jealousy, processing the end of relationships",
        ],
      },
      {
        id: "lgbtq-kink",
        label: "Kink/BDSM",
        content: [
          "Exploring interest in Kink or BDSM, support while deepening or beginning kink/BDSM practices, setting boundaries and communicating desires, repair and recovery after boundary ruptures, support while looking for compatible partners, accepting their own kinky or BDSM-related desires",
        ],
      },
      {
        id: "lgbtq-gender",
        label: "Processing gender and sexuality exploration",
        content: [
          "Coming out, building acceptance around gender/sexuality, navigating dysphoria, preparing for gender affirming surgeries, providing letters of support for gender-affirming surgeries",
        ],
      },
      {
        id: "lgbtq-perfectionism",
        label: "Perfectionism",
        content: [
          "Processing and exploration of tendencies towards perfectionism, and how it impacts work, school, and/or day-to-day life, creating a path towards softening perfectionism and decreasing related emotions, building up self-worth outside of productivity and perfection",
        ],
      },
      {
        id: "lgbtq-neurodivergence",
        label: "Neurodivergence",
        content: ["Navigating the intersection of queerness and neurodivergence, seeking affirming communities, advocating for support"],
      },
      {
        id: "lgbtq-trauma",
        label: "Processing childhood, complex, or systemic traumatic experiences",
        content: ["Exploring how systemic homophobia, transphobia, has impacted one’s sense of safety, processing traumatic experiences, learning how to stay grounded in today’s political climate"],
      },
    ],
  },
  {
    id: "latine",
    title: "People who identify as Latine/a/o and BIPOC ",
    summary:
      "Raíz Psychotherapy provides culturally attuned care for people who identify as Black, Indigenous, (and) People of Color or Latine. This also includes services for people with experiences of immigration in their or their families’ histories. Culturally attuned care also applies to mixed race couples, polycules and individuals. Some of the themes I have experience supporting BIPOC, Latine, and people with immigration histories with include but are not limited to:",
    details: [
      {
        id: "latine-trauma",
        label: "Intergenerational trauma",
        content: [
          "Building an understanding of the impact of intergenerational trauma, developing acceptance for what has occurred, learning tools to break the cycles fueled by intergenerational trauma to impact",
        ],
      },
      {
        id: "latine-fam",
        label: "First generation family issues",
        content: [
          "Navigating having different values from family of origin, differences in communication styles between adults and their parents, dealing with family expectations and pressure, exploring how to individuate while maintaining respect and care for family and culture,processing having to go “no contact” with family due to differences, navigating differences during conflict, improving relationship with parents",
        ],
      },
      {
        id: "latine-impacts",
        label: "Impacts of immigration and acculturation",
        content: [
          "Processing the trauma of immigration in your lineage, exploring the impacts of adapting to a new country, recovering a sense of connection to country of origin, exploring cultural roots",
        ],
      },
      {
        id: "latine-processing",
        label: "Processing systemic traumatic experiences",
        content: ["Unpacking the impacts of racism, xenophobia, witnessing or defending others from immigration enforcement activity, remaining grounded in today’s political climate"],
      },
    ],
  },
  {
    id: "relationships",
    title: "Couples and other relational constellations ",
    summary:
      "At Raíz Psychotherapy, the concepts of  “Couples’ and Family therapy” is broad and referred to instead as Dyadic (2 people) or Triadic+ (3 or more people) therapy because it includes people in non-monogamous relationships, polycules, monogamous couples, friends, and adults wanting to improve their relationships with their parents who need support to resolve issues that are affecting the relationship(s). For dyadic and triadic+ sessions, I work primarily with a kind of therapy called Emotionally-Focused therapy which is a modality that acknowledges the importance of attachment, attunements, and presence in relationships and works to increase a sense of security to support more emotional understanding and bonding. Some of the themes I have experience supporting couples and other relationships with include but are not limited to:",
    details: [
      {
        id: "communication",
        label: "Communication issues",
        content: [
          "Exploring challenges in communication impacting the relationships, setting boundaries around communication, processing arguments or current conflict, learning tools to manage how communication occurs during conflict or in intense emotional moments",
        ],
      },
      {
        id: "non-monogamy",
        label: "Non-monogamy",
        content: [
          "Opening or closing a relationship, processing conflicts and successes, working to develop trust and improve communication, establishing agreements, navigating boundary ruptures, working out issues that stem for cohabitation, processing changes in dynamic or relationship ",
        ],
      },
      {
        id: "intimacy-issues",
        label: "Intimacy issues",
        content: ["Navigating mixed sexual desire (higher vs lower libido), rekindling intimacy, deepening emotional intimacy"],
      },
      {
        id: "boundaries",
        label: "Setting loving boundaries",
        content: [
          "Learning how to state needs, set boundaries while maintaining connection and care in the process, enforcing boundaries that have been set, exploring how to honor one’s own needs in a dynamic or relationship and communicate those needs to loved ones",
        ],
      },
      {
        id: "living",
        label: "Adjusting to living together or living apart",
        content: ["Processing the impact of changes of living arrangements, talking about day-to-day conflicts, adjusting to long distance "],
      },
    ],
  },
  {
    id: "psychedelic",
    title: "Individuals looking for support with integration for altered states of consciousness",
    summary:
      "Have you had an experience in an altered state of consciousness that you're still not quite sure what to make of? Therapy can be a great place to process these experiences! Raíz Psychotherapy works with people who have experienced what are frequently referred to as altered states of consciousness. Altered states of consciousness can include states influenced by substances, spiritual awakenings, or near-death experiences. ",
    details: [
      {
        id: "kta",
        label: "Ketamine Assisted Therapy",
        content: [
          "If you already have a prescriber, therapy at Raíz can be supportive to integrate the experience of your medicine, or prepare to begin your treatment with KAT. Please note that for appointments centered around integration, the use of any substances is not allowed during session.",
        ],
      },
      {
        id: "psychedelic-experience",
        label: "Experiences with Psychedelics",
        content: [
          "Processing experiences with psychedelics, the impacts of a “bad trip”, integration of experiences with your own spiritual practice, integrating breakthroughs experienced during psychedelic experiences to your day-to-day life.",
        ],
      },
      {
        id: "psychosis",
        label: "Psychosis",
        content: [
          "Integrating episodes of psychosis after recovery, processing experiences of hospitalization, being able to talk about experiences with psychosis in a space that is non-judgemental with a practitioner experienced in working with people with experiences of psychosis. ",
        ],
      },
      {
        id: "nde",
        label: "Near-death experiences",
        content: ["Processing the physical, emotional, spiritual and mental impacts of this experience, integrating near death experiences and their impact in your day-to-day life."],
      },
    ],
  },
];

function Home() {
  const navigate = useNavigate();
  const [openGroup, setOpenGroup] = useState(null);
  const [openNested, setOpenNested] = useState({});

  const toggleGroup = (id) => {
    setOpenGroup((current) => (current === id ? null : id));
  };

  const toggleNested = (groupId, id) => {
    setOpenNested((current) => ({
      ...current,
      [groupId]: current[groupId] === id ? null : id,
    }));
  };

  return (
    <main>
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-overlay">
          <h1>There is always room to grow towards a more authentic You!</h1>

          <p>Virtual therapy services for LGBTQ+ folks, BIPOC, and Spanish Speakers in California</p>

          <button className="btn-primary" onClick={() => navigate("/contact")}>
            Request a Free Consultation
          </button>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-margin">
        <section className="home-intro-grid">
          <div className="home-intro-copy">
            <h2 className="section-title">Welcome</h2>

            <p className="section-copy">Thank you for being here and welcome to the Raíz Psychotherapy site!</p>

            <p className="section-copy">
              My name is Aleida Moreno, I am a licensed Marriage and Family Therapist living and working in the Bay Area. I offer virtual therapy services for individuals and relationships across
              California.{" "}
            </p>

            <p>
              It is a privilege to provide high-quality mental health care for people in communities that I am a part of myself. My passion for this work has been fueled by the challenges in the many
              years I spent seeking mental health services that were both high-quality and also allowed me to feel seen and understood in my identities and life experiences. Because of this, I strive
              to be someone that my clients can feel understood by and safe with as they embark on their healing journeys.
            </p>
            <p>
              I have an eclectic therapeutic style which means that I draw from several modalities and can vary session-to-session. I believe that each session should be as unique as each individual
              sitting with me in the therapeutic space. For me, therapy is not a place to pathologize behaviors, thoughts, or experiences but rather a safe environment to approach these things
              collaboratively and with curiosity, compassion, and openness.
            </p>
          </div>

          <div className="home-intro-image">
            <img src={headshot3} alt="Aleida Moreno smiling" />
            <span className="home-hero-credit">Image by Jaq Cieslak</span>
          </div>
        </section>

        <section className="invert-section">
          <h3 className="section-subtitle">About the Practice</h3>

          <p>
            Raíz [rrah-EEs] is a Spanish noun that means “root”. Just like in English it can be used to refer to a part of plant anatomy, a supportive or essential part of something, or the origin or
            core of something.
          </p>
          <p>
            I chose the name Raíz Psychotherapy because I have always had an appreciation and admiration for plants and all their complexities; while they all mostly have the same basic structures,
            each plant is individually unique. There is something beautifully poetic and so relatable about the way roots usually exist underground and in the dark to sustain the beautiful leaves,
            flowers and fruits that are on display above ground. Roots are often hidden but always doing life-sustaining work. I love the idea of roots as symbols of growth, depth, grounding,
            establishing belonging, connection, and intrinsic knowledge and drive to survive.
          </p>
          <p>
            Therapy at Raíz Psychotherapy is deeply grounded in the understanding of how systemic issues of the world we live in play major roles in our mental health. I believe that by acknowledging
            the systemic and the impacts of the society and culture we live in and how that impacts us, we are able to dive deeper in our work together to explore the factors influencing your
            day-to-day life to better support you in meeting your therapeutic goals.
          </p>

          <button className="small-cta" onClick={() => navigate("/about")}>
            More about me and my approach
          </button>
        </section>

        <h3 className="section-subtitle">Who I Work With</h3>

        <div className="accordion" role="list">
          {workWithSections.map((section) => (
            <div className="accordion-item section-copy" key={section.id} role="listitem">
              <button
                className={`accordion-header ${openGroup === section.id ? "open" : ""}`}
                aria-expanded={openGroup === section.id}
                aria-controls={`${section.id}-panel`}
                id={`${section.id}-header`}
                onClick={() => toggleGroup(section.id)}
              >
                <span className="accordion-left">
                  <span className="faq-question">{section.title}</span>
                </span>
                <span className="accordion-icon">{openGroup === section.id ? "−" : "+"}</span>
              </button>

              <div id={`${section.id}-panel`} role="region" aria-labelledby={`${section.id}-header`} className={`accordion-panel ${openGroup === section.id ? "open" : ""}`}>
                <p className="work-with-summary">{section.summary}</p>

                <div className="nested-accordion">
                  {section.details.map((detail) => (
                    <div className="nested-accordion-item" key={detail.id}>
                      <button
                        className={`nested-accordion-header ${openNested[section.id] === detail.id ? "open" : ""}`}
                        aria-expanded={openNested[section.id] === detail.id}
                        aria-controls={`${detail.id}-panel`}
                        id={`${detail.id}-header`}
                        onClick={() => toggleNested(section.id, detail.id)}
                      >
                        <span className="nested-accordion-label">{detail.label}</span>
                        <span className="accordion-icon">{openNested[section.id] === detail.id ? "−" : "+"}</span>
                      </button>

                      <div id={`${detail.id}-panel`} role="region" aria-labelledby={`${detail.id}-header`} className={`nested-accordion-panel ${openNested[section.id] === detail.id ? "open" : ""}`}>
                        <ul className="work-with-list">
                          {detail.content.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="invert-section">
          <h3 className="section-subtitle">Therapy at Raiz Psychotherapy</h3>

          <p>
            I love to work with people who feel motivated to engage in therapy; I also acknowledge that motivation can look different for everyone. Sometimes motivation manifests as a strong
            felt-sense of readiness for a change without a specific goal in mind, or a sudden curiosity and openness to look at certain patterns or areas of your life in new ways. It can also look
            like knowing exactly what changes you want to make in your life and deciding to finally take the big step to ask for support. Regardless of what motivation looks and feels like for you, if
            any of this resonates with you, we can do great work together to get to the root of your experience and create change!{" "}
          </p>

          <p>
            Each session is as unique as whoever is sitting in front of me. Because no two people are the same, the therapeutic styles and tools I use for everyone are tailored specifically for each
            appointment. What remains consistent regardless of whatever modalities and tools we are using together is that we will move at your own pace towards understanding how the experiences,
            attachments, and events you experience have shaped you and where you want to go from there. While traditionally therapy has been portrayed as being all about diving deep into details of
            your trauma history, at Raíz Psychotherapy it can also look like working exclusively in the present moment, acknowledging the impacts of the past without having to re-live the details.
          </p>
        </section>
      </section>
    </main>
  );
}

export default Home;
