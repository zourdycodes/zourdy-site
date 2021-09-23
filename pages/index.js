import Head from 'next/head';

import Link from 'next/link';
import { getGraphQLData } from '../lib/data';

export const getStaticProps = async () => {
  const { data } = await getGraphQLData();

  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  console.log(data);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Muhammad Zourdy Blog's'</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello World</h1>

      <div>
        {data?.portfolios?.map((item) => {
          return (
            <div key={item.slug}>
              <Link href={`/portfolio/${item.slug}`}>{item.title}</Link>
            </div>
          );
        })}
      </div>

      <div>
        {data?.posts?.map((post) => {
          return (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
