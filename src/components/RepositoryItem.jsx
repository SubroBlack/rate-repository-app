import React from "react";
import { View, StyleSheet, Image } from "react-native";
import theme from "../theme";

import Text from "./Text";

const styles = StyleSheet.create({
  card: theme.card,
  cardSection: {
    display: theme.display.flexContainer,
    flexDirection: "row",
  },
  cardImage: {
    height: 70,
    width: 70,
    marginRight: "2%",
    borderRadius: 6,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    padding: "2%",
    flexWrap: "wrap",
  },
  cardButton: {
    padding: "2%",
    backgroundColor: theme.colors.primary,
    color: "white",
    fontWeight: "bold",
    borderRadius: 4,
    margin: "1%",
  },
  cardBar: {
    display: theme.display.flexContainer,
    flexDirection: "row",
    marginVertical: "2%",
    alignItems: theme.alignItems.bar,
  },
  infoBar: {
    display: theme.display.flexContainer,
    flexDirection: "row",
    justifyContent: theme.justifyContent.bar,
  },
  description: {
    //display: "flex",
    //flexWrap: "wrap",
    //marginRight: "1%",
  },
});

const RepositoryItem = (props) => {
  const { item } = props;

  // Number Formatter
  const kFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  };

  /*
  
  */

  return (
    <View style={styles.card}>
      <View style={styles.cardSection}>
        <Image style={styles.cardImage} source={{ uri: item.ownerAvatarUrl }} />

        <View>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.cardBar}>
            <Text style={styles.cardButton} fontWeight="bold">
              {item.language}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.infoBar}>
        <View style={styles.info}>
          <Text fontWeight="bold">{kFormatter(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.info}>
          <Text fontWeight="bold">{kFormatter(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.info}>
          <Text fontWeight="bold">{kFormatter(item.reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.info}>
          <Text fontWeight="bold">{kFormatter(item.ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>
      </View>

    </View>
  );
};

export default RepositoryItem;