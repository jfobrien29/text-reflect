import Head from 'next/head';

import styles from '../styles/Home.module.css';

const BaseLayout: React.FC = ({children}) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Jack O'Brien</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
              {children}
          </main>
    
          <footer className={styles.footer}>
            <p>Reach out!</p>
            <p>
              <a href="https://www.planetary.org/worlds/pale-blue-dot">
                Pale blue dot.
              </a>
            </p>
          </footer>
        </div>
      );
}

export default BaseLayout;