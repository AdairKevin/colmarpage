const Footer = () => {
  return (
    <footer
      className=" text-white py-4"
      style={{
        position: "static",
        bottom: 0,
        width: "100%",
        backgroundColor: "#101112",
      }}
    >
      <div className="container text-center">
        {/* Nombre / logo */}
        <h6 className="mb-3 text-uppercase text-white ">COLMAR</h6>

        {/* Enlaces rápidos */}
        <div className="d-flex justify-content-center gap-4 flex-wrap mb-3">
          <a href="#" className=" text-primary text-decoration-none small">
            Inicio
          </a>
          <a
            href="https://maps.app.goo.gl/KzmSqNrhjqjhhBtm6"
            className=" text-primary text-decoration-none small"
          >
            Ubicación
          </a>
          <a
            href="https://wa.link/8m528q"
            className=" text-primary text-decoration-none small"
          >
            Contacto
          </a>
        </div>

        {/* Redes sociales */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a
            href="https://www.facebook.com/profile.php?id=61560141006918"
            className="text-white"
          >
            <i className="pi pi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/salonlasorquideas__"
            className="text-white"
          >
            <i className="pi pi-instagram"></i>
          </a>
          <a href="https://wa.link/8m528q" className="text-white">
            <i className="pi pi-whatsapp"></i>
          </a>
        </div>

        {/* Derechos */}
        <small className="text-secondary">
          &copy; {new Date().getFullYear()} Colmar. Todos los derechos
          reservados.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
