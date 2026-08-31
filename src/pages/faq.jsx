import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqItems = [
  {
    id: "therapist-question",
    question: "How do I ask my therapist about their values?",
    answer: (
      <>
        <p className="muted faq-answer">
          It can feel intimidating to ask a therapist questions that feel personal, there is a cultural understanding that it is not okay to do that in a therapeutic relationship. However, if certain
          values or perspectives are important to you, it can be challenging to develop a trusting therapeutic relationship with someone you aren’t sure holds similar values. It is incredibly
          important to be sure that you feel confident that the person you are collaborating with in your healing.
        </p>
        <p>
          The Liberatory Wellness Network is a directory and formerly a therapy collective and some time ago, they shared examples of questions that you can ask of your therapist to support you in
          making an informed choice about your providers. I have included the list below.
        </p>
        <p className="muted faq-answer">These can serve as a good starting out point:</p>
        <ul className="muted faq-answer">
          <li>How do you understand mental health outside of diagnosis and pathology?</li>
          <li>How do you support clients in navigating distress without relying on police or hospitalization?</li>
          <li>yHow do you acknowledge the impact of capitalism, racism, ableism, and state violence on mental health?</li>
          <li>How do you hold power in the therapy space?</li>
          <li>What is your stance on psychiatric medication and diagnosis?</li>
          <li>What is your relationship to mutual aid, collective care, and community healing?</li>
          <li>Who are you accountable to?</li>
          <li>How do you respond when harm is named?</li>
          <li>What does liberation mean to you?</li>
        </ul>
        <p>
          Therapists may or may not be open to answering the questions. Despite how disappointing that might be, it is also information that you can take in as you make a choice in providers. Please
          feel free to bring these and any other questions to your consultation or sessions at Raíz Psychotherapy.
        </p>
      </>
    ),
  },
  {
    id: "clients",
    question: "What kind of clients do you usually see?",
    answer: (
      <>
        <p>
          I’ve worked with historically underserved communities my whole career in the field. Working primarily with BIPOC and people who are LGBTQ+, I tend to do a lot of work around trauma and the
          various ways it manifests in people. Oftentimes my clients identify with having multiple traumatic experiences across their lives.
        </p>
        <p>
          The presentations I see most often include people with anxiety around specific things like socializing, dating, or sex. I have also worked with a lot of people for whom trauma shows up as
          perfectionism, have high expectations for themselves and others that impact connections, or result in a lot of self-doubt and self-criticism.
        </p>
      </>
    ),
  },
  {
    id: "therapy-step",
    question: "How do I know if therapy is the right step for me?",
    answer: (
      <>
        <p className="muted faq-answer">
          If you’ve been spending your time looking through therapists’ websites — therapy might be the right step for you, in all seriousness. If you have been looking, there has likely been an
          inkling for a while now that you might need support around a particular theme or issue. If you are here now, consider that you may have been looking around to see what support is available
          to you.
        </p>
        <p className="muted faq-answer">Therapy can tend to be the right step for you when:</p>
        <ul className="muted faq-answer">
          <li>you feel as though you are stuck on a particular question, decision, pattern, issue, or feeling-state</li>
          <li>you feel overwhelmed by how to start making a change that feels needed</li>
          <li>you wish you had a space to talk about your experiences without judgement</li>
        </ul>
      </>
    ),
  },
  {
    id: "insurance",
    question: "Do you take insurance?",
    answer: (
      <>
        <p className="muted faq-answer">
          I take some major insurance plans, including NorCal Kaiser and some California Medi-cal managed care plans like SF Health Plan through the platform Grow Therapy. Grow Therapy is an online
          platform that connects people seeking therapy to therapy providers who take their insurance. You can find me on Grow on{" "}
          <a href="https://growtherapy.com/provider/genw4e143iav/aleida-moreno" target="_blank" rel="noopener noreferrer">
            here.
          </a>{" "}
          Please note that you will have to sign up through Grow Therapy and we will be required to use their platform for sessions covered by insurance.
        </p>
        <p>I also take other insurances through Headway.</p>
      </>
    ),
  },
  {
    id: "sliding-scale",
    question: "Do you have a sliding scale?",
    answer: (
      <>
        <p className="muted faq-answer">
          I currently do not have a sliding scale model, but I save 1/2 my caseload for people who need sessions with me at more accessible rates. I have a couple slots available for $70/individual
          sessions on{" "}
          <a href="https://openpathcollective.org/therapist/aleida-moreno/" target="_blank" rel="noopener noreferrer">
            Open Path Collective.
          </a>{" "}
          Open Path Collective slots are reserved for people who are low-income and do not have access to insurance.
        </p>
        <p className="muted faq-answer">
          I also have a couple slots available for $158 per session on{" "}
          <a href="https://growtherapy.com/provider/genw4e143iav/aleida-moreno" target="_blank" rel="noopener noreferrer">
            Grow Therapy
          </a>{" "}
          and Headway for individuals or relationships. As my practice becomes more full-time in the next year, I will revisit my fee model and hope to offer sliding scale services all in one place!
        </p>
      </>
    ),
  },
  {
    id: "fee",
    question: "Will you ever change your fees?",
    answer: "I plan to raise my fee $8-$15 at the start of every calendar year. I provide my clients plenty of advance notice before raising rates. ",
  },
  {
    id: "weekly-session",
    question: "What does therapy look like on a week to week basis?",
    answer: (
      <p className="muted faq-answer">
        Every session can look very different because each meeting is influenced by so many factors. What each session looks like depends on what you are working on, how you are feeling that day, what
        you have capacity for. Typically we will meet for 50 minutes for individuals and 60 minutes for dyads/triads+. We could begin with a grounding exercise or dive right in. We can talk about
        something that came up for you that same day or process something from your past. We can close with an activity, exercise, or preparing for the following session. I am happy to explore what
        might work best for you in session and am always open to feedback about what does and does not work for you.
      </p>
    ),
  },
  {
    id: "cancellation-policy",
    question: "What is your rescheduling and cancellation policy?",
    answer: (
      <p className="muted faq-answer">
        We can talk about rescheduling and cancellation more in-depth during our first session where we review informed consent and policies and procedures. In summary, if I am notified of a need to
        reschedule more than 24 hours prior to your appointment or if you cancel your appointment more than 24 hours prior to your appointment, there is no charge. Cancellations within 24 hours of
        your session result in the full fee being charged to your regular payment method. Rescheduling requests within 24 hours of your appointment are subject to provider availability; if no
        alternative times are available, you will be responsible for the full fee being charged to your regular payment method. If we are able to reschedule within the same week, then there will be no
        charge. While there are nuances to the policy to make space for emergencies, maintaining a strict policy around cancellations supports clients and the therapeutic relationship alike.
      </p>
    ),
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen((current) => (current === id ? null : id));

  return (
    <section className="section-margin">
      <div className="card card-padding-2">
        <h2 className="section-title">FAQ</h2>
        <h3 className="section-subtitle">Here are some responses to the questions I receive most often from clients during consultations:</h3>

        <div className="accordion" role="list">
          {faqItems.map((item) => (
            <div className="accordion-item section-copy" key={item.id} role="listitem">
              <button
                className={`accordion-header ${open === item.id ? "open" : ""}`}
                aria-expanded={open === item.id}
                aria-controls={`${item.id}-panel`}
                id={`${item.id}-header`}
                onClick={() => toggle(item.id)}
              >
                <span className="accordion-left">
                  <span className="faq-question">{item.question}</span>
                </span>
                <span className="accordion-icon">{open === item.id ? "−" : "+"}</span>
              </button>
              <div id={`${item.id}-panel`} role="region" aria-labelledby={`${item.id}-header`} className={`accordion-panel ${open === item.id ? "open" : ""}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>

        <p className="section-copy">
          Still unsure if therapy at Raíz Psychotherapy is for you after reading through this list? <Link to="/contact">Schedule a complimentary 20 minute information call </Link>
          so we can work out any lingering questions and see if Raíz Psychotherapy is a good fit for you.
        </p>
      </div>
    </section>
  );
}

export default FAQ;
