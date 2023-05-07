import { useState } from 'react';
import iconos from '../../assets/icons';
import logos from '../../assets/logo';
import style from './header.module.css';

export default function MenuDesktop() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <section className={style.header__contenido__desktop}>
      <div className={style.desktop__container}>
        <div className={style.header__desktop__logo}>
          <img src={logos.logoPNG} alt="logo" />
        </div>

        <div className={style.header__desktop__iconos}>
          {/* descargar lupa color negro para aca */}
          <img className={style.iconos__lupa} src={iconos.lupaB} alt="buscar" />
          <img
            className={style.iconos__bandera}
            src={iconos.bandera}
            alt="bandera argentina"
          />
        </div>
      </div>

      <nav className={style.header__menu__desktop}>
        <ul>
          <li>
            <a href="#">ACERCA DE</a>
          </li>
          <li>
            <a href="#">SOBRE BELÉN</a>
          </li>
          <li onClick={toggleSubMenu}>SERVICIOS&#x2304;</li>
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
              <a href="#">Charlas abiertas a la comunidad</a>
            </li>
            <li>
              <a href="#">Sesiones de Colaboración</a>
            </li>
            <li>
              <a href="#">Supervisión</a>
            </li>
            <li>
              <a href="#">Tratamientos Intensivos</a>
            </li>
            <li>
              <a href="#">Grupo de Estudios</a>
            </li>
            <li>
              <a href="#">Supervisiones</a>
            </li>
          </ul>
        )}
      </nav>
    </section>
  );
}
