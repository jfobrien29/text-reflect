import React from 'react';

import Footer from '@/components/Footer';
import BaseHeader from './BaseHeaders';
import Header from '@/components/Header';

const BaseLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      <BaseHeader />
      <div className="w-full min-h-screen flex flex-col font-readex-pro">
        <Header />

        <main className="w-full flex justify-center align-middle text-white px-2">
          {children}
        </main>

        {/* Spacer to ensure Footer at bottom of the page */}
        <div className="flex-grow"></div>

        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
