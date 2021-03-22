import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentScreen = () => {
  const greeting = "Hi It's Tashfeen";
  return (
    <View>
      <Text style={styles.styleText}> This is newlly created component</Text>
      <Text style={styles.styleText}> This is second created component</Text>
      <Text>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  styleText: {
    fontSize: 30,
  },
});

export default ComponentScreen;
