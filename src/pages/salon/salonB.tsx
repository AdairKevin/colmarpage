import styles from "./salonB.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ResponsiveCarousel from "../../components/carousel/carousel";
import salonBImages from "../../data/salonBImages.json";

const SalonB = () => {
  return (
    <div className={styles.salonB}>
      <h1>Salón B</h1>
      <p>
        El Salón B es el espacio ideal para grandes celebraciones. Con capacidad
        para hasta 250 personas, camerino, balcón, área para banda o DJ, cocina
        y juegos como billar y futbolito, ofrece todo lo necesario para un
        evento inolvidable.
      </p>

      <div className={styles.carousel}>
        <ResponsiveCarousel images={salonBImages} />
      </div>
    </div>
  );
};

export default SalonB;
