import React from "react";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import Text from "./Text";
import {Link} from "react-router-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.lightText,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    marginHorizontal: theme.margin.medium,
    paddingVertical: theme.padding.thick
  },
});

const AppBarTab = (props) => {
  const {text, to} = props;

  return (
    <TouchableWithoutFeedback>
      <Link to={to}>
        <Text style={styles.text}>{text}</Text>
      </Link>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
