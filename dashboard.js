// components/dashboard.js
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as firebase from "firebase";

/*import * as Tableau from './Tableau';
import * as Tableau2 from './Tableau2';
import * as Tableau3 from './Tableau3';*/

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
      uid: firebase.auth().currentUser.uid,
    }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>

        <Button
          color="#3740FE"
          title="Display Graph"
          onPress={() => this.props.navigation.navigate("Tableau")}
        />

        <Button
          color="#3740FE"
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
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});