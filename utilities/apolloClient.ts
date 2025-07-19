
'use client';
import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://instagram-automation-backend-ca2d131fa796.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });
};

export const client = createApolloClient()
export default createApolloClient;