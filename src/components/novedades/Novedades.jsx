import { Slide } from 'react-slideshow-image';

import { Novedad } from '../novedad/Novedad';
import novedades from '../../assets/novedades';
import icons from '../../assets/icons';
import styles from './novedades.module.css';

const NOVEDADES_ITEMS = [
  {
    img: novedades.novedad1,
    title: 'Curso',
    subtitle: 'Colaboración con equipos de profesionales a distancia.',
    description: 'Lorem ipsum.'
  },
  {
    img: novedades.novedad2,
    title: 'Capacitaciones para Alumnas',
    subtitle: 'Dando sentido a la Regulación Emocional.',
    description: 'Lorem ipsum.'
  },
  {
    img: novedades.novedad3,
    title: 'Oferta Laboral',
    subtitle: 'Grupos de supervisión y formación para terapista ocupacionales y otros profesionales.',
    description: 'Lorem ipsum.'
  },
  {
    img: novedades.novedad4,
    title: 'Servicios',
    subtitle: 'Evaluación y tratamientos intensivos para niños y familias.',
    description: 'Lorem ipsum.'
  }
];

const properties = {
  prevArrow: <button className={styles.arrows} style={{ backgroundImage: `url(${icons.arrowLeft})`, left: -60 }}></button>,
  nextArrow: <button className={styles.arrows} style={{ backgroundImage: `url(${icons.arrowRight})`, right: -60 }}></button>
};

const indicators = () => (<div className="carousel__indicator"></div>);

export function Novedades () {
  return (
    <section className={styles.novedades}>
      <h1>NOVEDADES</h1>
      <section className={styles.novedades__section__container}>
        {
          NOVEDADES_ITEMS.map((novedad) => <Novedad key={novedad.subtitle} novedad={novedad} />)
        }
      </section>
      <Slide
        slidesToScroll={3}
        slidesToShow={3}
        autoplay={false}
        indicators={indicators}
        {...properties}
      >
        {
          NOVEDADES_ITEMS.map((novedad) => <Novedad key={novedad.subtitle} novedad={novedad} />)
        }
      </Slide>
    </section>
  );
}
