import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './Home';
import MyOrder from './MyOrder';
import Navbar from '../components/Navbar';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: props => <Navbar {...props} />
      }
    },
    MyOrder: {
      screen: MyOrder,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#ffca28'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#000'
        },
        headerTintColor: '#000',
        animationEnabled: true,
        headerTitleAlign: 'center'
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export const AppContainer = createAppContainer(AppNavigator);
