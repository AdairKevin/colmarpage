import { useEffect, useState } from "react";
import styles from "./promocion.module.css";
import { Card } from "primereact/card"; // Importa Card de PrimeReact
import { Button } from "primereact/button"; // Si deseas agregar botones
import { Divider } from "primereact/divider";
// Datos de los paquetes de precios
const promocionP = [
  {
    title: "Gratis",
    price: "$0.00",
    moreInfo: "En la contratacion del paquete premium",
    features: [
      "Tiempo Libre",
      "Vals de entrada (1 canción)",
      "Mix moderno maximo 3 minutos",
      "3 canciones de 1 minuto cada una",
      "Programa, Coronación, Zapatilla, Ultimo juguete Y Brindis",
      "Palabras de los padres y Vals familiar",
      "Utileria en existencia y 2 meses de ensayo",
    ],
    buttonText: "Mas Información",
  },
];

const getNextMonth = (date: Date) => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
};

const MonthlyCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(getInitialTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getInitialTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getInitialTimeLeft() {
    const now = new Date();
    const end = getNextMonth(new Date(now.getFullYear(), now.getMonth(), 1)); // primer día del mes siguiente
    const diff = Math.max(
      0,
      Math.floor((end.getTime() - now.getTime()) / 1000)
    ); // ✅
    return diff;
  }

  const formatTime = (totalSeconds: number) => {
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days}d ${String(hours).padStart(2, "0")}h ${String(
      minutes
    ).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>¡Oferta por tiempo limitado!</h2>
      <p className={styles.contador}>
        Termina en: <span className="">{formatTime(timeLeft)}</span>
      </p>

      <div className={styles.cardContainer}>
        {promocionP.map((pkg, index) => (
          <Card key={index} className={styles.card} title={pkg.title}>
            <h3 className={styles.price}>
              {pkg.price}
              <span className={styles.priceSub}>{pkg.moreInfo}</span>
            </h3>
            <div className={styles.buttonContainer}>
              <Button
                label={pkg.buttonText}
                className={styles.button}
                onClick={() =>
                  (window.location.href = "https://wa.link/8m528q")
                }
              />
            </div>

            <ul className={styles.features}>
              <Divider />
              {pkg.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MonthlyCountdown;
