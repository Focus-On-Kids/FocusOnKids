// ? Componentes
import { Layout } from '../components/layout/Layout';
import { Title } from '../components/title/Title';
import CTASocialMedia from '../components/cta/CTASocialMedia';
import { CTAContact } from '../components/cta/CTAContact';
// ? estilos
import styles from './acerca.module.css';

function AcercaDe() {
  return (
    <Layout>
      <Title>Acerca De</Title>
      <section className={styles.acercaDe}>
        <p>
          Focus On Kids es un emprendimiento que surge en 2018 con la idea de
          brindar apoyo a Terapistas Ocupacionales, Profesionales, que trabajan
          con la infancia, y a familias con niños con problemas en
          neurodesarrollo con problemas sensoriales, con problemas de
          aprendizaje y vinculaciones afectivas o emocional.
        </p>
        <p>
          Dentro de los servicios que ofrecemos estan: Superviciones a
          equipos(Online y presencial), Superviciones a terapistas ocupacionales
          y otros profesionales de la salud.
        </p>
        <p>
          Sesiones de colaboración que son muy similares a sesiones de
          supervición pero que la idea de que sea una instancia colaborativa,
          tiene que ver con una filosofía de Focus de que &ldquo;ayudándonos, nos
          ayudamos mutuamente&rdquo;. Por otro lado también ofrecemos Charlas abiertas
          a la comunidad y grupos de estudio.
        </p>
        <p>
          Además brindamos sesiones de Terapia Ocupacional con abordaje de
          integracion sensorial modelo DIR y Neurodesarrollo, brindamos
          tratamientos intensivos y evaluaciones.
        </p>
        <p>
          Nos pueden consultar por problemas de alimentación, problemas de
          aprendizajes, problemas de conducta, problemas de procesamiento
          sensorial y cualquier otro problema de Neurodiversidad como ser:
          transtorno especifico del lenguaje, problemas de atención e
          hiperactividad.
        </p>
        <p>
          La mirada que ofrecemos es de Integración Sensorial, Modelo DIR,
          FLORTIME y Neurodesarrollo. Trabajamos con el niño y con su familia,
          es decir, la mirada no es solamente hacia el niño sino también que
          hacemos un acompañamiento a los cuidadores primarios de estos niños
          que son quienes consultan y traen sus motivos de preocupación.
        </p>
      </section>
      <Title>
        <p className={styles.title__info}>
          Próximamente vienen nuevas novedades y servicios.
        </p>
        <p className={styles.title__info}>ESTEN ATENTOS!</p>
      </Title>
      <section className={styles.container__img}>
        <figure className={styles.picture}>
          <img
            className={styles.picture__img}
            src="src/assets/img/img1.png"
            alt="juegos"
          />
        </figure>
        <div className={styles.ocultar}>
          <figure className={styles.picture}>
            <img
              className={styles.picture__img}
              src="src/assets/img/img2.png"
              alt="juegos"
            />
          </figure>
        </div>
        <figure className={styles.picture}>
          <img
            className={styles.picture__img}
            src="src/assets/img/img3.png"
            alt="juegos"
          />
        </figure>
      </section>
      <CTAContact alwaysActive />
    </Layout>
  );
}

export default CTASocialMedia(AcercaDe);
