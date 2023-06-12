import style from './fecha.module.css';
import icons from '../../assets/icons/index';

export default function Fecha({ children }) {
  return (
    <div className={style.container}>
      <div className={style.fecha}>
        <img src={icons.calendar} alt="calendario" />
        <span className={style.fecha__text}>{children}</span>
      </div>
    </div>
  );
}
