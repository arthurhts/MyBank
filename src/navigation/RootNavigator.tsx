import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage} from '../pages/Home/Home.page';
import {MyAccountPage} from '../pages/MyAccount.page/MyAccount.page';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const {Navigator, Screen} = Stack;
  return (
    <Navigator initialRouteName="HomePage" headerMode="none">
      <Screen name="Home" component={HomePage} />
      <Screen name="MyAccount" component={MyAccountPage} />
    </Navigator>
  );
};
