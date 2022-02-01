import Link from "next/link";
import styles from "./styles.module.css";

export default () => {
  const localStorageToken = () => {
    try {
      const token = localStorage.getItem("token");
      if (token == "access_token") {
        return true;
      }
    } catch (e) {
      return false;
    }
  };

  const exit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  return (
    <div className={styles.Bar}>
      <Link href="/">
        <a>
          <h1>Clínica Viva Bem</h1>
        </a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/servicos">
        <a>Serviços</a>
      </Link>
      <Link href="/contato">
        <a>Contato</a>
      </Link>
      {!localStorageToken() ? (
        <button className={styles.button}>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </button>
      ) : (
        <button className={styles.button} onClick={exit}>
          <Link href="/">
            <a>sair</a>
          </Link>
        </button>
      )}
    </div>
  );
};
