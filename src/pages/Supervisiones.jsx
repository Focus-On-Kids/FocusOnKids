import { useState } from 'react';

import CTASocialMedia from '../components/cta/CTASocialMedia';
import { Title } from '../components/title/Title';
import { CTAContact } from '../components/cta/CTAContact';
import { Audio } from '../components/player/Audio';
import { Layout } from '../components/layout/Layout';
import icons from '../assets/icons';
import styles from './supervisiones.module.css';

function Supervisiones() {
  const [playAudio1, setPlayAudio1] = useState(false);
  const [playAudio2, setPlayAudio2] = useState(false);
  
  return (
    <Layout>
      <Title>SUPERVISIONES</Title>
      <article className={styles.supervisiones__article__content}>
        <p>
      La supervisiones son elegidas tanto por Terapistas Ocupacionales como por otros profesionales de la salud que acompañan a los niños y a sus familias. Podes pedir supervisión si sos Psicóloga, Nutricionista, Psicóloga, Psicomotricista, Kinesiólogo o Fisioterapeuta. Las dudas más frecuentes por las que piden supervisión tienen que ver, mayormente, por si hay o no desafíos sensoriales que están impactando en la conducta del niño.
        </p>
      </article>
      <section className={styles.supervisiones__section__content}>
        <h2>ONLINE</h2>
        <hr className={styles.division} />
        <h2>GRUPO DE SUPERVISION</h2>
        <hr className={styles.division} />
        <p>Online, proximamente 2da edición</p>
        <article className={styles.supervisiones__article__languages}>
          <h2>SESIONES DE COLABORACION</h2>
          <img src={icons.es_flag} alt="Spanish language" />
          <img src={icons.it_flag} alt="Italian language" />
        </article>
        <hr className={styles.division} />
      </section>
      <article className={styles.card__article__container}>
        <figure className={styles.card__figure__language}>
          <img src={icons.es_division} alt="Spanish language audio" />
        </figure>
        <article className={styles.card__article__content}>
          <figure className={styles.card__figure__img}>
            <img src="/src/assets/novedades/novedad2.svg" alt="sesiones de colaboración" />
          </figure>
          <section>
            <h3>TITOLO AUDIO</h3>
            {playAudio1 && <Audio isPlaying={playAudio1} song="/src/assets/del.mp3" />}
          </section>
          <div
            className={styles.audio__btn}
            onClick={() => {
              setPlayAudio1(!playAudio1);
              setPlayAudio2(false);
            }}
          >
            <img src={playAudio1 ? icons.pause : icons.play} alt="Play button" />
          </div>
        </article>
      </article>
      <article className={styles.card__article__container}>
        <figure className={styles.card__figure__language}>
          <img src={icons.it_division} alt="Italian language audio" />
        </figure>
        <article className={styles.card__article__content}>
          <figure className={styles.card__figure__img}>
            <img src="/src/assets/novedades/novedad2.svg" alt="sesiones de colaboración" />
          </figure>
          <section>
            <h3>TITOLO AUDIO</h3>
            {playAudio2 && <Audio song="/src/assets/del.mp3" isPlaying={playAudio2} />}
          </section>
          <div
            className={styles.audio__btn}
            onClick={() => {
              setPlayAudio2(!playAudio2);
              setPlayAudio1(false);
            }}
          >
            <img src={playAudio2 ? icons.pause : icons.play} alt="Play button" />
          </div>
        </article>
      </article>
      <CTAContact alwaysActive />
    </Layout>
  );
}

export default CTASocialMedia(Supervisiones);
