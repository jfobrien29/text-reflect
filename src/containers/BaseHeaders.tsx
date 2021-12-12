import Head from 'next/head';

const BaseHeader: React.FC<any> = ({
  title = "Jack O'Brien",
  description = '',
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#ffffff" />

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
    </Head>
  );
};

export default BaseHeader;
