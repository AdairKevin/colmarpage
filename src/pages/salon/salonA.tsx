import styles from "./salonA.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import galeria1 from "../../assets/img/salon/ORQ2-15.jpg";
import galeria2 from "../../assets/img/salon/ORQ2-16.jpg";
import galeria3 from "../../assets/img/salon/ORQ2-17.jpg";

const SalonA = () => {
  return (
    <div className={styles.salonA}>
      <h1>Salon A</h1>
      <p>
        Es el espacio ideal para eventos íntimos y memorables. Con capacidad
        para 100 personas, área de cocina, barra para bebidas y dos baños,
        ofrece comodidad y funcionalidad en un ambiente elegante.
      </p>

      <div className={styles.galeria}>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={galeria1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={galeria2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={galeria3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalonA;
//
