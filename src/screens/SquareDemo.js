import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import Square from "./Square";

const COLOR_INCREAMENT = 15;

const SquareDemo = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, value) => {
    switch (color) {
      case "red":
        red + value > 255 || red + value < 0 ? null : setRed(red + value);
        break;
      case "green":
        green + value > 255 || green + value < 0
          ? null
          : setGreen(green + value);
        break;
      case "blue":
        blue + value > 255 || blue + value < 0 ? null : setBlue(blue + value);
        break;

      default:
        break;
    }
  };
  return (
    <View>
      <Square
        title="Red"
        onIncrease={() => setColor("red", +COLOR_INCREAMENT)}
        onDecrease={() => setColor("red", -COLOR_INCREAMENT)}
      />
      <Square
        title="Green"
        onIncrease={() => setColor("green", +COLOR_INCREAMENT)}
        onDecrease={() => setColor("green", -COLOR_INCREAMENT)}
      />
      <Square
        title="Blue"
        onIncrease={() => setColor("blue", +COLOR_INCREAMENT)}
        onDecrease={() => setColor("blue", -COLOR_INCREAMENT)}
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

export default SquareDemo;
