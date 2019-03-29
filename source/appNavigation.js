
import {createStackNavigator,createAppContainer} from 'react-navigation';


import UserListApp from './homeScreen';
import Information from './info';

 const appNavigation = createStackNavigator({
  homeScreen: { screen: UserListApp },
  info: { screen: Information },
}, {
    initialRouteName: 'homeScreen'
  });

  const Container = createAppContainer(appNavigation);
  export default Container;  