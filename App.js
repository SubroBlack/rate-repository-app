import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import {NativeRouter} from "react-router-native";
import Constants from 'expo-constants';

import Main from "./src/components/Main";

export default function App() {
  console.log("This is how we debug the app");
  return (
    <NativeRouter>
      <View style={styles.container}>
          <StatusBar style="auto" />
          <Main />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    //marginBottom: Constants.statusBarHeight,
    //padding: 2,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
