import { BLOG_SLUGS } from '@/blogs/all';
import { APP_URL } from '@/utils/config';
import { ROUTES } from '@/utils/constants';

const STATIC_PAGES = [ROUTES.HOME, ROUTES.BLOG, ROUTES.ABOUT];

const generateSiteMap = async () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--URLs for constant routes-->
     ${STATIC_PAGES.map((path: string) => {
       return `
      <url>
        <loc>${`${APP_URL}${path}`}</loc>
        <priority>0.7</priority>
      </url>
    `;
     }).join('')}
     <!--Blog routes-->
     ${BLOG_SLUGS.map((slug: string) => {
       return `
      <url>
          <loc>${`${APP_URL}/blog/${slug}`}</loc>
          <priority>0.7</priority>
      </url>
     `;
     }).join('')}
   </urlset>
 `;
};

const SiteMap = () => {
  // getServerSideProps will do the heavy lifting
};

export async function getServerSideProps({ res }: any) {
  // We generate the XML sitemap
  const sitemap = await generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
