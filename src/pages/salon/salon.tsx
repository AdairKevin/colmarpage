import styles from "./salon.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import portada from "../../assets/img/salon/ORQ2-17.jpg";
import logo from "../../assets/img/logo.jpg";

const Salon = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.port}>
        <img src={portada} alt="" />
      </div>
      <div className={styles.contenidoPortada}>
        <small>Salón de Eventos "Las Orquideas"</small>
        <p>El escenario perfecto para celebrar momentos inolvidables.</p>
        <div className={styles.botones}>
          <button
            type="button"
            className={`btn btn-success ${styles.contacto}`}
          >
            Contáctanos
          </button>
          <button type="button" className={`btn btn-primary ${styles.redes}`}>
            <i className="bi bi-facebook"></i>
          </button>
          <button type="button" className={`btn btn-primary ${styles.redes}`}>
            <i className="bi bi-instagram"></i>
          </button>
        </div>
      </div>

      <div className={styles.separador}></div>

      <div className={styles.separador2}>
        <div className={styles.contenido}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            dolor, magnam delectus voluptatem neque saepe a doloremque facilis
            consequuntur vel.
          </p>
        </div>
        <div className={styles.circulo}>
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className={styles.contenidoBlanco}>
        <img src={portada} alt="" />
      </div>

      <div className={styles.salonA}>
        <h1>Salon A</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
          itaque.
        </p>
      </div>
    </div>
  );
};

export default Salon;
