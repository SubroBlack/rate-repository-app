import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import theme from "../theme";

import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    display: theme.display.flexContainer,
    backgroundColor: theme.backgroundColors.dark,
    padding: theme.padding.medium,
    justifyContent: theme.justifyContent.bar,
    flexDirection: "row",
  },
  scrollView: {
    //marginVertical: 1,
    paddingVertical: 7,
  },
});


const AppBar = () => {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal={true} >
          <AppBarTab text="Repositories" to="/" />
          <AppBarTab text="Sign In" to="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
