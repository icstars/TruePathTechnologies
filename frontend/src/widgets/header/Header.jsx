import styles from "./Header.module.css"
import UserProfileCard from "../userProfileCard/UserProfileCard"
import Logo from "../logo/Logo"

export default function Header() {
  return (
    <div className={styles.headerBox}>
      <div className={styles.logoVisibility}>
        <Logo/>
      </div>
      <div className={styles.userProfile}>
        <UserProfileCard/>
      </div>
    </div>
  )
}
