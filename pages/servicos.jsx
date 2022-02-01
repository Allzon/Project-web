import Head from "next/head";
import Image from "next/image";
import styles from "../styles/servicos.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default () => {
  return (
    <div className={styles.container}>
      <Head></Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.main_content}>
          <h1>Services Category</h1>
          <Image src="/servicos.png" width={700} height={900} />
        </div>
        <div className={styles.side_content}>
          <div className={styles.side_content_item}>
            <Image src="/ortho.jpg" width={100} height={100} />
            <div>
              <h3>Orthopaedic</h3>
              <p>
                Provide an explanation of the general profile of the products we
                have. Arrange information about our products/services in a
                systematic and fact-based manner. Also, express our success
                stories and also the pride in the products/services that are
                done.
              </p>
            </div>
          </div>
          <div className={styles.side_content_item}>
            <Image src="/pedia.jpg" width={100} height={100} />
            <div>
              <h3>Pediatric</h3>
              <p>
                Provide an explanation of the general profile of the products we
                have. Arrange information about our products/services in a
                systematic and fact-based manner. Also, express our success
                stories and also the pride in the products/services that are
                done.
              </p>
            </div>
          </div>
          <div className={styles.side_content_item}>
            <Image src="/core.jpg" width={100} height={100} />
            <div>
              <h3>Heart & Vascular</h3>
              <p>
                Provide an explanation of the general profile of the products we
                have. Arrange information about our products/services in a
                systematic and fact-based manner. Also, express our success
                stories and also the pride in the products/services that are
                done.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
