import styles from "./salonA.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ResponsiveCarousel from "../../components/carousel/carousel";
import salonAImages from "../../data/salonAImages.json";

const SalonA = () => {
  return (
    <div className={styles.salonA}>
      <h1>Salón A</h1>
      <p>
        Es el espacio ideal para eventos íntimos y memorables. Con capacidad
        para 100 personas, área de cocina, barra para bebidas y dos baños,
        ofrece comodidad y funcionalidad en un ambiente elegante.
      </p>

      <div className={styles.carousel}>
        <ResponsiveCarousel images={salonAImages} />
      </div>
    </div>
  );
};

export default SalonA;
