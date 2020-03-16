import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./App";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/ck7u9qmna0ixw01ea6xz24b66/master"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
