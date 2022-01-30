import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: "Bearer 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",
  },
});

export default client;
