// App.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';

// import firebase from './config/config.js';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import LoadingScreen from './components/LoadingScreen';

import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDmDITr2c11TBklQ6s05KGGh4NALcNOCdk",
  authDomain: "reacthooks-firebaselogin.firebaseapp.com",
  databaseURL: "https://reacthooks-firebaselogin.firebaseio.com",
  projectId: "reacthooks-firebaselogin",
  storageBucket: "reacthooks-firebaselogin.appspot.com",
  messagingSenderId: "403004885385",
  appId: "1:403004885385:web:9f3ba64118d35e09183958"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
const Main = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
        <Main.Navigator
        initialRouteName="Signup"
        screenOptions={{
          headerShown: false
        // headerTitleAlign: 'center',
        // headerStyle: {
        //   backgroundColor: '#293428',
        //   },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        // fontWeight: 'bold',
        // },
        }}>
      
      <Main.Screen 
        name="Signup"
        component={Signup} 
        options={{ title:"" }}
      />

      <Main.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />

      <Main.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
        { title: 'Dashboard' },
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