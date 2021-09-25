import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import { MDXProvider } from "@mdx-js/react";

import MDXComponents from "../components/MDXComponents";
// import { useFathom } from "../hooks/useFathom";

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
