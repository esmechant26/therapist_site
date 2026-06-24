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
          <h1>Servicios en español</h1>
          <div className={`${styles.statusBox} ${styles.statusSuccess}`}>Gracias — tu mensaje fue enviado.</div>
          <p style={{ marginTop: 12 }}>
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
        <h1>Servicios en español</h1>

        <div style={{ marginBottom: "2rem" }}>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
            ¡Hola! Soy Aleida Moreno y soy una terapeuta de matrimonio y familia licenciada en el estado de california. Tengo mas de 5 años de experiencia proporcionando terapia en español y en ese
            tiempo he apoyado el crecimiento y progreso de mis clientes hacia los objetivos que se han propuesto. El español fue mi primera lengua y empece a aprender inglés cuando entre a la escuela
            infantil. El poder ofrecer servicios de terapia en español es una de las motivaciones por las que comencé en esta profesión. Yo creo que tener un terapeuta que no solo tenga las
            habilidades de consejería o sepa sobre la teoría de psicología pero que también entienda os factores culturales que influyen los comportamientos, valores y patrones de una persona es algo
            esencial para poder sentirse apoyado, entendido, y aun mas capaz de hacer cambios que a veces pueden parecer difíciles o incomodos.
          </p>
          <p>
            Ha sido un honor recibir comentarios consistentemente positivos de mis clientes hispanohablantes sobre mi capacidad para traducir la teoría compleja de la psicología que aprendí en inglés
            a un español accesible, para ayudar a las personas a desarrollar comprensión sobre sí mismas, sus patrones y sus relaciones con los demás en un espacio que se siente seguro y auténtico
            para clientes de todas las edades.
          </p>

          <h3 style={{ marginBottom: "1rem", marginTop: "1.5rem" }}>Algunas de mis temas favoritos para trabajar con clientes hispanohablantes incluyen: </h3>
          <ul style={{ marginLeft: "1.5rem", lineHeight: "1.8", marginBottom: "1rem" }}>
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
        </div>

        <hr style={{ margin: "2rem 0" }} />

        <h2 style={{ marginBottom: "1.5rem" }}>Ponte en contacto</h2>

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

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
            <button className="btn-primary" type="submit" disabled={state.submitting}>
              {state.submitting ? "Enviando…" : "Enviar mensaje"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
