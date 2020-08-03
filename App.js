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


//firebase configuration
import * as firebase from "firebase";
// var firebaseConfig = {
//   apiKey: "AIzaSyDmDITr2c11TBklQ6s05KGGh4NALcNOCdk",
//   authDomain: "reacthooks-firebaselogin.firebaseapp.com",
//   databaseURL: "https://reacthooks-firebaselogin.firebaseio.com",
//   projectId: "reacthooks-firebaselogin",
//   storageBucket: "reacthooks-firebaselogin.appspot.com",
//   messagingSenderId: "403004885385",
//   appId: "1:403004885385:web:9f3ba64118d35e09183958"
// };
// // Initialize Firebase
// if(!firebase.apps.length){
//   firebase.initializeApp(firebaseConfig);
// }

var firebaseConfig = {
  apiKey: "AIzaSyAID_0rrn_QhwdhR5rNag-fbUuyuaQjvSE",
  authDomain: "react-app-febbc.firebaseapp.com",
  databaseURL: "https://react-app-febbc.firebaseio.com",
  projectId: "react-app-febbc",
  storageBucket: "react-app-febbc.appspot.com",
  messagingSenderId: "378992588494",
  appId: "1:378992588494:web:f27382930c6d44c492c29f",
  measurementId: "G-0Z97Y1Z435"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}



//stack navigator
const Main = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
        <StatusBar style="light" />

        <Main.Navigator
        initialRouteName="Signup"
        screenOptions={{
          headerShown: false
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
      <AppStack />
  );
}


export default App;