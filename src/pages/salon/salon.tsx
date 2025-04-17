import styles from "./salon.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import portada from "../../assets/img/salon/ORQ2-17.webp";
import logo from "../../assets/img/logo.jpg";
import SalonA from "./salonA";
import PricingSection from "../../components/pricingPackages/pricing";
import separador from "../../assets/img/salon/ORQ2-28.webp";
import SalonB from "./salonB";
import MonthlyCountdown from "../../components/promocion/promocion";
import Faq from "../../components/faq/faq";
import separador2 from "../../assets/img/salon/ORQ2-35.webp";

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
            onClick={() => (window.location.href = "https://wa.link/8m528q")}
          >
            Contáctanos
          </button>

          <button
            type="button"
            className={`btn btn-primary ${styles.redes}`}
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=61560141006918",
                "_blank"
              )
            }
          >
            <i className="bi bi-facebook"></i>
          </button>

          <button
            type="button"
            className={`btn btn-secondary ${styles.redes}`}
            onClick={() =>
              window.open(
                "https://www.instagram.com/salonlasorquideas__",
                "_blank"
              )
            }
          >
            <i className="bi bi-instagram"></i>
          </button>

          <button
            type="button"
            className={`btn btn-primary ${styles.redes}`}
            onClick={() =>
              window.open("https://maps.app.goo.gl/KzmSqNrhjqjhhBtm6", "_blank")
            }
          >
            <i className="bi bi-geo-alt-fill"></i>
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

      <div>
        <MonthlyCountdown />
      </div>

      <div className={styles.contenidoBlanco}>
        <img src={separador2} alt="" />
      </div>

      <Faq />
    </div>
  );
};

export default Salon;
