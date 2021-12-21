import Head from 'next/head';

const BaseHeader: React.FC<any> = ({
  title = 'Text Reflect',
  description = 'Record your experiences every day via text. Track trends, sentiment, and never forget a thing.',
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/** Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      {/* Open Graph */}
      {/* <meta property="og:url" content={generateCurrentUrl} key="ogurl" /> */}
      {/* <meta property="og:image" content={previewImageUrl} key="ogimage" /> */}
      <meta
        property="og:site_name"
        content="Jack O'Brien Personal Site"
        key="ogsitename"
      />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />

      {/* Twitter */}
      {/* <meta name="twitter:image" content={previewImageUrl} /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@thejackobrien" />

      <link
        href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default BaseHeader;
