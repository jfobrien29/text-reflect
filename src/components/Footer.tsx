import { ROUTES, TWITTER_LINK } from '@/utils/constants';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full flex flex-col justify-center items-center gap-3 mt-16 mb-4 text-white text-xs">
    <p>
      <Link href={ROUTES.BLOG} passHref>
        <a>Blog</a>
      </Link>
    </p>
    <h2>
      <a href={TWITTER_LINK} target="_blank" rel="noreferrer">
        Jack O'Brien 2021
      </a>
    </h2>
  </footer>
);

export default Footer;
