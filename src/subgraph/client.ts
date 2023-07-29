import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
export const client = new ApolloClient({
  uri: 'https://subgraph.satsuma-prod.com/3eaf484773f9/poolshark/range-arbitrumGoerli/version/v0.0.7/api',
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
  },
});