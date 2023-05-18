// hooks
import { useState } from 'react';
// components
// import MenuItems from './MenuItems';
// iconos e imagenes
import icons from '../../assets/icons';
import logos from '../../assets/logo';
// css estilos
// import style from './header.module.css';
import style from './menuDesktop.module.css';

export default function MenuDesktop() {
  // estados del menu desplegable en escritorio
  const [showSubMenu, setShowSubMenu] = useState(false);

  // funciones para mostrar los submues
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  // TODO hacer que se cierren los submenues cauando se cierra el padre, intentar con hover

  return (
    <section className={style.header__contenido__desktop}>
      <div className={style.desktop__container}>
        <div className={style.header__desktop__logo}>
          <img src={logos.logoPNG} alt="logo" />
        </div>

        <div className={style.header__desktop__iconos}>
          <img className={style.iconos__lupa} src={icons.lupaB} alt="buscar" />
          <img
            className={style.iconos__bandera}
            src={icons.bandera}
            alt="bandera argentina"
          />
        </div>
      </div>

      {/* Componente que muetra los links , en proceso */}
      {/* <MenuItems />; */}
      {/* ************************ */}
      <nav className={style.header__menu__desktop}>
        <ul>
          <li>
            <a href="#">ACERCA DE</a>
          </li>
          <li>
            <a href="#">SOBRE BELEN</a>
          </li>
          <li onClick={toggleSubMenu}>
            <div className={style.menu__dropdown}>
              <span>SERVICIOS </span>
              <img
                className={style.menu__chevron}
                src={icons.chevronB}
                alt="drop menu"
              />
            </div>
          </li>
          <li>
            <a href="#">NOVEDADES</a>
          </li>
          <li>
            <a href="#">CONTACTO</a>
          </li>
        </ul>
        {/* menu desplegable de item servicios */}
        {showSubMenu && (
          <ul className={style.dropdown__servicios__desktop}>
            <li>
              <a href="#">Evaluaciones</a>
            </li>
            <li>
              <a href="#">Tratamientos intensivos</a>
            </li>
            <li>
              <a href="#">Supervisiones</a>
            </li>
            <li>
              <a href="#">Formaciones</a>
            </li>
          </ul>
        )}
      </nav>
    </section>
  );
}
