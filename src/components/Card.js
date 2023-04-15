import React from "react";
import { ImageBackground, StyleSheet, Dimensions } from "react-native";

const width_screen = Dimensions.get("window").width;
const card_item = width_screen - 24 * 2;
const card_size = {
    width: 325,
    height: 196,
  };
const styles = StyleSheet.create({
  card: {
    width: card_item,
    height: (card_item * card_size.height) / card_size.width,
 
  },
});

const Card = () => {
  return (
    <ImageBackground
      source={require("../assets/card.jpeg")}
      style={styles.card}
    ></ImageBackground>
  );
};
export default Card;
