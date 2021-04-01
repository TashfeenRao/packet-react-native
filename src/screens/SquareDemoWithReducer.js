import React, { useReducer } from "react";
import { View } from "react-native";
import Square from "./Square";

const COLOR_AMOUNT = 15;
const initialState = { red: 0, green: 0, blue: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };

    default:
      return state;
      break;
  }
};

const SquareDemoWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Square
        title="Red"
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_AMOUNT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -COLOR_AMOUNT })
        }
      />
      <Square
        title="green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_AMOUNT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -COLOR_AMOUNT })
        }
      />
      <Square
        title="blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_AMOUNT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -COLOR_AMOUNT })
        }
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};

export default SquareDemoWithReducer;
