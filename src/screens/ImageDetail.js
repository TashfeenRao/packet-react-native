import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={require("../../assets/beach.jpg")} />
      <Text>This is {props.title}</Text>
    </View>
  );
};

export default ImageDetail;
