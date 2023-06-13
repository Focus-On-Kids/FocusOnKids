import { CTAContact } from '../components/cta/CTAContact';
import { Layout } from '../components/layout/Layout';
import { Title } from '../components/title/Title';
import Imagen from '../components/img/Imagen';
import CTASocialMedia from '../components/cta/CTASocialMedia';

import style from './novedades.module.css';
import { Video } from '../components/video/Video';
import Tarjeta from '../components/tarjeta/Tarjeta';

function Novedades() {
  return (
    <Layout>
      <Title>NOVEDADES</Title>
      <main className={style.container__novedades}>
        <section className={style.encuentros}>
          <div className={style.subTitulo}>
            <h2>NUEVOS ENCUENTROS</h2>
            <hr className={style.division} />
          </div>
          <div className={style.tarjeta}>
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
          </div>
        </section>

        <section className={style.comunidad}>
          <div className={style.subTitulo}>
            <h2>COMUNIDAD INSTAGRAM (VIVOS)</h2>
            <hr className={style.division} />
          </div>
          <div className={style.comunidad__img}>
            <Imagen
              src="src/assets/novedades/novedad2.svg"
              alt="novedad"
              igLive
            />
            <Imagen
              src="src/assets/novedades/novedad4.svg"
              alt="novedad"
              igLive
            />
          </div>
          <div className={style.comunidad__img}>
            <Imagen
              src="src/assets/novedades/novedad1.svg"
              alt="novedad"
              prox
            />
            <Imagen
              src="src/assets/novedades/novedad3.svg"
              alt="novedad"
              prox
            />
          </div>
        </section>

        <section className={style.videos}>
          <div className={style.subTitulo}>
            <h2>VIDEOS</h2>
            <hr className={style.division} />
          </div>
          <Video />
          <Video />
        </section>
      </main>
      <CTAContact alwaysActive />
    </Layout>
  );
}

export default CTASocialMedia(Novedades);
