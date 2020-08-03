import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import firebaseApp from './config/config.js';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import LoadingScreen from './components/LoadingScreen';
import VoteQ1 from './components/VoteQ1.js';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
        <StatusBar style="light" />

        <Stack.Navigator
        initialRouteName='Signup'
        screenOptions={{
        headerShown: false
        }}>
      
      <Stack.Screen 
        name="Signup"
        component={Signup} 
        options={{ title:"Signup" }}
      />

      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />

      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
        { title: 'Dashboard' },
        {headerLeft: null} 
       }
      />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
      <MyStack />
  );
}

export default App;