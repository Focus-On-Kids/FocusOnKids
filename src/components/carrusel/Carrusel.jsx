import { useState } from 'react';

import { Dot } from '../dots/Dot';
import styles from './carrusel.module.css';
import others from '../../assets/others';

const CARRUSEL_IMAGES = [
  {
    img: others.carrusel,
    id: 'slide-0',
  },
  {
    img: others.carrusel,
    id: 'slide-1',
  },
  {
    img: others.carrusel,
    id: 'slide-2',
  },
  {
    img: others.carrusel,
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
      <img
        src={`${currentImg}`}
        alt="Carrusel"
      />
      <div className={styles.carrusel__dots}>
        {CARRUSEL_IMAGES.map((slide, idx) => <Dot key={slide.id} selectNewImg={selectNewImg} active={active} slide={slide} index={idx} />)}
      </div>
    </section>
  );
}
