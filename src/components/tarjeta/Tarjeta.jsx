import Imagen from '../img/Imagen';
import Fecha from './Fecha';
// import TarjetaItems from './TarjetaItems';
import style from './tarjeta.module.css';

export default function Tarjeta() {
  return (
    <div className={style.card__container}>
      {/* <TarjetaItems /> */}
      <div className={style.card}>
        <div className={style.card__img}>
          <Imagen src="src/assets/novedades/novedad2.svg" alt="novedad" />
        </div>
        <div className={style.card__fecha}>
          <Fecha>Desde 20.06.23</Fecha>
          <div className={style.card__lugar}>
            <span className={style.big}>ROSARIO!</span>
            <div>
              <span className={style.arroba}>@ </span>
              <span className={style.contacto}> CONTACTAME</span>
            </div>
          </div>
        </div>
      </div>
      <p className={style.card__info}>
        5 Encuentros. <br />
        Curso destinado a profesionales de Terapia Ocupacional. <br />
        Online o presencial.
      </p>
      <div className={style.componente}>
        <span>VER FECHAS Y LUGAR ^</span>
      </div>
    </div>
  );
}
