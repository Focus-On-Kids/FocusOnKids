//react hooks
import { useState } from 'react';

// imagenes
import icons from '../../assets/icons';
import logos from '../../assets/logo';

// estilos
// import style from './header.module.css';
import style from './menuMobil.module.css';

export default function MenuMobil() {
  // manejo de estado del menu hamburguesa
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowSubMenu(false);
  };

  // manejo de estdo de submenu
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  // el sub menus se deven cerrar caundo se cierra su menu anterior

  return (
    <section className={style.header__position}>
      <div className={style.header__contenido__mobil}>
        <div className={style.nav__dropdown}>
          <div onClick={toggleMenu}>
            {showMenu ? (
              <img src={icons.close} alt="cierra menu" />
            ) : (
              <img src={icons.open} alt="abremenu" />
            )}
          </div>
        </div>

        <div className={style.header__mobil__logo}>
          <img src={logos.logoPNG} alt="logo" />
        </div>

        <div className={style.header__mobil__bandera}>
          <img src={icons.bandera} alt="arg" />
        </div>
      </div>

      <nav>
        {showMenu && (
          <ul className={style.nav__dropdown__options}>
            <li className={style.nav__items} id="list">
              <img src={icons.bandera} alt="arg" />
            </li>
            <li>
              <a href="#">ACERCA DE</a>
            </li>
            <li>
              <a href="#">SOBRE BELÉN</a>
            </li>
            <li onClick={toggleSubMenu}>
              <div className={style.dropdown__servicios}>
                <span>SERVICIOS</span>
                <img
                  className={style.menu__chevron}
                  src={icons.chevron}
                  alt="drop menu"
                />
              </div>
              {showSubMenu && (
                <ul className={style.submenu}>
                  <li className={style.submenu__list}>
                    <a href="#">Evaluaciones</a>
                  </li>
                  <li className={style.submenu__list}>
                    <a href="#">Tratamientos intensivos</a>
                  </li>
                  <li className={style.submenu__list}>
                    <a href="#">Supervisiones</a>
                  </li>
                  <li className={style.submenu__list}>
                    <a href="#">Formaciones</a>
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
                  id="buscar"
                  placeholder="Buscar..."
                />
                <img
                  className={style.buscar__lupa}
                  src={icons.lupa}
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
