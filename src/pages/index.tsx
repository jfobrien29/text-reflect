import Landing from '@/components/Landing';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';

const LandingPage: NextPage<any> = () => {
  return <Landing />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { test: 'test' },
  };
};

export default LandingPage;
