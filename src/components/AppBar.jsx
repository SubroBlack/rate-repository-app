import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import theme from "../theme";

import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColors.dark,
    flexDirection: "row",
    paddingLeft: theme.padding.medium
  },
});


const AppBar = () => {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
          <AppBarTab text="Repositories" to="/" />
          <AppBarTab text="Sign In" to="/signin" />
          <AppBarTab text="Trial" to="/trial" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
