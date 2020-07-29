import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';

const RootStack = createStackNavigator();


const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component = {SplashScreen}/>
        <RootStack.Screen name="Login" component = {SignInScreen}/>
        <RootStack.Screen name="Signup" component = {SignUpScreen}/>
    </RootStack.Navigator>
)

export default RootStackScreen;