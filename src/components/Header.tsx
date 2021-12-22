import Link from 'next/link';
import React from 'react';

const HeaderLink: React.FC<any> = ({ href, text }) => {
  return (
    <Link href={href} passHref>
      <a className="font-semibold text-sm md:text-md">{text}</a>
    </Link>
  );
};

const HeaderInternalLink: React.FC<any> = ({ href, text }) => {
  return (
    <Link href={href} passHref>
      <a className="font-semibold bg-white hover:bg-slate-200 text-slate-800 text-sm md:text-md p-2 rounded-md">
        {text}
      </a>
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
        <HeaderInternalLink href="/dashboard" text="Dashboard" />
      </div>
    </nav>
  </header>
);

export default Header;
