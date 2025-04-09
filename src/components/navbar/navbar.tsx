import logo from "../../assets/img/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu abierto:", isMenuOpen); // Depuración
    setIsMenuOpen(!isMenuOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={`navbar ${styles.navbar}`}>
      <div className="container-fluid">
        <div className={styles.navbar__logo}>
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="30"
              className={`d-inline-block align-text-center ${styles.navbar__img}`}
            />
            <span className={styles.brand}>Colmar</span>
          </Link>
        </div>

        <div className={styles.navbar__hamburger} onClick={toggleMenu}>
          &#9776;
        </div>

        <ul
          className={`${styles.navbar__links} ${
            isMenuOpen ? styles.show : ""
          } `}
          ref={(el) => console.log(el)}
        >
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} ${styles.active} nav-link`
                  : `${styles.link} nav-link`
              }
            >
              Salón de Eventos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/paquetes"
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} ${styles.active} nav-link`
                  : `${styles.link} nav-link`
              }
            >
              Organizador de Eventos
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <button
              onClick={toggleDropdown}
              className={styles.link}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              Redes Sociales ▾
            </button>
            {isDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <a className={styles.dropdownItem} href="#">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className={styles.dropdownItem} href="#">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className={styles.dropdownItem} href="#">
                    TikTok
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} ${styles.active} nav-link`
                  : `${styles.link} nav-link`
              }
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
