import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from 'cross-fetch';

export enum SubgraphVersion  {
    // v_0_0_3 = "https://subgraph.satsuma-prod.com/3eaf484773f9/poolshark/cover-arbitrumGoerli/version/v0.0.3/api",
    // v_0_0_7 = "https://subgraph.satsuma-prod.com/3eaf484773f9/poolshark/range-arbitrumGoerli/version/v0.0.7/api",
    t_v_0_0_3, //testnet v0.0.3
    t_v_0_0_7, //testnet v0.0.7
    none
}

const getSubgraphUrlFromVersion = (subgraphVersion:SubgraphVersion) => {
    switch(subgraphVersion){
        case SubgraphVersion.t_v_0_0_3:
            return "https://subgraph.satsuma-prod.com/3eaf484773f9/poolshark/cover-arbitrumGoerli/version/v0.0.3/api";
        case SubgraphVersion.t_v_0_0_7:
            return "https://subgraph.satsuma-prod.com/3eaf484773f9/poolshark/range-arbitrumGoerli/version/v0.0.7/api";
        default:
            return "";  
    }
}

export const getClient = (subgraphVersion: SubgraphVersion) => {
    const url = getSubgraphUrlFromVersion(subgraphVersion);
    return new ApolloClient({
        uri: url,
        cache: new InMemoryCache(),
        link:  new HttpLink({ uri: `${url}`, fetch }),
        defaultOptions: {
                        query: {
                            fetchPolicy: "no-cache",
                        },
                    },
    });
};

export const getClientFromCustomUrl = (url: string) => {
    return new ApolloClient({
        uri: url,
        cache: new InMemoryCache(),
        link: new HttpLink({ uri: `${url}`, fetch })
    });
};





