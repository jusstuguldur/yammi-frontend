import Head from 'next/head';

export default function ComingSoon() {
  return (
    <div className="container">
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Our website is coming soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Тун удахгүй</h1>
        <p>Шинэчлэлт хийгдэж буй тул түр хүлээнэ үү!</p>
      </main>

      <footer>
        <p>ITech © {new Date().getFullYear()}
        </p>
      </footer>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 0 1rem;
        }

        main {
          padding: 5rem 0;
          text-align: center;
        }

        h1 {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        p {
          font-size: 1.5rem;
          line-height: 1.5;
        }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid #eaeaea;
        }
      `}</style>
    </div>
  );
}
