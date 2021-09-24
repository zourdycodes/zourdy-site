import React from 'react';
import Head from 'next/head';

import { getBlogSlugs, getPosts } from '../../lib/data';

export const getStaticPaths = async () => {
  const { data } = await getBlogSlugs();
  const slugs = data.posts;

  return {
    paths: slugs.map((item) => ({
      params: { slug: item.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const { data } = await getPosts(slug);

  return {
    props: {
      post: data.posts[0],
    },
  };
};

export default function Blogs({ post }) {
  return (
    <div>
      <Head>
        <title>{post?.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello World</h1>

      <div>
        <h1>{post?.title}</h1>
      </div>
    </div>
  );
}
