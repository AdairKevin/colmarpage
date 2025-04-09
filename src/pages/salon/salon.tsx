import styles from "./salon.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Salon = () => {
  return (
    <div className={styles.salon}>
      <h1>Salón de Eventos</h1>
      <p>
        Bienvenido al salón de eventos, donde hacemos realidad tus sueños. Aquí
        podrás encontrar todo lo que necesitas para tu evento perfecto.
      </p>
      <img
        src="/images/salon.jpg"
        alt="Salón de Eventos"
        className={styles.image}
      />
    </div>
  );
};

export default Salon;
