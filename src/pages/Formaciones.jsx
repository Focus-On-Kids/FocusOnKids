import CTASocialMedia from '../components/cta/CTASocialMedia';

import { CTAContact } from '../components/cta/CTAContact';
import { Layout } from '../components/layout/Layout';
import { Title } from '../components/title/Title';

import styles from './formaciones.module.css';

const COURSES = [
  {
    title: 'Dando sentido a la regulación emocional',
    src: '/src/assets/novedades/novedad2.svg',
  },
  {
    title: 'De adentro hacia afuera',
    src: '/src/assets/novedades/novedad2.svg',
  },
  {
    title: 'Intervenciones basadas en el perfil individual de los cuidadores',
    src: '/src/assets/novedades/novedad2.svg',
  },
  {
    title: 'Dispraxia. Quién soy? Una mirada vincular y afectiva',
    src: '/src/assets/novedades/novedad2.svg',
  },
  {
    title: 'Construyendo la alianza terapéutica con la flia',
    src: '/src/assets/novedades/novedad2.svg',
  },
  {
    title: 'Dispraxia en el aula',
    src: '/src/assets/novedades/novedad2.svg',
  },
  {
    title: 'Sistema visual y su rol e impacto en la vida cotidiana',
    src: '/src/assets/novedades/novedad2.svg',
  }
];

function Formaciones() {
  return (
    <Layout>
      <Title>FORMACIONES</Title>
      <article className={styles.formaciones__article__content}>
        <p>
        Brindar formación a profesionales y docentes, es algo que disfruto y que me apasiona. En lo personal, siento que logro cerrar un círculo perfecto, donde lo aprendido durante años, las experiencias de la practica profesional cotidiana puedo devolverlas a quienes tienen ganas de conocer más sobre neurodiversidad. Como si fuera poco, este circulo que parece cerrarse, vuelve a abrirse, como un incansable espiral que me arroja dudas y preguntas y me mueve por seguir formándome, aprendiendo y volver a enseñar.
        </p>
      </article>
      <section className={styles.formaciones__section__content}>
        <h2>GRUPOS DE ESTUDIO</h2>
        <hr className={styles.division} />
        <h2>CHARLAS</h2>
        <hr className={styles.division} />
        <p>
        Algunos cursos y charlas por las que me podés consultar si estás interesado en ofrecerlas en tu institución.
        </p>
      </section>
      <section className={styles.formaciones__section__course__container}>
        {
          COURSES.map((course) => (
            <article
              key={course.title}
              className={styles.formaciones__article__course}
            >
              <figure>
                <img src={course.src} alt={course.title} />
              </figure>
              <h3>{course.title}</h3>
            </article>
          ))
        }
      </section>
      <CTAContact alwaysActive />
    </Layout>
  );
}

export default CTASocialMedia(Formaciones);
