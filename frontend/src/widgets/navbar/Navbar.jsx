import { NavLink } from 'react-router';
import styles from './Navbar.module.css';

export default function Navbar() {
  const links = [
    { path: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/chat', label: 'AI Assistant', icon: 'forum'  },
    { path: '/directory', label: 'Directory', icon: 'person_search'  },
    { path: '/resources', label: 'Resources', icon: 'bookmark'  },
    //{ path: '/home', label: 'Home' },
  ];

  return (
    <div className={styles.navbarBox}>
      {links.map((link, index) => (
        <NavLink  className={({ isActive }) => isActive ? styles.activeLink : styles.link} key={index} to={link.path}>
          <i className="material-symbols-outlined">{link.icon}</i>
          <span className={styles.navBarLinkText}>{link.label}</span>
        </NavLink>
      ))}
    </div>
  );
}
