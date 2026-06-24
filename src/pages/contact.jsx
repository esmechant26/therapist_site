// Make sure to run `npm install @formspree/react`
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./Contact.module.css";

export default function Contact() {
  const formId = import.meta.env.VITE_FORMSPREE_ID || "xjgdvkrq";
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className={styles.contactCard}>
        <div className="card card-padding-2">
          <h1>Contact</h1>
          <div className={`${styles.statusBox} ${styles.statusSuccess}`}>Thanks — your message was sent.</div>
          <p style={{ marginTop: 12 }}>
            Or open the form directly:{" "}
            <a href={`https://formspree.io/f/${formId}`} target="_blank" rel="noopener noreferrer">
              Open form
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.contactCard}>
      <div className="card card-padding-2">
        <h1>Contact</h1>

        <p className={styles.helperNote}></p>

        <form onSubmit={handleSubmit} method="POST" className={styles.contactForm} aria-label="Contact form">
          <div className={styles.formRow}>
            <div>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <input id="name" name="name" required />
              <div className={styles.formError}>
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
            </div>

            <div>
              <label className={styles.label} htmlFor="email">
                Email address
              </label>
              <input id="email" name="email" type="email" required />
              <div className={styles.formError}>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>
          </div>
          <div>
            <label className={styles.label} htmlFor="phone">
              Phone number
            </label>
            <input id="phone" name="phone" type="tel" />
            <div className={styles.formError}>
              <ValidationError prefix="Phone number" field="phone" errors={state.errors} />
            </div>
          </div>
          <div>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea id="message" name="message" required />
            <div className={styles.formError}>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
            <button className="btn-primary" type="submit" disabled={state.submitting}>
              {state.submitting ? "Sending…" : "Send Message"}
            </button>

            {/* <span className={styles.helperNote}>
              You can also email me at <a href="mailto:esmemchant@gmail.com">esmemchant@gmail.com</a>
            </span> */}
          </div>
        </form>
      </div>
    </div>
  );
}
