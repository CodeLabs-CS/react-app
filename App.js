import React from "react";
import { StyleSheet } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDFZxP132DBpt71b4zujsxNyo1nWWhDDrg",
  authDomain: "newexpoproject-94979.firebaseapp.com",
  databaseURL: "https://newexpoproject-94979.firebaseio.com",
  projectId: "newexpoproject-94979",
  storageBucket: "newexpoproject-94979.appspot.com",
  messagingSenderId: "600609107007",
  appId: "1:600609107007:web:19c73452a0bfe0a6239c8a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import Loading from "./components/Loading";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Main from "./components/Main";

<<<<<<< Updated upstream
=======
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Tableau from './components/Tableau';
import Tableau2 from './components/Tableau2';
import Tableau3 from './components/Tableau3';
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
const App = createAppContainer(RootStack);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A5DFB2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
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































>>>>>>> Stashed changes
