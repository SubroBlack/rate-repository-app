import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from 'expo-constants';
import theme from "../theme";

import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    display: theme.display.flexContainer,
    backgroundColor: theme.colors.header,
    padding: theme.padding.appBar,
    justifyContent: theme.justifyContent.bar,
    flexDirection: "row",
  },
  scrollView: {
    marginVertical: 4,
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
