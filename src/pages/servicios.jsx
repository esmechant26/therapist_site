import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./Contact.module.css";

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

  return (
    <section className="section-margin">
      <div className="card card-padding-2">
        <h1 className="section-title">Servicios en español</h1>

        <div className="section-copy">
          <p>
            ¡Hola! Soy Aleida Moreno y soy una terapeuta de matrimonio y familia licenciada en el estado de california. Tengo mas de 5 años de experiencia proporcionando terapia en español y apoyando
            el crecimiento de mis clientes hacia los objetivos que se han propuesto.
          </p>
          <p>
            El español fue mi primera lengua y empece a aprender inglés cuando entre al pre- kinder. Comencé esta profesión con la motivación de poder algún día ofrecer servicios de terapia en
            español. El tener un terapeuta que no solo tenga las habilidades de consejería o sepa la teoría de psicología pero que también entienda los factores culturales que influyen los
            comportamientos, valores y patrones de una persona es algo esencial para que poder sentirse apoyado, entendido, y aun mas capaz de hacer cambios que a veces pueden parecer difíciles o
            incomodos con la terapia.
          </p>
          <p>
            Ha sido un honor recibir comentarios consistentemente positivos de mis clientes hispanohablantes sobre mi capacidad para traducir la teoría compleja de la psicología que aprendí en inglés
            a un español accesible, para ayudar a las personas a desarrollar comprensión sobre sí mismas, sus patrones y sus relaciones con los demás en un espacio que se siente seguro y auténtico
            para clientes de todas las edades.
          </p>

          <h3 className="section-subtitle">Algunas de mis temas favoritos para trabajar con clientes hispanohablantes incluyen:</h3>
          <ul>
            <li>Padres que quieren mejorar su relación con sus hijos al entrar en la juventud adulta</li>
            <li>Navegando la aculturación, las diferencias en creencias, valores y normas en Estados Unidos</li>
            <li>Explorando traumas de la infancia, relaciones familiares y románticas, inmigración y experiencias de racismo</li>
            <li>Desarrollar tolerancia al malestar y habilidades de gestión del estrés para llevar una vida más relajada</li>
            <li>
              Navegar temas LGBTQ+ a través del prisma de la cultura latina, hablar con la familia sombre temas LGBTQ+, aprender a desarrollar aceptación y apoyo después de que un ser querido salió
              del clóset
            </li>
          </ul>
          <p>
            Si cree que le gustaría empezar sesiones de terapia conmigo, en la sección que sigue, por favor deja tu nombre, dirección de correo electrónico o número de teléfono, así como tu
            disponibilidad para una llamada de consulta de 20 minutos. Durante esta llamada, podemos hablar sobre los temas que necesitas apoyo, qué buscas en un terapeuta y tomar los primeros pasos
            para registrarte como cliente para que empecemos a trabajar juntos si te parece que trabajaríamos bien juntos.
          </p>
          <hr />
          <p>
            Aleida has experience providing therapy in Spanish and has had very rich therapeutic relationship with many monolingual Spanish speakers since their first year in training to be a
            therapist. Elle has been able to support client’s growth and progress towards goals they set for themselves. Spanish was Aleida’s first language and elle began to learn English when elle
            started preschool. Providing therapy services in Spanish is one of the reasons elle got into this work after years of lived experience looking for therapists that understood the cultural
            factors that influenced my behaviors, values, and patterns and could support me without judgement.
          </p>
          <p>
            It has been an honor to receive consistently positive feedback from my Spanish- speaking clients about my abilities to translate complex psychology theory into accessible Spanish to
            support people in building understanding about themselves, their patterns, and their relationships to other people and providing a safe and authentic space for clients of all ages.
          </p>
          <p>Some of my favorite things to help Spanish speakers work through include:</p>
          <ul>
            <li>Parents who want to improve their relationships with their children as they enter young adulthood</li>
            <li>Navigating acculturation, differences in beliefs, values, and norms in the United States</li>
            <li>Exploring trauma from childhood, familial and romantic relationships, immigration, and experiences of racism</li>
            <li>Developing distress tolerance and stress management skills to live a more relaxed life</li>
            <li>Navigating LGBTQ+ issues in Latine culture, talking to family, building acceptance and supportive relationships after coming out or having someone come out to you</li>
          </ul>
        </div>

        <hr className="section-rule" />

        <h2 className="section-subtitle">Ponte en contacto</h2>

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
    </section>
  );
}
