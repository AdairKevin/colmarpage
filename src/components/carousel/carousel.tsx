import { Carousel } from "primereact/carousel";
import { getImageUrl } from "../../utils.ts";
import styles from "./carousel.module.css";

const ResponsiveCarousel = ({
  images,
}: {
  images: { title: string; src: string }[];
}) => {
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const itemTemplate = (item: { title: string; src: string }) => {
    return (
      <div className={`text-center p-3 ${styles.carouselItem}`}>
        <img
          src={getImageUrl(item.src)}
          alt={item.title}
          style={{ width: "100%", borderRadius: "5px" }}
        />
        <h4 className="mt-3">{item.title}</h4>
      </div>
    );
  };

  return (
    <div className={`card ${styles.carouselContainer}`}>
      <Carousel
        value={images}
        numScroll={1}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={itemTemplate}
        circular
        autoplayInterval={3000}
      />
    </div>
  );
};

export default ResponsiveCarousel;
