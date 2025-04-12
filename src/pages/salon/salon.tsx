import styles from "./salon.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import portada from "../../assets/img/salon/ORQ2-17.jpg";
import logo from "../../assets/img/logo.jpg";
import SalonA from "./salonA";
import PricingSection from "../../components/pricingPackages/pricing";
import separador from "../../assets/img/salon/ORQ2-24.jpg";
import SalonB from "./salonB";

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
            Contácto
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
            Bienvenidos a Las Orquídeas, un espacio diseñado para dar vida a
            todo tipo de celebraciones. Desde bodas hasta eventos sociales y
            empresariales, cada ocasión se transforma en un recuerdo
            inolvidable.
          </p>
        </div>
        <div className={styles.circulo}>
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className={styles.contenidoBlanco}>
        <img src={portada} alt="" />
      </div>

      <SalonA />

      <div className={styles.contenidoBlanco}>
        <img src={separador} alt="" />
      </div>

      <SalonB />

      <div>
        <PricingSection />
      </div>
    </div>
  );
};

export default Salon;
