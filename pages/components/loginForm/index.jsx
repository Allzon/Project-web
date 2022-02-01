import styles from "./styles.module.css";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import MarkedForm from "../MarkedForm";

export default () => {
  const [stateEmail, setStateEmail] = useState(null);
  const [statePassword, setStatePassword] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/api/login", {
      email: stateEmail,
      password: statePassword,
    });
    if (response.data.status === "success") {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.email));
      window.location.href = "/";
    } else if (response.data.status === "fail") {
      alert(response.data.message);
    }
  };
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
  return (
    <div className={styles.container}>
      {localStorageToken() ? (
        <MarkedForm />
      ) : (
        <form className={styles.form}>
          <h3 className={styles.title}>Bem vindo</h3>
          <h5 className={styles.subtitle}>Faça seu login</h5>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              onChange={(e) => setStateEmail(e.target.value)}
            />
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              onChange={(e) => setStatePassword(e.target.value)}
            />
            <button className={styles.button} onClick={(e) => handleSubmit(e)}>
              Login
            </button>
            <Link href="/register">
              <button className={styles.button}>Register</button>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};
