import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Card: React.FC<any> = ({ title, text }) => {
  return (
    <div className="w-56 h-44 p-2 border-white border rounded-sm">
      <h2 className="text-white font-semibold text-lg">{title}</h2>
      <p className="text-white text-sm">{text}</p>
    </div>
  );
};

export default function Landing() {
  return (
    <div className="w-full min-h-screen bg-yellow-600">
      {/** Header */}
      <div className="w-full flex justify-center align-middle">
        <div className="flex flex-col">
          <h1 className="text-white mt-10 text-2xl font-bold leading-tight">
            <Link href="/"> Jack O'Brien</Link>
          </h1>
        </div>
      </div>

      {/** Logos */}
      <div className="w-full flex justify-center gap-4 mt-10 text-lg">
        <div className="text-white">
          <Link href="https://twitter.com/thejackobrien" passHref>
            <a>
              <FaTwitter type="link" className="cursor-pointer" />
            </a>
          </Link>
        </div>
        <div className="text-white">
          <Link href="https://github.com/jfobrien29" passHref>
            <a>
              <FaGithub type="link" className="cursor-pointer" />
            </a>
          </Link>
        </div>
        <div className="text-white">
          <Link
            href="https://www.linkedin.com/in/jack-o-brien-53bbaa105/"
            passHref
          >
            <a>
              <FaLinkedin type="link" className="cursor-pointer" />
            </a>
          </Link>
        </div>
      </div>

      {/** Cards */}
      <div className="w-full flex justify-center gap-4 mt-16">
        <Card
          title="OnePager"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
        />
        <Card
          title="Google"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
        />
        <Card
          title="IBM"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
        />
      </div>

      {/** Footer */}
      <div className="w-full flex justify-center gap-4 mt-16">
        <h3 className="text-white">Thanks</h3>
      </div>
    </div>
  );
}
