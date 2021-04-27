import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Signin, SplashSCreen} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashSCreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={Signin}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
