import { useNavigate } from "react-router";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard"); // Navigate to the '/dashboard' route
  };
  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <div className={styles.inputWrapper}>
          <input
            type="email"
            placeholder="Email Address"
            className={styles.inputField}
            required
          />
          <i className="material-symbols-outlined">mail</i>
        </div>

        <div className={styles.inputWrapper}>
          <input
            type="password"
            placeholder="Password"
            className={styles.inputField}
            required
          />
          <i className="material-symbols-outlined">lock</i>
        </div>
        <a
          href="https://account.microsoft.com/account/manage-my-account"
          className="forgotPassLink"
        >
          Forgot Password?
        </a>

        <button onClick={handleClick} className={styles.loginButton}>
          Log In
        </button>
      </form>
    </div>
  );
}
