import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAID_0rrn_QhwdhR5rNag-fbUuyuaQjvSE",
  authDomain: "react-app-febbc.firebaseapp.com",
  databaseURL: "https://react-app-febbc.firebaseio.com",
  projectId: "react-app-febbc",
  storageBucket: "react-app-febbc.appspot.com",
  messagingSenderId: "378992588494",
  appId: "1:378992588494:web:f27382930c6d44c492c29f",
  measurementId: "G-0Z97Y1Z435"
};

// if (!firebase.apps.length) {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
// }

export default firebaseApp;