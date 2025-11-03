import Head from 'next/head';
import styles from '../style.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Organomics</title>
        <meta name="description" content="About the Organomics directory project." />
      </Head>
      <main className={styles.container}>
        <h1>About Organomics</h1>
        <p>
          Organomics is a modern, searchable, filterable directory of integrations and resources for organizational economics and telecom operations. Built with Next.js and designed for easy deployment to Cloudflare Pages, Vercel, or any static host.
        </p>
      </main>
    </>
  );
}
