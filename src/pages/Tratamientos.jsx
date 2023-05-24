// ? Componentes
import { Layout } from '../components/layout/Layout';
import { Title } from '../components/title/Title';
import { CTAContact } from '../components/cta/CTAContact';
import Imagen from '../components/img/Imagen';
// estilos
import style from './evaluaciones.module.css';

export default function Tratamientos() {
  return (
    <Layout>
      <Title>Tratamientos Intensivos</Title>
      <section className={style.container}>
        <p>
          Los tratamientos intensivos se están convirtiendo rápidamente en el
          modelo de tratamiento más eficaz utilizado con niños con problemas
          sensoriales y motores. Este concepto se ha utilizado ampliamente en
          los EE. UU. durante algún tiempo; sin embargo, Argentina recién está
          comenzando a adoptar el modelo de tratamiento. Focus on Kids ha
          adaptado este modelo para permitir que una variedad más amplia de
          personas acceda al servicio que, de otro modo, podría estar limitado
          debido a la ubicación geográfica, los compromisos de tiempo, las
          listas de espera del servicio, etc.
        </p>
        <p>
          Este modelo de tratamiento coloca a Focus on Kids a la vanguardia del
          campo y continúa mostrando su dedicación a los modelos de tratamiento
          más efectivos. El tratamiento intensivo es donde el cliente recibirá
          un modulo de terapia en bloques cortos e intensos que de otro modo se
          prolongarían durante varias semanas y meses, etc.
        </p>
        <p>
          El concepto del tratamiento intensivo es proporcionar información
          intensa y regular al niño para provocar cambiar mediante el uso de
          técnicas de tratamiento altamente especializadas. Esta entrada está
          diseñada para tener un impacto en el Sistema Nervioso Central (SNC) y
          da lugar a la capacidad de no solo ofrecer cambios en la organización
          del SNC, sino también más organización en las respuestas posteriores
          que el SNC tiene la capacidad de producir. Un 'tratamiento intensivo'
          no pretende ser una 'cura', pero es un buen trampolín para
          proporcionar una base a partir de la cual se puede producir un cambio
          y perfeccionarse aún más en el tratamiento continuo y los programas
          del hogar/escuela, etc. Son 5 encuentros semanales, ideal para
          familias del interior, con objetivos específicos o que estén a la
          espera de turnos de Terapia Ocupacional. Algunos tratamientos
          intensivos pueden estar dirigidos a resolver desafíos de escritura,
          alimentación, intervención temprana (de 0 a 2 años), dispraxias,
          dificultades de regulación.
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
