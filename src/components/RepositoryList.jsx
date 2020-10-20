import React from "react";
import { FlatList, View, StyleSheet, SafeAreaView } from "react-native";

import theme from "../theme";

import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: theme.margin.medium,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
const { repositories } = useRepositories();

const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      ListHeaderComponent={<></>}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.fullName}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      ListFooterComponent={<></>}
      // other props
      />
    </SafeAreaView>
      
  );
};

export default RepositoryList;
