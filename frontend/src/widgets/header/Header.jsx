import { Link } from "react-router"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <div className={styles.headerBox}>
      <div className={styles.logo}>
        <Link to="/home">
          <img src="https://fashionweek.gt/wp-content/uploads/2022/07/dummy-logo.png" alt="temp logo" />
        </Link>
        <p>TreshHub</p>
      </div>
        
      <div className={styles.userProfile}>
        <div className={styles.userImg}></div>
        <p>Jon Doe</p>
      </div>
        

    </div>
  )
}
