import { ReactNode } from 'react';
import BestOf2021 from './posts/best-of-2021';
import LeavingGoogleForOnePager from './posts/leaving-google-for-onepager';

export interface Blog {
  title: string;
  date: string;
  post: ReactNode;
}

export const ALL_BLOGS = new Map<string, Blog>([
  [
    'best-of-2021',
    { title: 'Best Reads of 2021', date: 'TBD', post: <BestOf2021 /> },
  ],
  [
    'year-in-review',
    {
      title: '2021 Year in Review: Big Decisions, Big Races, and Back in NYC.',
      date: 'TBD',
      post: <LeavingGoogleForOnePager />,
    },
  ],
  [
    'leaving-google-for-onepager',
    {
      title: 'Leaving Google For OnePager',
      date: 'TBD',
      post: <LeavingGoogleForOnePager />,
    },
  ],
]);
