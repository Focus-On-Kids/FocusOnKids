import style from './imagen.module.css';

export default function Imagen({ src, alt, igLive = false, prox = false }) {
  return (
    <picture className={style.container}>
      <div className={style.position}>
        <img className={style.imagen} src={src} alt={alt} />
        {igLive && (
          <div className={style.img__link}>
            <a className={style.link} href="#">
              VER EN INSTAGRAM
            </a>
          </div>
        )}
        {prox && (
          <div className={style.img__link}>
            <span className={style.text}>PROXIMAMENTE</span>
          </div>
        )}
      </div>
    </picture>
  );
}
