import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/componentScreen";
import WorkingWithContent from "./src/screens/Excersise1";
import ListScreen from "./src/screens/ListScreen";
import Excersise2 from "./src/screens/Excersise2";
import ImageScreen from "./src/screens/ImageScreen";
import Counter from "./src/screens/Counter";
import ColorComp from "./src/screens/ColorFulComp";
import SquareDemo from "./src/screens/SquareDemo";
import SquareDemoWithReducer from "./src/screens/SquareDemoWithReducer";
import TextScreen from "./src/screens/TextScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: WorkingWithContent,
    ComponentScreen: ComponentScreen,
    ListScreen: ListScreen,
    Excersise2: Excersise2,
    ImageScreen: ImageScreen,
    Counter: Counter,
    ColorComp: ColorComp,
    SquareDemo: SquareDemo,
    SquareWithReducer: SquareDemoWithReducer,
    TextScreen: TextScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
