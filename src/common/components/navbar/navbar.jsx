import { NavLink } from 'react-router';
import { useFavorites } from '../../../features/favorites/hooks/use-favorites';
import styles from './navbar.module.css';

export function Navbar() {
  const { favorites } = useFavorites();

  return (
    <header className={styles.navbar}>
      <div className={styles.content}>
        <NavLink to="/" className={styles.logo}>
          Portal <span>Rick & Morty</span>
        </NavLink>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
            end
          >
            Personajes
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
          >
            Favoritos{' '}
            {favorites.length > 0 && (
              <span className={styles.badge}>({favorites.length})</span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
