import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/componentScreen";
import WorkingWithContent from "./src/screens/Excersise1";
import ListScreen from "./src/screens/ListScreen";
import Excersise2 from "./src/screens/Excersise2";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: WorkingWithContent,
    ComponentScreen: ComponentScreen,
    ListScreen: ListScreen,
    Excersise2: Excersise2,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
