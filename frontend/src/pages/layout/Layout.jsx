import Header from '../../widgets/header/Header'
import { Outlet } from 'react-router'
import Navbar from '../../widgets/navbar/Navbar'
import styles from './Layout.module.css'

export default function Layout() {
  return (
    <div className={styles.layoutBox}>
      <Header />
      <div className={styles.content}>
      <nav className={styles.navbar}>
        <Navbar />
      </nav>
      <div className={styles.pages}>
        <Outlet />
      </div>
      </div>

    </div>
  )
}
