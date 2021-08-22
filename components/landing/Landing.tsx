import Head from "next/head";
import Button from "../button/Button";
import styles from "./Landing.module.scss";

export default function Landing() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Vercel Landing</title>
        <meta name="description" content="by LJtech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          <div className={styles.animation__develop}>Develop.</div>
          <div className={styles.animation__preview}>Preview.</div>
          <div className={styles.animation__ship}>Ship.</div>
        </h1>
      </div>
      <div className={styles.buttons}>
        <Button href="/" title="Start Deploying" />
        <Button href="/" layout="outline" title="Get a Demo" />
      </div>
      <h2 className={styles.description}>
        Vercel combines the best developer experience with an obsessive focus on
        end-user performance. <br /> Our platform enables frontend teams to do
        their best work.
      </h2>
    </div>
  );
}
