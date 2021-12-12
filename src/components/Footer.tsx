import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center gap-2 mt-16 mb-4">
      <h2 className="text-white text-xs">Jack O'Brien 2021</h2>
      <p className="text-white text-xs">
        <a>jackob.eth</a>
      </p>
      {/* <p className="text-white text-xs">
        <Link href="/listening">
          <a>Now Playing</a>
        </Link>
      </p> */}
    </footer>
  );
};

export default Footer;
