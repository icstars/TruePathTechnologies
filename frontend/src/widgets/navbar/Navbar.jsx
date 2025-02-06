import { NavLink } from 'react-router';
import styles from './Navbar.module.css';

const links = [
    { path: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/chat', label: 'AI Assistant', icon: 'forum'  },
    { path: '/directory', label: 'Directory', icon: 'person_search'  },
    { path: '/resources', label: 'Resources', icon: 'bookmark'  },
    //{ path: '/home', label: 'Home' },
  ];

export default function Navbar() {
  return (
    <div className={styles.navbarBox}>
      {links.map((link, index) => (
        <NavLink  className={({ isActive }) => isActive ? styles.activeLink : styles.link} key={index} to={link.path}>
          <i className="material-symbols-outlined">{link.icon}</i>
          <span className={styles.navBarLinkTe}>{link.label}</span>
        </NavLink>
      ))}
    </div>
  );
}
