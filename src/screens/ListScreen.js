import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

const ListScreen = () => {
  const friends = [
    { friend: "1" },
    { friend: "2" },
    { friend: "3" },
    { friend: "4" },
    { friend: "5" },
    { friend: "6" },
    { friend: "7" },
  ];
  return (
    <FlatList
      horizontal
      keyExtractor={(friend) => friend.friend}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textHeight}>{item.friend}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textHeight: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
});
export default ListScreen;
