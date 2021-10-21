import React from 'react';
import Link from 'next/link';

const Card: React.FC<any> = ({ title, text }) => {
  return (
    <div className="w-56 h-44 p-2 border-white border rounded-md">
      <h2 className="text-white font-semibold text-lg">{title}</h2>
      <p className="text-white text-sm">{text}</p>
    </div>
  );
};

export default function Landing() {
  return (
    <div className="w-full h-screen bg-yellow-700">
      {/** Header */}
      <div className="w-full flex justify-center align-middle">
        <div className="flex flex-col">
          <h1 className="text-white mt-10 text-2xl font-bold leading-tight">
            <Link href="/"> Jack O'Brien</Link>
          </h1>
        </div>
      </div>
      {/** Logos */}
      <div className="w-full flex justify-center gap-4 mt-10">
        <h1 className="text-white">Twitter</h1>
        <h1 className="text-white">Github</h1>
        <h1 className="text-white">LinkedIn</h1>
      </div>
      {/** Cards */}
      <div className="w-full flex justify-center gap-4 mt-16">
        <Card title="OnePager" text="example text" />
        <Card title="Google" text="example text" />
        <Card title="IBM" text="example text" />
      </div>
    </div>
  );
}
