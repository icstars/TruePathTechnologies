import Header from '../../widgets/header/Header'
import { Outlet, useLocation } from 'react-router'
import Navbar from '../../widgets/navbar/Navbar'
import styles from './Layout.module.css'
import Home from '../home/Home'

export default function Layout() {
  const currentLocation = useLocation()
  console.log(currentLocation.pathname);
  
  return (
currentLocation.pathname === "/" 
  ? <Home />
  :
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
