import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const LogoLink: React.FC<any> = ({ href, icon }) => (
  <div className="text-white">
    <a
      className="cursor-pointer"
      type="link"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </a>
  </div>
);

const LogoLinks: React.FC = () => (
  <div className="flex gap-2 md:gap-4">
    <LogoLink href="https://twitter.com/thejackobrien" icon={<FaTwitter />} />
    <LogoLink href="https://github.com/jfobrien29" icon={<FaGithub />} />
    <LogoLink
      href="https://www.linkedin.com/in/jack-o-brien-53bbaa105/"
      icon={<FaLinkedin />}
    />
  </div>
);

export default LogoLinks;
