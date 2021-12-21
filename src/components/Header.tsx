import { TWITTER_LINK } from '@/utils/constants';
import Link from 'next/link';
import React from 'react';

const HeaderLink: React.FC<any> = ({ href, text, isExternal }) => {
  if (isExternal) {
    return (
      <a
        href={href}
        className="font-semibold text-sm md:text-md"
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </a>
    );
  }

  return (
    <Link href={href} passHref>
      <a className="font-semibold text-sm md:text-md">{text}</a>
    </Link>
  );
};

const Header: React.FC = () => (
  <header className="w-full mb-6 md:mb-16 text-white z-50">
    <nav className="max-w-1030 flex justify-between mx-auto py-4 px-2 items-center">
      <h2 className=" text-2xl font-bold leading-tight">
        <Link href="/">Text Reflect</Link>
      </h2>
      <div className="flex gap-4 md:gap-8 items-center">
        <HeaderLink href="/about" text="About" />
      </div>
    </nav>
  </header>
);

export default Header;
