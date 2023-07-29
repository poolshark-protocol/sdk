import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
export enum SubgraphVersion  {
    v_0_0_3 = "https://subgraph.satsuma-prod.com/3eaf484773f9/poolshark/cover-arbitrumGoerli/version/v0.0.3/api",
    v_0_0_7 = "https://subgraph.satsuma-prod.com/3eaf484773f9/poolshark/range-arbitrumGoerli/version/v0.0.7/api",
}
export const getClient = (subgraphVersion:SubgraphVersion) => {
    return new ApolloClient({
        uri: subgraphVersion,
        cache: new InMemoryCache(),
        defaultOptions: {
            query: {
                fetchPolicy: "no-cache",
            },
        },
    });
}

export const getClientFromCustomUrl = (url:string) => {
    return new ApolloClient({
        uri: url,
        cache: new InMemoryCache(),
        defaultOptions: {
            query: {
                fetchPolicy: "no-cache",
            },
        },
    });
}