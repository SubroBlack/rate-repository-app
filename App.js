import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Main from "./src/components/Main";

export default function App() {
  console.log("This is how we debug the app");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
