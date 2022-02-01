import styles from "../styles/Register.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
export default () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [nascimento, setNascimento] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/api/register", {
      email: email,
      password: password,
      name: name,
      nascimento: nascimento,
    });
    if (response.data.status === "success") {
      alert(response.data.message);
      window.location.href = "/login";
    } else {
      alert(response.data.message);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.sideImag}>
        <img src="/register.png" alt="login" />
      </div>
      <div className={styles.containForm}>
        <div className={styles.headForm}>
          <h1 className={styles.title}>Cria Nova Conta</h1>
          <Link href="/login">
            <p className={styles.title}>
              Já possui uma conta?
              <a> clique aqui</a>
            </p>
          </Link>
        </div>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nome</label>
            <input
              className={styles.input}
              type="nome"
              placeholder="Nome"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label className={styles.label}>Nacimento</label>
            <input
              className={styles.input}
              type="date"
              onChange={(e) => {
                setNascimento(e.target.value);
              }}
            />
            <button className={styles.button} onClick={(e) => handleSubmit(e)}>
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
