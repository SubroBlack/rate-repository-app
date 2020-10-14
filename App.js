import React from "react";
import {NativeRouter} from "react-router-native";

import Main from "./src/components/Main";

export default function App() {
  console.log("This is how we debug the app");
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}