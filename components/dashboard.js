// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as firebase from "firebase";
import { StatusBar } from 'expo-status-bar';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>

        <Button
          color="#6FCF97"
          title="Display Graph"
          onPress={() => this.props.navigation.navigate("Graph 1: Candidates")}
        />

        <Button
          color="#6FCF97"
          title="Logout"
          onPress={() => this.signOut()}
        />     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#293428'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
    color: '#fff'
  }
});
