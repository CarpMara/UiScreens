import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ThirdScreen from './src/screens/ThirdScreen';
import HomeScreen from './src/screens/HomeScreen';
import FourScreen from './src/screens/FourScreen';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
const navigator = createStackNavigator({
  Home: HomeScreen,
  First:FirstScreen,
  Second:SecondScreen,
  Third:ThirdScreen,
  Four:FourScreen
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
      title: 'Home Search'
  }
});

export default createAppContainer(navigator);
