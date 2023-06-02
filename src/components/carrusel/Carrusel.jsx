import { Slide } from 'react-slideshow-image';

import carrusel from '../../assets/carrusel';
import styles from './carrusel.module.css';

const CARRUSEL_IMAGES = [
  {
    img: carrusel.carousel1,
    id: 'slide-0',
  },
  {
    img: carrusel.carousel2,
    id: 'slide-1',
  },
  {
    img: carrusel.carousel3,
    id: 'slide-2',
  },
  {
    img: carrusel.carousel4,
    id: 'slide-3',
  },
];

const indicators = () => (<div className="carousel__indicator"></div>);

export function Carrusel () {
  return (
    <Slide
      easing="ease"
      duration={5000}
      arrows={false}
      indicators={indicators}
    >
      {
        CARRUSEL_IMAGES.map((image) => (
          <div
            key={image.id}
            className={styles.each__slide__img}
            style={{ backgroundImage: `url(${image.img})` }}
          ></div>
        ))
      }
    </Slide>
  );
}
