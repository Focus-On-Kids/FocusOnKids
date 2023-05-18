import { Slide } from 'react-slideshow-image';

import carrusel from '../../assets/carrusel';
import styles from './carrusel.module.css';

const CARRUSEL_IMAGES = [
  {
    img: carrusel.carrusel1,
    id: 'slide-0',
  },
  {
    img: carrusel.carrusel2,
    id: 'slide-1',
  },
  {
    img: carrusel.carrusel3,
    id: 'slide-2',
  },
  {
    img: carrusel.carrusel4,
    id: 'slide-3',
  },
];

const indicators = () => (<div className="carousel__indicator"></div>);

export function Carrusel () {
  return (
    <section className={styles.carrusel__container}>
      <img src={carrusel.pyramid_left} alt="pyramid dots decoration" />
      <Slide
        easing="ease"
        duration={5000}
        infinite={false}
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
      <img src={carrusel.pyramid_right} alt="pyramid dots decoration" />
    </section>
  );
}
