import React from 'react';
import BaseLayout from '@/containers/BaseLayout';

const About: React.FC<any> = () => (
  <BaseLayout>
    <div className="flex flex-col max-w-2xl px-4">
      <h1 className="text-3xl font-semibold">About</h1>

      <p className="mt-8 text-lg">
        Text Reflect was created as a useful extension of your everyday memory.
        We'll send you a daily reminder, and you respond with your experiences
        from the day. Never forget a moment.
      </p>

      <p className="mt-8 text-lg">
        You control your data. Always private. Accessible to only you.
      </p>

      <p className="mt-8 text-lg">
        Coming soon: sentiment analysis, key words, photo uploads, calendar
        exports, location tagging, integration with other apps, and more.
      </p>
    </div>
  </BaseLayout>
);

export default About;
