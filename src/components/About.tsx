import React from 'react';
import BaseLayout from '@/containers/BaseLayout';

const About: React.FC<any> = () => (
  <BaseLayout
    title="About Jack O'Brien"
    description="Co-Founder & CTO of OnePager, interested in programming, startups, education, biotech, and climate
change solutions. At my core, I like to build things. Previously Google, IBM, and Princeton University."
  >
    <div className="flex flex-col max-w-2xl px-4">
      <h1 className="text-3xl font-semibold">About</h1>

      <p className="mt-8 text-lg">
        Co-Founder and CTO of{' '}
        <a className="underline" href="https://onepager.vc">
          OnePager
        </a>
        , trying to give more founders quality fundraising exposure. If more
        founders can access early stage venture funding, more great ideas will
        become sustainable businesses.
      </p>

      <h2 className="mt-8 italic text-lg">Previously</h2>

      <p className="mt-8 text-lg">
        Software Engineer at{' '}
        <a
          className="underline"
          href="https://www.google.com/search?q=2x%5E2+%2B+3x+-+1+%3D+0&rlz=1C5CHFA_enUS707US716&oq=2x%5E2+%2B+3x+-+1+%3D+0&aqs=chrome..69i57.8930j0j9&sourceid=chrome&ie=UTF-8"
        >
          Google
        </a>{' '}
        leading teams in finance and education projects. While working with the
        education team, designed and implemented features on Search and YouTube
        impacting millions of students around the world.
      </p>

      <p className="mt-8 text-lg">
        Software Engineer and Consultant at{' '}
        <a className="underline" href="https://www.ibm.com/blockchain">
          IBM Blockchain
        </a>
        . Led remote developement teams to build enterprise blockchain
        applications. (This was 2017, and I'm now more skeptical about the
        future of{' '}
        <a className="underline" href="https://www.hyperledger.org/">
          Hyperledger
        </a>{' '}
        and enterprise blockchain).
      </p>

      <p className="mt-8 text-lg">
        Co-Founder of Tiger Bed Rentals, a bed rental company I started with a
        friend in college. Grew to $130k+ in revenue year one, profitable by
        year two. Evenutally sold to{' '}
        <a className="underline" href="https://roomie.co/">
          Roomie
        </a>
        .
      </p>

      <p className="mt-8 text-lg">
        Undergraduate engineering degree in Computer Science from Princeton. I
        was recruited to Princeton on the men's lacrosse team where I played for
        4 years. I clearly like orange to a fault, let's go tigers.
      </p>

      <h2 className="mt-8 italic text-lg">Misc Side Projects</h2>

      <div className="mt-8 text-lg">
        <span>Usually</span> I get in all the coding I need from my main job,
        but I do hack on a few side projects occationally. A few fun ones both
        technical and non-technical:
        <ul className="list-disc ml-6 mt-4 gap-4">
          <li>
            <span className="font-semibold">On the Hook</span>, fundraising via
            text among networks (coming soon...)
          </li>
          <li className="mt-4">
            <span className="font-semibold">Text Reflect</span>, daily self
            reflection via text (coming soon...,)
          </li>
          <li className="mt-4">
            <a
              className="underline font-semibold"
              href="https://calendarchallenger.com/"
              target="_blank"
              rel="noreferrer"
            >
              Calendar Challenger
            </a>
            , complete a single challenge every day to build consistency, submit
            via text, show results in public (2021){' '}
          </li>
          <li className="mt-4">
            <a
              className="underline font-semibold"
              href="https://skystheminute.com/"
              target="_blank"
              rel="noreferrer"
            >
              Skys the Minute
            </a>
            , use your free minutes to learn something (2018)
          </li>
          <li className="mt-4">
            <span className="font-semibold">
              <a
                className="underline font-semibold"
                href="https://http://groovingagainstleukemia.com/"
                target="_blank"
                rel="noreferrer"
              >
                Grooving Against Leukemia
              </a>
            </span>
            , NYC marathon fundraising team for LLS (2018-2021)
          </li>
          <li className="mt-4">
            <span className="font-semibold">
              <a
                className="underline font-semibold"
                href="https://www.instagram.com/oldrelly"
                target="_blank"
                rel="noreferrer"
              >
                Old Relly
              </a>
            </span>
            , renovated a school bus and drove it to 37 states (2017)
          </li>
          <li className="mt-4">
            <span className="font-semibold">
              Impact Environmental Calculator
            </span>
            , calculate and improve your true impact on the environment (2016)
          </li>
        </ul>
      </div>
    </div>
  </BaseLayout>
);

export default About;
