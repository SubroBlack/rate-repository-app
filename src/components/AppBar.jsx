import React from "react";
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback } from "react-native";
import useAuthorizedUser from "../hooks/useAuthorizedUser";
import useSignOut from "../hooks/useSignOut";
import Text from "./Text";

import theme from "../theme";

import AppBarTab from "./AppBarTab";


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColors.dark,
    flexDirection: "row",
    paddingLeft: theme.padding.medium
  },
  text: {
    color: theme.colors.lightText,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    marginHorizontal: theme.margin.medium,
    paddingVertical: theme.padding.thick
  },
});


const AppBar = () => {
  const {user} = useAuthorizedUser();
  const signout = useSignOut();
  
  //Logout Func:
  const logout = () => {
    signout();
  };

  console.log("Logged User: ", user);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
          <AppBarTab text="Repositories" to="/" />
          {user? (
              <TouchableWithoutFeedback onPress={logout}>
                <Text style={styles.text}>Sign Out</Text>
              </TouchableWithoutFeedback>
            ) : <AppBarTab text="Sign In" to="/signin" />}          
          <AppBarTab text="Trial" to="/trial" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
