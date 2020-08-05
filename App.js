// App.js test!
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View, Text } from 'react-native';
import firebaseApp from './config/config.js';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import LoadingScreen from './components/LoadingScreen';
import VoteQ1 from './components/VoteQ1.js';
import VoteQ2N from './components/VoteQ2N.js';
import AddRegistration from './components/AddRegistration.js';
import Tableau from './components/Tableau';
import Tableau2 from './components/Tableau2';
import Tableau3 from './components/Tableau3';

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

      <Stack.Screen
        name="VoteQ1"
        component={VoteQ1}
      />

      <Stack.Screen
        name="VoteQ2N"
        component={VoteQ2N}
      />


      <Stack.Screen
        name="AddRegistration"
        component={AddRegistration}
      />

      <Stack.Screen 
        name="Graph 1: Candidates" 
        component={Tableau} 
        options={
          { title: 'Candidates' },
          {headerLeft: null} 
        }
      />

      <Stack.Screen 
        name="Graph 2: Location of Candidates" 
        component={Tableau2} 
        options={
          { title: 'Location of Candidates' },
          {headerLeft: null} 
        }
      />

      <Stack.Screen 
        name="Graph 3: Contact Info of Candidates" 
        component={Tableau3} 
        options={
          { title: 'Contact Information of Candidates' },
          {headerLeft: null} 
        }
      />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
      <MyStack />
  );
}































