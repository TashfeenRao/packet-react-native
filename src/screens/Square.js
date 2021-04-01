import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const Square = ({ title, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button title={`More ${title}`} onPress={() => onIncrease()} />
      <Button title={`less ${title}`} onPress={() => onDecrease()} />
    </View>
  );
};

export default Square;
