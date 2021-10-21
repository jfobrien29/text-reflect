import BaseLayout from '@/containers/BaseLayout';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <BaseLayout>
      <h1 className={styles.title}>Jack O'Brien</h1>
      <div>
        <h2 className={styles.description}>Co-Founder | Software Engineer</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.mainImage}
            src="/me2.png"
            width="384px"
            height="512px"
            loading="eager"
          ></Image>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.bioContainer}>
          <p>
            This is some information about myself. This is some information
            about myself. This is some information about myself. This is some
            information about myself. This is some information about myself.
            This is some information about myself. This is some information
            about myself. This is some information about myself. This is some
            information about myself. This is some information about myself.
          </p>
          <p>
            This is some information about myself. This is some information
            about myself. This is some information about myself. This is some
            information about myself. This is some information about myself.
            This is some information about myself. This is some information
            about myself. This is some information about myself. This is some
            information about myself. This is some information about myself.
          </p>
          <p>
            This is some information about myself. This is some information
            about myself. This is some information about myself. This is some
            information about myself. This is some information about myself.
            This is some information about myself. This is some information
            about myself. This is some information about myself. This is some
            information about myself. This is some information about myself.
          </p>
        </div>
      </div>
    </BaseLayout>
  );
}
