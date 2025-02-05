import LoginForm from "../../widgets/loginForm/LoginForm";
import styles from "./Home.module.css";


export default function Home() {
  return (
    <div className={styles.homeBox}>
      <div className={styles.homeContentBox}>
      <div className={styles.welcomeCard}>
        <h2>ThresHub</h2>
        <h2>Everything you need is here... </h2>
      </div>
      <div className={styles.loginBox}>
        <LoginForm/>
      </div>
      </div>

    </div>
  )
}
