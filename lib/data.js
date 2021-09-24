import { gql, GraphQLClient } from 'graphql-request';

const endpoint = `https://api-eu-central-1.graphcms.com/v2/cktvwwowu0dv101z9emhxeqti/master`;

const graphClient = new GraphQLClient(endpoint);

export const getGraphQLData = async () => {
  const query = gql`
    {
      portfolios {
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
      }
      posts {
        title
        slug
        description
        date
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `;

  const data = await graphClient.request(query);

  return { data };
};

export const getPortfolio = async (slug) => {
  const query = gql`
    query getPortfolio($slug: String!) {
      portfolios(where: { slug: $slug }) {
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
        content
      }
    }
  `;

  const variables = {
    slug,
  };

  const data = await graphClient.request(query, variables);

  return { data };
};

export const getPortfolioSlugs = async () => {
  const query = gql`
    query {
      portfolios {
        slug
      }
    }
  `;

  const data = await graphClient.request(query);

  return { data };
};

export const getPosts = async (slug) => {
  const query = gql`
    query getPost($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        slug
        description
        date
        content
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `;

  const variables = {
    slug,
  };

  const data = await graphClient.request(query, variables);

  return { data };
};

export const getBlogSlugs = async () => {
  const query = gql`
    {
      posts {
        slug
      }
    }
  `;

  const data = await graphClient.request(query);

  return { data };
};
