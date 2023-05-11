import { request, gql } from "graphql-request";

const POOLSHARK_COVER_URL = "https://thegraph.com/hosted-service/subgraph/alphak3y/poolshark-cover";
const POOLSHARK_RANGE_URL = "https://thegraph.com/hosted-service/subgraph/alphak3y/poolshark-range";

// Replace coverEntities, rangeEntities, and their properties with the actual entities and properties you want to fetch from the subgraphs.

const COVER_QUERY = gql`
  query CoverData {
    coverEntities {
      id
      property1
      property2
    }
  }
`;

const RANGE_QUERY = gql`
  query RangeData {
    rangeEntities {
      id
      property1
      property2
    }
  }
`;

async function fetchCoverData(): Promise<any> {
  const data = await request(POOLSHARK_COVER_URL, COVER_QUERY);
  return data.coverEntities;
}

async function fetchRangeData(): Promise<any> {
  const data = await request(POOLSHARK_RANGE_URL, RANGE_QUERY);
  return data.rangeEntities;
}

export { fetchCoverData, fetchRangeData };
