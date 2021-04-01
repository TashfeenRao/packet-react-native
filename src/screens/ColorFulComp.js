import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList } from "react-native";
import { color } from "react-native-reanimated";

const ColorFulComp = () => {
  const [colors, setColor] = useState([]);
  return (
    <View>
      <Button
        title="Get Random color"
        onPress={() => setColor([...colors, randomColor()])}
      />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View style={{ width: 100, height: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red},${blue},${green})`;
};
const styles = StyleSheet.create({});

export default ColorFulComp;
