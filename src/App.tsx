import { ApolloProvider } from "@apollo/client";
import client from "./services/apollo";

import Home from "./pages/home";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
