import { useState } from "react";

import GradientHeadingText from "../components/GradientHeadingText";
import OGContainer from "../components/OGContainer";
import PostListItem from "../components/PostListItem";
import Wrapper from "../components/Wrapper";
import { getAllFilesFrontMatter } from "../lib/mdx";

export default function Code({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const blogPosts = posts
    .sort((a, b) => Number(new Date(b.published)) - Number(new Date(a.published)))
    .filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))
    .reverse();
  return (
    <Wrapper>
      <OGContainer description="The Blog: Occasional educational content. Predominantly ramblings.">
        <div>
          <div>
            <h1 className="body-text">
              Every information that could be useful for me and for others I always write it down on
              the paper before publish it on this blog, also I write down a little piece of story
              living in Poland.
            </h1>
          </div>
          <div className="py-8">
            <label htmlFor="blogPosts">
              <GradientHeadingText text="Search blog posts" />
            </label>
            <div>
              <input
                style={{ caretColor: "white" }}
                id="blogPosts"
                placeholder="React..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="mt-3 text-gray-200 tracking-wider bg-gray-800 h-10 px-3 shadow-sm focus:ring-indigo-500 focus:outline-none focus:border-gray-400 block w-full border-gray-700 rounded-md"
                type="text"
              />
            </div>
          </div>
          {blogPosts &&
            blogPosts.map((post) => <PostListItem type="blog" key={post.slug} data={post} />)}
        </div>
      </OGContainer>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("post");
  console.log(posts, "disss!");

  return { props: { posts } };
}
