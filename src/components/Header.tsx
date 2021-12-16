import Link from 'next/link';
import React from 'react';
import LogoLinks from './LogoLinks';

const HeaderLink: React.FC<any> = ({ href, text }) => (
  <Link href={href} passHref>
    <a className="text-white font-semibold text-lg">{text}</a>
  </Link>
);

const Header: React.FC = () => {
  return (
    <header className="w-full mb-2 md:mb-16">
      <nav className="max-w-1030 flex justify-between mx-auto py-4 px-2 items-baseline md:items-center">
        <h1 className="text-white text-2xl font-bold leading-tight">
          <Link href="/">Jack O'Brien</Link>
        </h1>
        <div className="flex gap-2 md:gap-8 items-center">
          <HeaderLink href="/blog" text="Blog" />
          <HeaderLink href="/about" text="About" />
          <LogoLinks />
        </div>
      </nav>
    </header>
  );
};

export default Header;
