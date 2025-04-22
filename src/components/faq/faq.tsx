// Estilos de PrimeReact
import "primereact/resources/themes/lara-light-indigo/theme.css"; // o el tema que prefieras
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// Estilos de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Estilos css
import styles from "./faq.module.css";

import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { useState } from "react";
const faqData = {
  General: [
    {
      icon: "pi pi-face-smile",
      question: "¿Hay una prueba gratuita disponible?",
      answer: "...",
    },
    {
      icon: "pi pi-refresh",
      question: "¿Puedo cambiar mi fecha después de reservar?",
      answer: "...",
    },
  ],
  Precios: [
    {
      icon: "pi pi-dollar",
      question: "¿Cuál es el precio de renta del salón?",
      answer: "...",
    },
    {
      icon: "pi pi-credit-card",
      question: "¿Qué formas de pago aceptan?",
      answer: "...",
    },
  ],
  Servicios: [
    {
      icon: "pi pi-video",
      question: "¿Tienen proyector o equipo de sonido?",
      answer: "...",
    },
    {
      icon: "pi pi-users",
      question: "¿Puedo contratar un proveedor externo?",
      answer: "...",
    },
  ],
} as const;

export default function Faq() {
  const categories = Object.keys(faqData);
  const [selectedCategory, setSelectedCategory] = useState("General");

  return (
    <div className="container">
      <div className="text-center ">
        <h2 className={styles.title}>Preguntas Frecuentes</h2>
        <p className={`text-muted ${styles.subtitle}`}>
          Estas son algunas de las dudas más comunes. ¿No encuentras lo que
          buscas?
          <a href="https://wa.link/8m528q" className="ms-1">
            ¡Contáctanos!
          </a>
        </p>
      </div>

      <div
        className={`d-flex flex-wrap justify-content-center gap-3 mb-4 ${styles.botones}`}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            label={cat}
            className={`btn btn-outline-dark ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          />
        ))}
      </div>

      <div className={`accordion-custom ${styles.acordion}`}>
        <Accordion multiple>
          {faqData[selectedCategory as keyof typeof faqData].map(
            (item, idx) => (
              <AccordionTab
                className={styles.acordionTab}
                key={idx}
                header={
                  <div className={styles.headertab}>
                    <i className={`${item.icon} text-dark`}></i>
                    <span className={styles.pregunta}>{item.question}</span>
                  </div>
                }
              >
                <p className="mb-0">{item.answer}</p>
              </AccordionTab>
            )
          )}
        </Accordion>
      </div>
    </div>
  );
}
