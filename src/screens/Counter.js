import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <h1>Counter</h1>
      <Button title="Increased" onPress={() => setCounter(counter + 1)} />
      <Button title="Decreased" onPress={() => setCounter(counter - 1)} />
      <Text>Counter Value is {counter}</Text>
    </View>
  );
};

export default Counter;
