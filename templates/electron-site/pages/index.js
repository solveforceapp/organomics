import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Electron App</title>
        <meta name="description" content="Desktop app built with Electron" />
      </Head>
      <main className="container">
        <h1>Electron</h1>
        <p>This is the web site for the Electron desktop app.</p>
        <ul>
          <li>Download builds (GitHub Releases)</li>
          <li>Docs and support links</li>
        </ul>
      </main>
    </>
  );
}
