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
