import React from "react";

function FAQ() {
  return (
    <section className="section-margin">
      <div className="card card-padding-2">
        <h2 className="section-title">FAQ</h2>

        <div style={{ marginBottom: "1.5rem" }}>
          <p style={{ fontStyle: "italic", marginBottom: "0.5rem" }}>Do you take insurance?</p>
          <p className="muted" style={{ marginTop: 0 }}>
            I take some major insurance plans, including NorCal Kaiser, through the platform Grow Therapy. Grow Therapy is an online platform that connects people seeking therapy to therapy providers
            who take their insurance. You can find me in{" "}
            <a href="https://growtherapy.com/provider/genw4e143iav/aleida-moreno" target="_blank" rel="noopener noreferrer">
              their directory here
            </a>
            , but please note that you will have to sign up through Grow Therapy and we will be required to use their platform for sessions covered by insurance.
          </p>
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <p style={{ fontStyle: "italic", marginBottom: "0.5rem" }}>What is your rescheduling and cancellation policy? </p>
          <p className="muted" style={{ marginTop: 0 }}>
            In summary, if I am notified of a need to reschedule more than 24 hours prior to your appointment or if you cancel your appointment more than 24 hours prior to your appointment, there is
            no charge. I charge full fee for cancellations and reschedules within 24 hours of the appointment, unless we can reschedule for the same week, but that completely depends on shared
            availability. If you have more questions, we can talk about rescheduling and cancellation more in-depth during a 20 minute consultation call.{" "}
            <a href="https://raizpsychotherapy.com/contact" target="_blank" rel="noopener noreferrer">
              Contact form
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
