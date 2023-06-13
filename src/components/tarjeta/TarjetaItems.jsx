import NOVEDADES from './index';
import style from './tarjeta.module.css';

export default function TarjetaItems() {
  return (
    <>
      <div className={style.card}>
        <div className={style.card__img}>
          {NOVEDADES.map((img) => img.imagen)}
        </div>
        <div className={style.card__fecha}>
          {NOVEDADES.map((date) => date.fecha)}
          <div className={style.card__lugar}>
            {NOVEDADES.map((place) => place.lugar)}
            <div>
              <span className={style.arroba}>@ </span>
              <span className={style.contacto}> CONTACTAME</span>
            </div>
          </div>
        </div>
      </div>
      <p className={style.card__info}>{NOVEDADES.map((info) => info.info)}</p>
    </>
  );
}
