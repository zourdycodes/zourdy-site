import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import ProgressBar from "@badrap/bar-of-progress";
import { MDXProvider } from "@mdx-js/react";
import Router from "next/router";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

import MDXComponents from "../components/MDXComponents";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-T4VJMCP",
    });
  });

  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
