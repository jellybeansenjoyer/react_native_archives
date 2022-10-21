import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentsScreen"
import flatListComponent from "./src/screens/FlatListComponentScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen"
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen  from "./src/screens/SquareScree";
import PracticeScreen from "./src/screens/PracticeScreen";
import MyWorkSpace from "./src/screens/MyWorkSpace";
import screen from "./src/screens/PracticeScreen2";
import ReusableComp from "./src/screens/ReusableComp";
import Counter from "./src/screens/Counter";
const navigator = createStackNavigator(
  {
    Count:Counter,
    Reusable:ReusableComp,
    Practice2:screen,
    Work:MyWorkSpace,
    Practice:PracticeScreen,
    Square:SquareScreen,
    Counter:CounterScreen,
    Home: HomeScreen,
    Component:ComponentScreen,
    flatComponent:flatListComponent,
    Image:ImageScreen,
    Color:ColorScreen
  },
  {
    initialRouteName: "Work",
    defaultNavigationOptions: {
      title: "FirstApp",
    },
  }
);

export default createAppContainer(navigator);
