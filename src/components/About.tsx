import React from 'react';
import BaseLayout from '@/containers/BaseLayout';

const About: React.FC<any> = () => (
  <BaseLayout>
    <div className="flex flex-col max-w-2xl px-4">
      <h1 className="text-3xl font-semibold">About</h1>

      <p className="mt-8 text-lg">
        Text Reflect was created as a useful extension of your everyday memory.
        We'll send you a daily reminder, and you respond with you the key events
        from the day. Never forget a moment.
      </p>

      <p className="mt-8 text-lg">
        You control your data. Always private. Accessible to only you.
      </p>

      <p className="mt-8 text-lg">
        Why? It's easy to forget small moments. The present usually isn't often
        what you predicted or expected in the past, so reflecting on the past is
        a great way to understand the present. With our automated reminders,
        just remember to text back and you'll always remember.
      </p>
    </div>
  </BaseLayout>
);

export default About;
