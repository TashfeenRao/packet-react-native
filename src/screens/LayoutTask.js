import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LayoutTask = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.ch1}>Ch2</Text>
      <Text style={styles.ch2}>Ch1</Text>
      <Text style={styles.ch3}>Ch3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    height: 100,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    //alignItems: "flex-start",
    justifyContent: "space-between",
  },
  ch1: {
    backgroundColor: "blue",
    height: 50,
    width: 50,
    borderColor: "black",
    borderWidth: 2,
  },
  ch2: {
    backgroundColor: "green",
    height: 50,
    width: 50,
    borderColor: "black",
    borderWidth: 2,
    alignSelf: "flex-end",
  },
  ch3: {
    backgroundColor: "red",
    height: 50,
    width: 50,
    borderColor: "black",
    borderWidth: 2,
  },
});

export default LayoutTask;
