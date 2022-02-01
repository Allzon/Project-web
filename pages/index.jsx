import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LoginForm from "./components/loginForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head></Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.main_content}>
          <h1>Seu bem estar é o nosso objetivo</h1>
          <Image src="/home.png" width={250} height={250} />
        </div>
        <div className={styles.side_content}>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
