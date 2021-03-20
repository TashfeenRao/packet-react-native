import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const Excersise2 = () => {
  const data = [
    { name: "Friend 1", age: "20" },
    { name: "Friend 2", age: "22" },
    { name: "Friend 3", age: "25" },
    { name: "Friend 4", age: "24" },
    { name: "Friend 5", age: "21" },
    { name: "Friend 6", age: "27" },
    { name: "Friend 7", age: "25" },
  ];
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(friend) => friend.name}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textMargin}>
              {item.name} - {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textMargin: {
    marginVertical: 20,
  },
});
export default Excersise2;
