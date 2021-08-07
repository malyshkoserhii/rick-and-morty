import { NavLink } from 'react-router-dom';
import ROUTE from '../../helpers/routes';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.Nav}>
      <ul className={s.NavList}>
        <li className={s.NavItem}>
          <NavLink
            exact
            to={ROUTE.CHARACTERS}
            className={s.NavLink}
            activeClassName={s.ActiveLink}
          >
            Caharacters
          </NavLink>
        </li>
        <li className={s.NavItem}>
          <NavLink
            to={ROUTE.EPISODES}
            className={s.NavLink}
            activeClassName={s.ActiveLink}
          >
            Episodes
          </NavLink>
        </li>
        <li className={s.NavItem}>
          <NavLink
            to={ROUTE.LOCATION}
            className={s.NavLink}
            activeClassName={s.ActiveLink}
          >
            Location
          </NavLink>
        </li>
        <li className={s.NavItem}>
          <NavLink
            to={ROUTE.WATCH_LIST}
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
