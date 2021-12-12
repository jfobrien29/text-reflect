import React from 'react';

import Footer from '@/components/Footer';
import BaseHeader from './BaseHeaders';

const BaseLayout: React.FC<any> = ({ children }) => {
  return (
    <div className="w-full min-h-screen">
      <BaseHeader />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default BaseLayout;
