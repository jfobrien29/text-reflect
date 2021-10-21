import Head from 'next/head';

import BaseLayout from '@/containers/BaseLayout';
import styles from '../styles/Home.module.css';

const MainLayout: React.FC<any> = ({ title = '', children }) => {
  return (
    <BaseLayout>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>Reach out!</p>
        <p>
          <a href="https://www.planetary.org/worlds/pale-blue-dot">
            Pale blue dot.
          </a>
        </p>
      </footer>
    </BaseLayout>
  );
};

export default BaseLayout;
