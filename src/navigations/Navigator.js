import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import OverView from '../screens/OverView';

const stackNavigatorOptions = {
  headerShown: false,
};
const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    OverView: { screen: OverView },
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  }
);
export default createAppContainer(AppNavigator);
