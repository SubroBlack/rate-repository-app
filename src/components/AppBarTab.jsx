import React from "react";
import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import Text from "./Text";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.barItem,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = (props) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableWithoutFeedback>    
  );
};

export default AppBarTab;
