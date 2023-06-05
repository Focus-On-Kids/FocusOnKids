// ? Componentes
import { Layout } from '../components/layout/Layout';
import { Title } from '../components/title/Title';
import { CTAContact } from '../components/cta/CTAContact';
import CTASocialMedia from '../components/cta/CTASocialMedia';
import icons from '../assets/icons';
import colab from '../assets/img/index.js';
import style from './coaching.module.css';

function Coaching() {
  return (
    <Layout>
      <Title flags={true}>Coaching a Padres</Title>
      <section className={style.container}>
        <h3>Habla Hispana e Italiana</h3>
        <article className={style.article}>
          <img src={icons.es_flag} alt="Spanish language" />
          <p className={style.text}>
            Focus on Kids ofrece servicios de asesoramiento para padres para
            ayudarlos a mejorar sus conocimientos y habilidades para apoyar el
            éxito de los niños. Las sesiones de asesoramiento para padres se
            realizan 1:1 a través de ZOOM lo que hace que el acceso al apoyo de
            terapia ocupacional pediátrica sea flexible y conveniente para usted
            (sin listas de espera).Las sesiones de orientación para padres duran
            45 minutos y posterior al encuentro, se crean recursos y planes de
            acción específicos para sus necesidades.
          </p>
        </article>
        <article className={style.article}>
          <img src={icons.it_flag} alt="Italian language" />
          <p className={style.text}>
            Focus on Kids offre servizi di consulenza ai genitori per aiutarli a
            migliorare le loro conoscenze e competenze per sostenere il successo
            dei bambini. Le sessioni di consulenza per i genitori sono condotte
            1:1 attraverso ZOOM, che rende l'accesso al supporto della terapia
            occupazionale pediatrica flessibile e conveniente per i genitori
            (senza liste d'attesa). Le sessioni di consulenza per i genitori
            durano 45 minuti e, in seguito all'incontro, vengono create risorse
            e piani d'azione specifici per le vostre esigenze.
          </p>
        </article>
        <section className={style.coaching__section__content}>
          <h2>COLABORACION / COLLABORAZIONE</h2>
          <hr className={style.division} />
          <picture className={style.colab__container}>
            <a href="#" target="_blank">
              <img
                className={style.colab__imagen}
                src={colab.collab1}
                alt="connecting kids"
              />
            </a>
            <a href="#" target="_blank">
              <img
                className={style.colab__imagen}
                src={colab.collab2}
                alt="huellas"
              />
            </a>
            <a href="#" target="_blank">
              <img
                className={style.colab__imagen}
                src={colab.collab1}
                alt="otro"
              />
            </a>
          </picture>
        </section>
      </section>

      <CTAContact alwaysActive />
    </Layout>
  );
}

export default CTASocialMedia(Coaching);
