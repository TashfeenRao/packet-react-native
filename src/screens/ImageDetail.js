import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ImageDetail = (props) => {
  console.log(props);
  return (
    <View>
      <Image style={{ width: 100, height: 100 }} source={props.imageSource} />
      <Text>This is {props.title}</Text>
      <Text>{props.score}</Text>
    </View>
  );
};

export default ImageDetail;
