import style from './header.module.css';
import { useState } from 'react';

export default function MenuItems() {
  const menuItems = [
    { label: 'ACERCA DE', url: '#' },
    { label: 'SOBRE BELÉN', url: '#' },
    {
      label: 'SERVICIOS',
      url: '#',
    },
    { label: 'NOVEDADES', url: '#' },
    { label: 'CONTACTO', url: '#' },
  ];

  const subMenuItems = [
    { label: 'Charlas abiertas a la comunidad', url: '#' },
    { label: 'Sesiones de Colaboración', url: '#' },
    { label: 'Tratamientos Intensivos', url: '#' },
    { label: 'Grupo de Estudios', url: '#' },
    {
      label: 'Supervisiones',
      url: '#',
    },
  ];

  const subMenuItems2 = [
    { label: 'Online', url: '#' },
    { label: 'Presencial', url: '#' },
  ];

  const [showSubMenu, setShowSubMenu] = useState(false); 
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  const toggleSubMenu2 = () => {
    setShowSubMenu2(!showSubMenu2);
  };

  return (
    <nav className={style.header__menu__desktop}>
      <ul>
        {menuItems.map((menuItem) => (
          if (menuItem.label === 'SERVICIOS') {

          <li
            key={menuItem.label}
            onClick={() => menuItem.subMenuItems && toggleSubMenu()}
          >
            <a href={menuItem.url}>{menuItem.label}</a>
            {subMenuItems && showSubMenu && (
              <ul className={style.dropdown__servicios__desktop}>
                {subMenuItems.map((subMenuItem) => (
                  <li key={subMenuItem.label}>
                    <a href={subMenuItem.url}>{subMenuItem.label}</a>
                    {subMenuItems2 && showSubMenu2 && (
                      <ul className={style.submenu}>
                        {subMenuItems2.map((subMenuItem2) => {
                          <li key={subMenuItem2.label}>
                            <a href={subMenuItem2.url}>{subMenuItem2.label}</a>
                          </li>;
                        })}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
          } else {

          }
        ))}
      </ul>
    </nav>
  );
}
