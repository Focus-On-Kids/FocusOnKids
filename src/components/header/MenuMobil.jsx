//  react hooks
import { useState } from 'react';
import { Link } from 'react-router-dom';
// imagenes
import icons from '../../assets/icons';
import logos from '../../assets/logo';
// estilos css
import style from './menuMobil.module.css';
// componetes
import menuLinks from './menuLinks';

export default function MenuMobil() {
  // manejo de estado del menu hamburguesa
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = (menues) => {
    setShowMenu(menues);
    if (menues.id === showMenu.id) {
      setShowMenu(null);
    } else {
      setShowMenu(menues);
    }
    // setShowMenu(!showMenu);
    setShowSubMenu(false);
  };

  // manejo de estdo de submenu
  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleSubMenu = (subMenues) => {
    setShowSubMenu(subMenues);
    if (subMenues.id === showSubMenu.id) {
      setShowSubMenu(null);
    } else {
      setShowSubMenu(subMenues);
    }
    // setShowSubMenu(!showSubMenu);
  };

  return (
    <section className={style.position}>
      <div className={style.contenido__mobil}>
        <div className={style.nav__dropdown}>
          <div onClick={toggleMenu}>
            {showMenu ? (
              <img src={icons.close} alt="cierra menu" />
            ) : (
              <img src={icons.open} alt="abremenu" />
            )}
          </div>
        </div>

        <div className={style.mobil__logo}>
          <Link to="/">
            <img src={logos.logoPNG} alt="logo" />
          </Link>
        </div>

        <div className={style.mobil__bandera}>
          <img src={icons.bandera} alt="arg" />
        </div>
      </div>

      <nav className={style.animate}>
        {showMenu && (
          <ul className={style.nav__dropdown__options}>
            {menuLinks.map((link) => (
              <li key={link.id} className={style.nav__items}>
                {link.subMenu ? (
                  <>
                    <div
                      className={style.dropdown__servicios}
                      onClick={toggleSubMenu}
                    >
                      <span>{link.title}</span>
                      <img
                        className={
                          showSubMenu
                            ? style.menu__chevron__rotate
                            : style.menu__chevron
                        }
                        src={icons.chevron}
                        alt="drop menu"
                      />
                    </div>
                    {showSubMenu && (
                      <ul className={style.submenu}>
                        {link.subMenu.map((subLink) => (
                          <li key={subLink.id} className={style.submenu__list}>
                            <Link to={subLink.href}>{subLink.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={link.href}>{link.title}</Link>
                )}
              </li>
            ))}

            {/*! buscador oculto hasta implementacion */}
            {/* <li className={style.buscar}>
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
            </li> */}
          </ul>
        )}
      </nav>
    </section>
  );
}
