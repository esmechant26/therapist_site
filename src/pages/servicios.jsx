import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./Contact.module.css";
import headshot2 from "../assets/headshot2.jpg";

export default function Servicios() {
  const formId = import.meta.env.VITE_FORMSPREE_ID || "xjgdvkrq";
  const [state, handleSubmit] = useForm(formId);
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (id) => {
    setOpenCard((current) => (current === id ? null : id));
  };

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
    {
      id: "card-1",
      title: "Exploración de la orientación sexual y la identidad de género",
      content:
        "Puede ser muy difícil procesar revelaciones sobre nuestra identidad de género u orientación sexual. Cuando nos damos cuenta de estos aspectos de nuestra idenitdad,  puede parecer imposible averiguar cómo compartir esta información con los seres queridos. Pensar en cómo aprender a sentirnos cómodos explorando nuestros deseos románticos, sexuales y emocionales, o donde encontrar una comunidad llena de apoyo puede parecer aterrador. En sesión, podemos procesar los cambios, practicar cómo compartir las noticias, aprender a desarrollar aceptación a las reacciones de seres queridos, y aprender técnicas para sentirse cómodo con sí mismo. ",
    },
    {
      id: "card-2",
      title: "Aprender como mejorar las relaciones entre adultos y sus padres",
      content:
        "En Raíz Psychotherapy, se proveen servicios de terapia individual o con los seres queridos presentes para adultos que quieren mejorar su relación con sus padres que hablan español. Para ayudar a mejorar la relación entre padre e hijo,durante nuestra sesiones nosotros podemos platicar sobre los problemas actuales, explorar la comunicación y aprender técnicas para desarrollar una comunicación más sana y efectiva. ",
    },
    {
      id: "card-3",
      title: "Afrontar los retos de vivir en un país nuevo y el proceso de inmigración",
      content:
        "La terapia puede ser un buen lugar para hablar sobre la dificultad de navegar una cultura diferente después de migrar o mudarse a los estados unidos.En nuestras sesiones podemos procesar el impacto de las diferencias en creencias, valores y normas en estados unidos, hablar sobre experiencias traumáticas de la immigracion, o platicar sobre los retos de ajustarse a la vida en otro país.",
    },
    {
      id: "card-4",
      title: "Cómo procesar y superar los efectos de tu pasado",
      content:
        "La mayoría de las personas han tenido por lo menos una experiencia traumática en sus vidas y muchas de ellas no saben cómo superar el pasado. En la terapia, se puede investigar los efectos de este tipo de experiencia, aprender técnicas para superar los efectos del trauma, y hacer cambios para poder mantener un sentido interno de seguridad. En sesión, podemos procesar traumas de la infancia, relaciones familiares y románticas, violencia, o traumas por experiencias como inmigración y racismo.",
    },
    {
      id: "card-5",
      title: "Aprender cómo aliviar lo que puede parecer una vida entera de estrés",
      content:
        "Aunque uno puede seguir como si no ha pasado nada, nuestras vidas son estresantes. Andar cargando estrés sin reconocerlo, desahogarse, o saber cómo relajarse tiene efectos negativos en la salud, no solo mental sino también la salud física, emocional, y hasta espiritual. En nuestras sesiones, podemos hablar sobre el estrés que está cargando, aprender a desarrollar tolerancia al malestar y al estrés y aprender técnicas para aliviar el estrés poco a poco para llevar una vida más relajada",
    },
    {
      id: "card-6",
      title: "Mejora las relaciones con tus seres queridos LGBT",
      content:
        "A veces nuestros seres queridos toman decisiones sobre sus vidas que no nos agradan y no sabemos cómo apoyarlos, comunicar nuestros miedos, hacer preguntas o tomar espacio para procesar las noticias en una manera que mantiene el amor y la conexión.  Yo soy una terapista y soy parte de la comunidad LGBT y para mi es un honor poder apoyar a personas que quieren aprender a aceptar a sus seres queridos. En nuestras sesiones, podemos procesar la información que recibió y hablar sobre miedos, dudas, o conflictos internos que pueda sentir. Podemos practicar como hablar con la familia sobre temas LGBT, hacer preguntas de manera respetuosa, aprender a desarrollar aceptación y apoyo para su ser querido LGBT para mantener una relación sana con ellos.",
    },
  ];

  return (
    <section className="section-margin servicios-page">
      <div className="servicios-hero card card-padding-2">
        <div className="servicios-hero-grid">
          <div className="servicios-hero-copy">
            <h1 className="section-title">Un Poco sobre mí</h1>
            <p>
              ¡Hola! Mi nombre es Aleida Moreno y soy terapista de matrimonio y familia licenciada en el estado de california. Tengo más de 10 años de experiencia trabajando en el sistema de salud
              mental y apoyando el crecimiento de mis clientes hacia los objetivos que se han propuesto.
            </p>
            <p>
              El español fue mi primera lengua y empecé a aprender inglés en la escuela infantil. Yo comencé mis estudios en esta profesión con la motivación de poder algún día ofrecer servicios de
              terapia en español. En mi opinión, como terapista es importante no solo tener habilidades de consejería o saber sobre la teoría de psicología pero también saber entender los factores
              culturales que influyen los comportamientos, valores y patrones de una persona. En mi experiencia, esto ayuda a que las personas puedan sentirse apoyados, entendidos, y aún más capaces
              de hacer cambios que a veces pueden parecer difíciles o incómodos en sus sesiones de terapia.
            </p>
            <p>
              Ha sido un honor recibir comentarios positivos de mis clientes hispanohablantes sobre mi capacidad para proveer terapia en español. Durante las sesiones, hago una experiencia
              individualizada para cada uno de mis clientes según sus objetivos y preferencias. Mi estilo personal en la terapia ha sido descrito por clientes anteriores como cálido, auténtico,
              orientado a soluciones y empoderador. No soy el tipo de terapista que permanece callado durante toda la sesión y realmente disfruto presentándome de forma auténtica, poder reírme con mis
              clientes, y me mantengo siempre abierta a recibir todo tipo de comentarios si algo no está funcionando en las sesiones. Me esfuerzo para hacer mi parte para crear un ambiente de
              confianza y seguridad para que mis clientes se sientan cómodos para dar comentarios, o hacer preguntas.
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
      <h1 className="section-title">Algunos temas que podemos explorar en la terapia</h1>
      <div className="card card-padding-2 servicios-card-section">
        <div className="section-card-grid servicios-card-grid">
          {sectionCards.map((card) => (
            <article className={`service-card ${openCard === card.id ? "open" : ""}`} key={card.id}>
              <button
                className={`service-card-toggle ${openCard === card.id ? "open" : ""}`}
                aria-expanded={openCard === card.id}
                aria-controls={`${card.id}-panel`}
                onClick={() => toggleCard(card.id)}
              >
                <span className="service-card-title">{card.title}</span>
                <span className="accordion-icon">{openCard === card.id ? "−" : "+"}</span>
              </button>

              <div id={`${card.id}-panel`} className={`service-card-body ${openCard === card.id ? "open" : ""}`}>
                <p>{card.content}</p>
              </div>
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
