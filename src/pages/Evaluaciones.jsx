// ? Componentes
import { Layout } from '../components/layout/Layout';
import { Title } from '../components/title/Title';
import { CTAContact } from '../components/cta/CTAContact';
import Imagen from '../components/img/Imagen';
// estilos
import style from './evaluaciones.module.css';

export default function Evaluaciones() {
  return (
    <Layout>
      <Title>Evaluaciones</Title>
      <section className={style.container}>
        <p>
          Proceso que comprende 5 encuentros con la flia. El primer encuentro es
          una entrevista virtual, sin el niño, solo la T.O. y los cuidadores del
          niño. Segundo, tercer y cuarto encuentro son presenciales, en
          consultorio. Suelen ser momentos de mucha diversión y disfrute, dado
          que son sesiones de juego que duran 50 a 60 min. El niño ingresa con
          uno de sus cuidadores, por lo tanto es una hora agradable para todos.
          Último encuentro, nuevamente modo online, sin el niño; es una
          instancia donde dialogamos sobre lo vivido durante los encuentros
          presenciales. Hablamos de estrategias para el hogar y para otros
          entornos donde se desarrolla el niño, conversamos sobre posibles
          causas, reflexionamos a cerca de qué hacer y por sobre todo, cómo
          continuar.
        </p>
        <p>
          <ul>
            <li>· Integración Sensorial (SPM, perfil sensorial, COMBs)</li>
            <li>· Neurodesarrollo</li>
            <li>
              · Dir/Floortime (Desarrollo de Capacidades Funcionales
              Emocionales)
            </li>
            <li>· Escala de Desarrollo Merrill-Palmer R.</li>
            <li>· Otras.</li>
          </ul>
        </p>
      </section>
      <section className={style.img__container}>
        <Imagen src="src/assets//novedades/novedad2.svg" alt="novedad" />
        <Imagen src="src/assets/novedades/novedad2.svg" alt="novedad" />
      </section>

      <CTAContact />
    </Layout>
  );
}
