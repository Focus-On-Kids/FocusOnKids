import { useState } from 'react';
import iconos from '../../assets/icons';
import logos from '../../assets/logo';
import style from './header.module.css';

export default function MenuMobil() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <section className={style.header__position}>
      <div className={style.header__contenido__mobil}>
        <div className={style.nav__dropdown}>
          <div onClick={toggleMenu}>
            {showMenu ? (
              <img src={iconos.close} alt="cierra menu" />
            ) : (
              <img src={iconos.open} alt="abremenu" />
            )}
          </div>
        </div>

        <div className={style.header__mobil__logo}>
          <img src={logos.logoPNG} alt="logo" />
        </div>

        <div className={style.header__mobil__bandera}>
          <img src={iconos.bandera} alt="arg" />
        </div>
      </div>

      <nav>
        {showMenu && (
          <ul className={style.nav__dropdown__options}>
            <li>
              <img src={iconos.bandera} alt="arg" />
            </li>
            <li>
              <a href="#">ACERCA DE</a>
            </li>
            <li>
              <a href="#">SOBRE BELÉN</a>
            </li>
            <li className={style.dropdown__servicios} onClick={toggleSubMenu}>
              {/* <div onClick={toggleSubMenu}>SERVICIOS &#x2304;</div> */}
              SERVICIOS &#x2304;
              {showSubMenu && (
                <ul className={style.submenu}>
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
            </li>
            <li>
              <a href="#">NOVEDADES</a>
            </li>
            <li>
              <a href="#">CONTACTO</a>
            </li>
            <li className={style.buscar}>
              <div className={style.buscar__container}>
                <input
                  className={style.buscar__input}
                  type="text"
                  name="lupa"
                  id=""
                  placeholder="Buscar..."
                />
                <img
                  className={style.buscar__lupa}
                  src={iconos.lupa}
                  alt="buscar"
                />
              </div>
            </li>
          </ul>
        )}
      </nav>
    </section>
  );
}
