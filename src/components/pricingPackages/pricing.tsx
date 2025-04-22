import { Card } from "primereact/card"; // Importa Card de PrimeReact
import { Button } from "primereact/button"; // Si deseas agregar botones
import styles from "./pricing.module.css"; // Usaremos CSS módulos
import { Divider } from "primereact/divider";
// Datos de los paquetes de precios
const pricingPackages = [
  {
    title: "Paquete Salón A",
    price: "$7,500",
    moreInfo: "unico pago",
    features: [
      "Renta del Salón A",
      "Salón por 8 horas",
      "Espacio para hasta 120 personas",
      "Mobiliario incluido",
      "Audio (Sin DJ)",
      "Iluminación",
      "Cocina (sin gas)",
      "Recepcionista",
    ],
    buttonText: "Más Información",
  },
  {
    title: "Paquete Basico",
    price: "$180",
    moreInfo: "Por persona, a partir de 150 personas",
    features: [
      "Renta del Salón B por 7 horas",
      "Media hora de entrada y de salida",
      "Mobiliario y manteleria incluida",
      "Loza y cristaleria",
      "Pantallas para proyeccion",
      "DJ profecional",
      "Articulos de batucada",
      "Servicio de meseros (1 cada 2 mesas)",
      "Control de boletos o reservacion de mesas",
      "Vestidor",
      "Coordinador de eventos",
      "Personal de seguridad",
      "Personal para sanitarios",
      "Recepcionista",
      "Juegos infantiles (1 pieza)",
    ],
    buttonText: "Más Información",
  },
  {
    title: "Paquete Intermedio",
    price: "$295",
    moreInfo: "Por persona a partir de 200 personas",
    features: [
      "Todo lo del paquete básico",
      "Renta del Salón B por 7 horas",
      "Media hora de entrada y de salida",
      "Banquete a 2 tiempos",
      "Servicio de refrigeracion",
      "2 refrescos por mesa",
      "Agua y hielo (durante el banquete)",
    ],
    buttonText: "Más Información",
  },
  {
    title: "Paquete Premium",
    price: "$375",
    moreInfo: "Por persona a partir de 150 personas",
    features: [
      "Todo lo del paquete intermedio",
      "Renta del Salón B por 8 horas",
      "Media hora de entrada y de salida",
      "Mobiliario y manteleria de lujo",
      "Galopines",
      "Album de 100 fotos 5x7",
      "Pelicula en carpeta personalizada",
      "Cuadro de 16x20",
      "Sesion de fotos en el salón",
      "Memoria USB con el material digital",
      "Tomas con Dron",
      "Video de remembranza",
      "Video de edicion de aprocimadamente 2 horas",
      "Banner",
    ],
    buttonText: "Más Información",
  },
];

const PricingSection = () => {
  return (
    <div className={styles.pricingSection}>
      <h2 className={styles.title}>Nuestros Paquetes</h2>

      <div className={styles.cardContainer}>
        {pricingPackages.map((pkg, index) => (
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

export default PricingSection;
