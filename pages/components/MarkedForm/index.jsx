import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";

export default () => {
  const [date, setDate] = useState(null);
  const [email, setEmail] = useState(null);
  const [especialidade, setEspecialidade] = useState(null);
  const [name, setName] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail(localStorage.getItem("user"));

    const response = await axios.post("http://localhost:3000/api/sendmail", {
      date: date,
      email: email,
      especialidade: especialidade,
      name: name,
    });
    console.log(response);
    if (response.data.status === "success") {
      alert(response.data.message);
    } else if (response.data.status === "fail") {
      alert(response.data.message);
    }
  };

  return (
    <form className={styles.form}>
      <h3 className={styles.title}>Bem vindo</h3>
      <h5 className={styles.subtitle}>Marque sua consulta</h5>
      <div className={styles.formGroup}>
        <label className={styles.label} for="data">
          Data
        </label>
        <input
          id="data"
          className={styles.input}
          type="text"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          placeholder="dd/mm/aaaa"
        />

        <label className={styles.label}>Especialidade</label>
        <select
          className={styles.input}
          type="select"
          onChange={(e) => {
            setEspecialidade(e.target.value);
          }}
        >
          <option>Ortopedia</option>
          <option>Pediatria</option>
          <option>Cardiologia</option>
        </select>
        <label className={styles.label}>Medico(a)</label>
        <select
          className={styles.input}
          type="select"
          onChange={(e) => {
            setName(e.target.value);
          }}
        >
          <option>Dr. João</option>
          <option>Dra. Maria</option>
          <option>Dr. Pedro</option>
        </select>
        <button
          className={styles.button}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Marcar
        </button>
      </div>
    </form>
  );
};
