// App.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';

import firebase from './config/config.js';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import LoadingScreen from './components/LoadingScreen';


const Main = createStackNavigator();


function AppStack() {
  return (
    <NavigationContainer>
        <Main.Navigator
        initialRouteName="Signup"
        screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          },
        // headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
        }}>
      
      <Main.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Peridot' }}
      />

      <Main.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Peridot'},
          {headerLeft: null} 
        }
      />

      <Main.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
        { title: 'Peridot' },
        {headerLeft: null} 
       }
      />

    </Main.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    // <NavigationContainer>
      <AppStack />
    // </NavigationContainer>
  );
}


export default App;