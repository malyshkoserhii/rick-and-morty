import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.Nav}>
      <ul className={s.NavList}>
        <li className={s.NavItem}>
          <NavLink
            exact
            to="/"
            className={s.NavLink}
            activeClassName={s.ActiveLink}
          >
            Caharacters
          </NavLink>
        </li>
        <li className={s.NavItem}>
          <NavLink
            to="/episodes"
            className={s.NavLink}
            activeClassName={s.ActiveLink}
          >
            Episodes
          </NavLink>
        </li>
        <li className={s.NavItem}>
          <NavLink
            to="/location"
            className={s.NavLink}
            activeClassName={s.ActiveLink}
          >
            Location
          </NavLink>
        </li>
        <li className={s.NavItem}>
          <NavLink
            to="/watch"
            className={s.NavLink}
            activeClassName={s.ActiveLink}
          >
            Watch List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
