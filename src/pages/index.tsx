import Landing from '@/components/Landing';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';

const LandingPage: NextPage<any> = () => <Landing />;

export const getStaticProps: GetStaticProps = async () => {
  const testValue = 'test';

  return {
    props: { test: testValue },
  };
};

export default LandingPage;
