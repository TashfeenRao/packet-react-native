import React from "react";
import { View, Text, StyleSheet } from "react-native";

/*
Box Model Object has three layers after content
* padding, border, margin
By default parent element has a property align item stretch it stretches the 
children elements horizontaly and vertically as much possible,
parent element flex-direction is column and alignment works horizontaly for that,
if flex-direction is row alignment works vertically 
justify-content works same as the flex-direction is, it aligns elements.
if flex-direction column then it aligns elements in cloumns and vice versa
flex property is applied to child elements of the parent,
if we apply flex 1 on one element then it will take space as much as possible
align self aligns the single element in the parent box. its property
remains applicable to even if we apply algnItems.
postion absolute will ignore it's siblings as they don't exists
top, left, right, bottom postion will move top of the sibling to depending upon
the the units applied to element

*/

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.element1}>Child 1</Text>
      <Text style={styles.element2}>Child 2</Text>
      <Text style={styles.element3}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    borderColor: "black",
    //alignItems: "flex-end",
    height: 200,
  },
  //   textStyles: {
  //     borderWidth: 1,
  //     borderColor: "red",
  //     // marginHorizontal: 10,
  //     // marginVertical: 10,
  //     // margin: 10,
  //   },
  //   element1: {
  //     borderWidth: 1,
  //     borderColor: "red",
  //     flex: 50,
  //   },
  //   element2: {
  //     borderWidth: 1,
  //     borderColor: "red",
  //     flex: 30,
  //   },
  //   element3: {
  //     borderWidth: 1,
  //     borderColor: "red",
  //     flex: 2,
  //   },
  element1: {
    borderWidth: 1,
    borderColor: "red",
  },
  element2: {
    borderWidth: 3,
    borderColor: "red",
    fontSize: 18,
    ...StyleSheet.absoluteFillObject,
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  element3: {
    borderWidth: 1,
    borderColor: "red",
  },
});

export default BoxScreen;
