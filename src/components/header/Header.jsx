import style from './header.module.css';
import iconos from '../../assets/icons';
import MenuMobil from './MenuMobil';
import MenuDesktop from './MenuDesktop';
import useResize from '../../hooks/useResize';

export function Header() {
  const { screenSize } = useResize();

  return (
    <header className={style.header}>
      <section className={style.header__info}>
        <a href="#">
          Si estas fuera de Santa Fe - Arg. Contactame{' '}
          <img src={iconos.cv} alt="cv" />
          <img src={iconos.pin} alt="pin" />
        </a>
      </section>

      {/* hacer un solo componente menu!!! */}
      {screenSize < 768 ? <MenuMobil /> : <MenuDesktop />}
    </header>
  );
}
