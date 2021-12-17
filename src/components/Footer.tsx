import React from 'react';
import LogoLinks from './LogoLinks';

const Footer: React.FC = () => (
  <footer className="w-full flex flex-col justify-center items-center gap-2 mt-16 mb-4 text-white ">
    <div className="flex gap-4 text-xs"></div>
    <LogoLinks />
    <p className="text-xs text-right">
      <a href="https://www.groovingagainstleukemia.com/">
        Grooving Against Leukemia
      </a>
    </p>
    <h2 className="text-xs">Jack O&apos;Brien 2021</h2>
  </footer>
);

export default Footer;
