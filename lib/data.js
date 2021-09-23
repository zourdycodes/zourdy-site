import { gql, GraphQLClient } from 'graphql-request';

export const getGraphQLData = async () => {
  const endpoint = `https://api-eu-central-1.graphcms.com/v2/cktvwwowu0dv101z9emhxeqti/master`;

  const graphClient = new GraphQLClient(endpoint);

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
