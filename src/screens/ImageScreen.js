import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ImageDetail from "./ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="forest" />
      <ImageDetail title="beach" />
      <ImageDetail title="mountain" />
    </View>
  );
};

export default ImageScreen;
