// import he from 'he';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import { MDXRemote } from 'next-mdx-remote';
// import { serialize } from 'next-mdx-remote/serialize';
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

      <div>
        <h1>{portfolioItems?.title}</h1>
        <p>{new Date(portfolioItems.date).toDateString()}</p>
        <p>{portfolioItems.description}</p>
        <div>
          {portfolioItems.tags?.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
          <Image
            src={portfolioItems.coverImage.url}
            width={portfolioItems.coverImage.width}
            height={portfolioItems.coverImage.height}
            alt="portfolio project pic"
          />
        </div>
      </div>
    </div>
  );
}
