import { Link } from 'react-router';
import styles from './Navbar.module.css';

export default function Navbar() {
  const links = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/chat', label: 'AI Assistant' },
    { path: '/directory', label: 'Directory' },
    { path: '/resources', label: 'Resources' },
    //{ path: '/home', label: 'Home' },
  ];

  return (
    <div className={styles.navbarBox}>
      {links.map((link, index) => (
        <Link className={styles.link} key={index} to={link.path}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}
