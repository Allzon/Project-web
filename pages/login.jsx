import styles from "../styles/login.module.css";
import Link from "next/link";
import LoginForm from "./components/loginForm";
export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.sideImag}>
        <img src="/login.png" alt="login" />
      </div>
      <div className={styles.containForm}>
        <LoginForm />
      </div>
    </div>
  );
};
