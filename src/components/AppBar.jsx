import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import theme from "../theme";

import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    display: theme.display.flexContainer,
    backgroundColor: theme.colors.header,
    padding: theme.padding.appBar,
    justifyContent: theme.justifyContent.bar,

    // ...
  },
  // ...

  //

});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" />  
    </View>
  );
};

export default AppBar;
