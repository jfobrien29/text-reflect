import React from 'react';

import Footer from '@/components/Footer';
import BaseHeader from './BaseHeaders';
import Header from '@/components/Header';

const BaseLayout: React.FC<any> = ({ title, description, children }) => {
  return (
    <>
      <BaseHeader title={title} description={description} />
      <div className="w-full min-h-screen flex flex-col font-readex-pro bg-slate-800">
        <Header />

        <main className="w-full flex justify-center align-middle text-white">
          {children}
        </main>

        {/* Spacer to ensure footer at bottom of the page */}
        <div className="flex-grow" />

        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
