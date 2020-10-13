import React from "react";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import Text from "./Text";
import {Link} from "react-router-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.barItem,
    fontWeight: theme.fontWeights.bold,
    marginHorizontal: 8
  },
});

/*

*/

const AppBarTab = (props) => {
  return (
    <TouchableWithoutFeedback>
      <Link to={props.to}>
        <Text style={styles.text}>{props.text}</Text>
      </Link>
    </TouchableWithoutFeedback>    
  );
};

export default AppBarTab;
