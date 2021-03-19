import React from "react";
import { Text, StyleSheet } from "react-native";
import ComponentScreen from "./componentScreen";

const HomeScreen = () => {
  return (
    <>
      <Text style={styles.text}>Hello Tashfeen</Text>
      <ComponentScreen />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
