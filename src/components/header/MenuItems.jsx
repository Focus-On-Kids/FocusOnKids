import { useState } from 'react';

import { Link } from 'react-router-dom';

import menuLinks from './menuLinks';
import icons from '../../assets/icons';
import logos from '../../assets/logo';
import style from './menuDesktop.module.css';

export default function MenuItems() {
  const [subMenu, setSubMenu] = useState(false);

  const toggleSubMenu = (subMenues) => {
    setSubMenu(subMenues);
    if (subMenues.id === subMenu.id) {
      setSubMenu(null);
    } else {
      setSubMenu(subMenues);
    }
  };

  return (
    <section className={style.header__contenido__desktop}>
      <div className={style.desktop__container}>
        <div className={style.header__desktop__logo}>
          <Link to="/">
            <img src={logos.logoPNG} alt="logo" />
          </Link>
        </div>

        <div className={style.header__desktop__iconos}>
          <div>
            <img
              className={style.iconos__lupa}
              src={icons.lupaB}
              alt="buscar"
            />
          </div>
          <div>
            <img
              className={style.iconos__bandera}
              src={icons.bandera}
              alt="bandera argentina"
            />
          </div>
        </div>
      </div>

      <nav className={style.header__menu__desktop}>
        <ul>
          {menuLinks.map((item) => (
            //crea <li> con sus links
            <li
              key={item.id}
              onClick={
                item.subMenu
                  ? () => {
                      toggleSubMenu(item);
                    }
                  : null
              }
            >
              {/*si submenu = true lo crea  */}
              {item.subMenu ? (
                <div className={style.menu__dropdown}>
                  <span>{item.title}</span>
                  <img
                    className={style.menu__chevron}
                    src={icons.chevronB}
                    alt="drop menu"
                  />
                </div>
              ) : (
                //si no hay sub menu, crea el link
                <Link to={item.href}>{item.title}</Link>
              )}
            </li>
          ))}
        </ul>
        <ul className={style.dropdown__servicios__desktop}>
          {!subMenu
            ? null
            : subMenu.subMenu.map((menu) => (
                <li key={menu.id}>
                  <p className={style.color__links}>
                    <Link to={menu.href}>{menu.title}</Link>
                  </p>
                </li>
              ))}
        </ul>
      </nav>
    </section>
  );
}
