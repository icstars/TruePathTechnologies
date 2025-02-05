import Header from "../../widgets/header/Header";
import { Outlet, useLocation } from "react-router";
import Navbar from "../../widgets/navbar/Navbar";
import styles from "./Layout.module.css";
import Home from "../home/Home";
import Logo from "../../widgets/logo/Logo";

export default function Layout() {
  const currentLocation = useLocation();
  console.log(currentLocation.pathname);

  return currentLocation.pathname === "/" ? (
    <Home />
  ) : (
    <div className={styles.layoutBox}>
      <nav className={styles.navbar}>
        <div className={styles.logoVisibility}>
          <Logo />
        </div>
        <Navbar />
      </nav>
      <div className={styles.content}>
        <Header />
        <div className={styles.pages}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
