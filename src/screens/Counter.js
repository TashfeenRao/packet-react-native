import React, { useReducer, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increase_counter":
      return { ...state, count: state.count + action.payload };
    case "decrease_counter":
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
};
const Counter = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  const { count } = counter;
  return (
    <View>
      <h1>Counter</h1>
      <Button
        title="Increased"
        onPress={() => dispatch({ type: "increase_counter", payload: 1 })}
      />
      <Button
        title="Decreased"
        onPress={() => dispatch({ type: "decrease_counter", payload: 1 })}
      />
      <Text>Counter Value is {count}</Text>
    </View>
  );
};

export default Counter;
