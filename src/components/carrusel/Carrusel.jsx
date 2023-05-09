import { useState } from 'react';

import { Dot } from '../dots/Dot';
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
    img: carrusel.carrusel1,
    id: 'slide-2',
  },
  {
    img: carrusel.carrusel4,
    id: 'slide-3',
  },
];

export function Carrusel () {
  const [active, setActive] = useState(0);
  const [currentImg, setCurrentImg] = useState(CARRUSEL_IMAGES[active].img);

  const selectNewImg = (index) => {
    setCurrentImg(CARRUSEL_IMAGES[index].img);
    setActive(index);
  };

  return (
    <section className={styles.carrusel__container}>
      <img src={carrusel.pyramid_left} alt="pyramid dots decoration" />
      <section className={styles.carrusel__section}>
        <img
          src={`${currentImg}`}
          alt="Carrusel"
        />
        <div className={styles.carrusel__div__dots}>
          {CARRUSEL_IMAGES.map((slide, idx) => <Dot key={slide.id} selectNewImg={selectNewImg} active={active} slide={slide} index={idx} />)}
        </div>
      </section>
      <img src={carrusel.pyramid_right} alt="pyramid dots decoration" />
    </section>
  );
}
