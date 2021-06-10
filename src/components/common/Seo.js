import { Helmet } from "react-helmet";

const icon16 = `${process.env.PUBLIC}/static/icons/favicon-16x16.png`;
const icon192 = `${process.env.PUBLIC}/static/icons/favicon-192x192.png`;
const icon32 = `${process.env.PUBLIC}/static/icons/favicon-32x32.png`;
const icon512 = `${process.env.PUBLIC}/static/icons/favicon-512x512.png`;

const SITE_URL = "";

export const Seo = ({ title, description, pathSlug, image, keywords = [] }) => {
  const url = `${SITE_URL}${pathSlug}`;
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | TodoList`}
      meta={[
        // Primary Meta Tags
        {
          name: "description",
          content: description,
        },
        {
          name: "image",
          content: image,
        },
        {
          name: "keywords",
          content: keywords.join(),
        },
        // Open Graph / Facebook
        {
          name: "og:title",
          content: title,
        },
        {
          name: "og:image",
          content: image,
        },
        {
          name: "og:description",
          content: description,
        },
        {
          name: "og:url",
          content: url,
        },
        {
          name: "og:type",
          content: "website",
        },
        // Twitter
        {
          name: "twitter:card",
          content: image,
        },
        {
          name: "twitter:url",
          content: url,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:image",
          content: image,
        },
      ]}
      links={[
        {
          rel: "canonical",
          href: url,
        },
        {
          rel: "icon",
          type: "image/png",
          href: icon16,
          sizes: "16x16",
        },
        {
          rel: "icon",
          type: "image/png",
          href: icon32,
          sizes: "32x32",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          href: icon192,
          sizes: "192x192",
        },
        {
          rel: "apple-touch-startup-image",
          type: "image/png",
          href: icon512,
          sizes: "512x512",
        },
      ]}
    />
  );
};
