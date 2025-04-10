import { Card } from "primereact/card"; // Importa Card de PrimeReact
import { Button } from "primereact/button"; // Si deseas agregar botones
import styles from "./pricing.module.css"; // Usaremos CSS módulos
import { Divider } from "primereact/divider";
// Datos de los paquetes de precios
const pricingPackages = [
  {
    title: "Paquete Básico",
    price: "$100",
    features: [
      "Espacio para 50 personas",
      "Decoración básica",
      "1 Barra para bebidas",
      "Sonido estándar",
    ],
    buttonText: "Contratar",
  },
  {
    title: "Paquete Premium",
    price: "$250",
    features: [
      "Espacio para 100 personas",
      "Decoración personalizada",
      "2 Barras para bebidas",
      "Sonido profesional",
      "Catering incluido",
    ],
    buttonText: "Contratar",
  },
  {
    title: "Paquete Elite",
    price: "$300",
    features: [
      "Espacio para 200 personas",
      "Decoración de lujo",
      "3 Barras para bebidas",
      "Sonido de alta gama",
      "Catering premium",
      "Fotografía profesional",
    ],
    buttonText: "Contratar",
  },
  {
    title: "Paquete Gala",
    price: "$500",
    features: [
      "Espacio para 200 personas",
      "Decoración de lujo",
      "3 Barras para bebidas",
      "Sonido de alta gama",
      "Catering premium",
      "Fotografía profesional",
    ],
    buttonText: "Contratar",
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
              <span className={styles.priceSub}> por persona</span>
            </h3>
            <div className={styles.buttonContainer}>
              <Button label={pkg.buttonText} className={styles.button} />
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
