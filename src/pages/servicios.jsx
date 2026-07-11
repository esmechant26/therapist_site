import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./Contact.module.css";
import headshot2 from "../assets/headshot2.jpg";

export default function Servicios() {
  const formId = import.meta.env.VITE_FORMSPREE_ID || "xjgdvkrq";
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className={styles.contactCard}>
        <div className="card card-padding-2">
          <h1 className="section-title">Servicios en español</h1>
          <div className={`${styles.statusBox} ${styles.statusSuccess}`}>Gracias — tu mensaje fue enviado.</div>
          <p className="section-copy">
            O abre el formulario directamente:{" "}
            <a href={`https://formspree.io/f/${formId}`} target="_blank" rel="noopener noreferrer">
              Abrir formulario
            </a>
          </p>
        </div>
      </div>
    );
  }

  const sectionCards = [
    { id: "card-1", title: "Mejorar las relaciones entre adultos y sus padres", content: "Servicios para adultos que quieren mejorar su relación con sus padres que hablan español " },
    {
      id: "card-2",
      title: "Afrontar los retos de vivir en un país nuevo y el proceso de inmigración ",
      content: "Navegando la aculturación, las diferencias en creencias, valores y normas en Estados Unidos ",
    },
    { id: "card-3", title: "Apoyo para liberar los efectos de tu pasado", content: "Explorando traumas de la infancia, relaciones familiares y románticas, inmigración y experiencias de racismo " },
    {
      id: "card-4",
      title: "Cómo aliviar lo que puede parecer una vida entera de estrés",
      content: "Desarrollar tolerancia al malestar y habilidades de gestión del estrés para llevar una vida más relajada ",
    },
    {
      id: "card-5",
      title: "Mejora las relaciones con tus seres queridos LGBTQ+",
      content:
        "Navegar temas LGBTQ+ a través del prisma de la cultura latina, hablar con la familia sombre temas LGBTQ+, aprender a desarrollar aceptación y  apoyo después de que un ser querido salió del clóset",
    },
  ];

  return (
    <section className="section-margin servicios-page">
      <div className="servicios-hero card card-padding-2">
        <div className="servicios-hero-grid">
          <div className="servicios-hero-copy">
            <h1 className="section-title">Sobre mí</h1>
            <p>
              ¡Hola! Soy Aleida Moreno y soy una terapeuta de matrimonio y familia licenciada en el estado de california. Tengo mas de 5 años de experiencia proporcionando terapia en español y
              apoyando el crecimiento de mis clientes hacia los objetivos que se han propuesto.
            </p>
            <p>
              El español fue mi primera lengua y empece a aprender inglés cuando entre al pre- kinder. Comencé esta profesión con la motivación de poder algún día ofrecer servicios de terapia en
              español. El tener un terapeuta que no solo tenga las habilidades de consejería o sepa la teoría de psicología pero que también entienda los factores culturales que influyen los
              comportamientos, valores y patrones de una persona es algo esencial para que poder sentirse apoyado, entendido, y aun mas capaz de hacer cambios que a veces pueden parecer difíciles o
              incomodos con la terapia.{" "}
            </p>
            <p>
              Ha sido un honor recibir comentarios consistentemente positivos de mis clientes hispanohablantes sobre mi capacidad para traducir la teoría compleja de la psicología que aprendí en
              inglés a un español accesible, para ayudar a las personas a desarrollar comprensión sobre sí mismas, sus patrones y sus relaciones con los demás en un espacio que se siente seguro y
              auténtico para clientes de todas las edades.
            </p>
          </div>
          <div className="servicios-hero-media">
            <div className="servicios-hero-image">
              <img src={headshot2} alt="Headshot" />
              <span className="image-credit">Image by Heydi Giraud Pichardo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-padding-2 servicios-card-section">
        <div className="section-card-grid servicios-card-grid">
          {sectionCards.map((card) => (
            <article className="service-card" key={card.id}>
              <h3 className="service-card-title">{card.title}</h3>
              {card.content}
            </article>
          ))}
        </div>
      </div>

      <div className="servicios-contact-section card card-padding-2">
        <div className="servicios-contact-grid">
          <div className="servicios-contact-copy">
            <h2 className="section-title">Agenda una consulta de 20 minutos</h2>
            <p>
              ¿Aún no estás seguro/a si la terapia en Raíz Psychotherapy es para ti después de leer esta lista? Agenda una llamada informativa gratuita de 20 minutos por mensaje de texto o
              videollamada para que podamos resolver cualquier pregunta que todavía tengas.
            </p>
          </div>

          <form onSubmit={handleSubmit} method="POST" className={styles.contactForm} aria-label="Formulario de contacto">
            <div className={styles.formRow}>
              <div>
                <label className={styles.label} htmlFor="name">
                  Nombre
                </label>
                <input id="name" name="name" required />
                <div className={styles.formError}>
                  <ValidationError prefix="Nombre" field="name" errors={state.errors} />
                </div>
              </div>

              <div>
                <label className={styles.label} htmlFor="email">
                  Dirección de correo electrónico
                </label>
                <input id="email" name="email" type="email" required />
                <div className={styles.formError}>
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>
            </div>

            <div>
              <label className={styles.label} htmlFor="phone">
                Número de teléfono
              </label>
              <input id="phone" name="phone" type="tel" />
              <div className={styles.formError}>
                <ValidationError prefix="Teléfono" field="phone" errors={state.errors} />
              </div>
            </div>

            <div>
              <label className={styles.label} htmlFor="message">
                Escribe tu mensaje aquí
              </label>
              <textarea id="message" name="message" required />
              <div className={styles.formError}>
                <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
              </div>
            </div>

            <div className="form-actions">
              <button className="btn-primary" type="submit" disabled={state.submitting}>
                {state.submitting ? "Enviando…" : "Enviar mensaje"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
