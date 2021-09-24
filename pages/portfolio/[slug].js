import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { getPortfolio, getPortfolioSlugs } from '../../lib/data';

export const getStaticPaths = async () => {
  const { data } = await getPortfolioSlugs();
  const slugs = data.portfolios;

  return {
    paths: slugs.map((item) => ({
      params: { slug: item.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const { data } = await getPortfolio(slug);

  return {
    props: {
      portfolioItems: data.portfolios[0],
    },
  };
};

export default function Portfolio({ portfolioItems }) {
  const router = useRouter();

  console.log(portfolioItems);

  if (router.isFallback) {
    return (
      <div>
        <h1>loading....</h1>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{portfolioItems?.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello World</h1>

      <div>
        <h1>{portfolioItems?.title}</h1>
      </div>
    </div>
  );
}
