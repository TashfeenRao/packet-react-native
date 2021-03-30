import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ImageDetail from "./ImageDetail";

const ImageScreen = () => {
  const score = { first: 1, second: 4, third: 9 };
  return (
    <View>
      <ImageDetail
        title="forest"
        imageSource={require("../../assets/forest.jpg")}
        score={score.first}
      />
      <ImageDetail
        title="beach"
        score={score.second}
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="mountain"
        score={score.third}
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

export default ImageScreen;
