import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Home pages</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid
        natus dicta. Necessitatibus hic esse, voluptatem nulla fuga, totam eos
        eius commodi provident dolorem natus, harum molestiae quas nam
        perferendis.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid
        natus dicta. Necessitatibus hic esse, voluptatem nulla fuga, totam eos
        eius commodi provident dolorem natus, harum molestiae quas nam
        perferendis.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>Seeing Ninjas</a>
      </Link>
    </div>
    </>
  );
}