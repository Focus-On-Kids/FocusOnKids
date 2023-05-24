import style from './imagen.module.css';

export default function Imagen({ src, alt }) {
  return (
    <picture className={style.container}>
      <img className={style.imagen} src={src} alt={alt} />
    </picture>
  );
}
