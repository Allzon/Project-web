import Head from "next/head";
import Image from "next/image";
import styles from "../styles/contato.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head></Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.main_content}>
          <h1>contato</h1>
          <p>
            Write down your hopes for the future of your company. Don't forget
            to thank the company for the opportunity and convince related
            parties to support your company.
          </p>
          <h3>Endreço</h3>
          <p>123 Anywhere St., Any City, ST 12345</p>
          <h3>Telefone</h3>
          <p>+123-456-7890</p>
          <h3>Email</h3>
          <p>clinicavivabem@gmail.com</p>
        </div>
        <div className={styles.main_image}>
          <Image src="/mapa.png" width={500} height={500} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
