import React from "react";
import { View, StyleSheet, Text } from "react-native";

const WorkingWithContent = () => {
  const name = "Tashfeen";
  return (
    <View>
      <Text style={styles.getingText}>Geting Started With React Native!</Text>
      <Text style={styles.nameText}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  getingText: {
    fontSize: 45,
  },
  nameText: {
    fontSize: 20,
  },
});
export default WorkingWithContent;
