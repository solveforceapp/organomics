import Head from 'next/head';
import styles from '../style.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Organomics</title>
        <meta name="description" content="Contact the Organomics team." />
      </Head>
      <main className={styles.container}>
        <h1>Contact</h1>
        <p>
          For questions, feedback, or partnership inquiries regarding the Organomics directory, please email <a href="mailto:directory@solveforce.com">directory@solveforce.com</a>.
        </p>
      </main>
    </>
  );
}
