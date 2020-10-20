import React from "react";
import {NativeRouter} from "react-router-native";
import {ApolloProvider} from "@apollo/react-hooks";

import Main from "./src/components/Main";
import createApolloClient from "./src/utils/apolloClient";
const apolloClient = createApolloClient();

export default function App() {
  console.log("This is how we debug the app");
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient} >
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
}