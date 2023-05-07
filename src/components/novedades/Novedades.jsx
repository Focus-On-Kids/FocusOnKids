import { Novedad } from '../novedad/Novedad';
import others from '../../assets/others';
import styles from './novedades.module.css';

const NOVEDADES_ITEMS = [
  {
    img: others.novedades,
    title: 'Curso',
    subtitle: 'Colaboración con equipos de profesionales a distancia.',
    description: 'Lorem ipsum.'
  },
  {
    img: others.novedades,
    title: 'Capacitaciones para Alumnas',
    subtitle: 'Dando sentido a la Regulación Emocional.',
    description: 'Lorem ipsum.'
  },
  {
    img: others.novedades,
    title: 'Oferta Laboral',
    subtitle: 'Grupos de supervisión y formación para terapista ocupacionales y otros profesionales.',
    description: 'Lorem ipsum.'
  },
  {
    img: others.novedades,
    title: 'Servicios',
    subtitle: 'Evaluación y tratamientos intensivos para niños y familias.',
    description: 'Lorem ipsum.'
  }
];

export function Novedades () {
  return (
    <section className={styles.novedades}>
      <h1>NOVEDADES</h1>
      
      <section className={styles.novedades__section__container}>
        {NOVEDADES_ITEMS.map((novedad) => <Novedad key={novedad.subtitle} novedad={novedad} />)}
      </section>
    </section>
  );
}
