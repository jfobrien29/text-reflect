import React from 'react';
import BaseLayout from '@/containers/BaseLayout';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Card: React.FC<any> = ({ title, text }) => {
  return (
    <div className="group w-3/4 md:w-56 h-64 p-3 border-white border rounded-sm hover:bg-white hover:shadow-lg transform duration-500 ease-in-out hover:-translate-y-1">
      <h2 className="text-white font-semibold text-lg group-hover:text-orange">
        {title}
      </h2>
      <p className="text-white text-sm group-hover:text-orange">{text}</p>
    </div>
  );
};

const Landing: React.FC<any> = () => {
  return (
    <BaseLayout>
      <div className="bg-orange">
        {/** Header */}
        <div className="w-full flex justify-center align-middle">
          <div className="flex flex-col">
            <h1 className="text-white mt-16 text-2xl font-bold leading-tight">
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
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 mt-8 md:mt-16">
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
      </div>
    </BaseLayout>
  );
};

export default Landing;
