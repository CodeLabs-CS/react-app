// App.js test!
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
firebase.initializeApp(firebaseConfig);


import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Tableau from './components/Tableau';
import Tableau2 from './components/Tableau2';
import Tableau3 from './components/Tableau3';

// create the app's navigation stack
const RootStack = createSwitchNavigator(
  {
    Loading: Loading,
    SignUp: SignUp,
    Login: Login,
    Main: Main,
  },
  {
    initialRouteName: "Loading"
  }
);

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
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

      <Stack.Screen 
        name="Tableau" 
        component={Tableau} 
        options={
          { title: 'Candidates' },
          {headerLeft: null} 
        }
      />

      <Stack.Screen 
        name="Tableau 2" 
        component={Tableau2} 
        options={
          { title: 'Location of Candidates' },
          {headerLeft: null} 
        }
      />

      <Stack.Screen 
        name="Tableau 3" 
        component={Tableau3} 
        options={
          { title: 'Contact Information of Candidates' },
          {headerLeft: null} 
        }
      />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}































