import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentScreen from "./componentScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello Tashfeen</Text>
      <Button
        title="Go to Component Screen"
        onPress={() => navigation.navigate("ComponentScreen")}
      />
      <Button
        onPress={() => navigation.navigate("ListScreen")}
        title="Go To List Component"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
