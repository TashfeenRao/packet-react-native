import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/componentScreen";
import WorkingWithContent from "./src/screens/Excersise1";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: WorkingWithContent,
  },
  {
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
