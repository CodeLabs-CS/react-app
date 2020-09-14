import {TouchableOpacity, StyleSheet, Text, Image, View, TextInput, Button, Alert, ActivityIndicator, TouchableHighlight} from 'react-native';
import * as firebase from "firebase";
import React, { Component } from 'react';

export default class Signup extends Component {
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false,
    };
  }
  updateInputVal = (val, prop) => {
  const state = this.state;
  state[prop] = val;
  this.setState(state);
  }
  checkEmail = (val, prop) => {
    firebase.auth().fetchSignInMethodsForEmail(val)
    .then(results => {
    if (results.length == 0 || !Array.isArray(results)) {
      const state = this.state;
      state[prop] = results;
      this.setState(state);
    }else{
      console.log(error);
    }})
  }
  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to sign up.')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('VoteQ1')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return (
      <View style={styles.container}>  
        <View style={styles.top}>
          <Image 
            style={{width: 250, height: 250, justifyContent: 'center'}}
            source = {require("../assets/splash2.png")} 
            resizeMode={'cover'}
            />
        </View>
          
        <View style={styles.middle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Full Name"
            placeholderTextColor='#fff'
            autoCapitalize = 'none'
            value={this.state.displayName}
            onChangeText={(val) => this.updateInputVal(val, 'displayName')}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            placeholderTextColor='#fff'
            autoCapitalize = 'none'
            onChangeText={(val) => this.checkEmail(val, 'email')}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            placeholderTextColor='#fff'
            autoCapitalize = 'none'
            value={this.state.password}
            onChangeText={(val) => this.updateInputVal(val, 'password')}
            maxLength={15}
            secureTextEntry={true}
          />

          <View style={styles.buttonView}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => this.registerUser()}>
                <Text style = {styles.buttonText}>
                  Sign Up
                </Text>
            </TouchableOpacity>
          </View>

          <Text 
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('Login')}>
            Already Registered? Tap here to log in.
          </Text> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#293428',
  },

  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  top: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    paddingTop: 60,
  },

  middle: {
    height: '60%',
    padding: 20,
  },

  inputStyle: {
    color: '#fff',
    backgroundColor: '#476D44',
    padding: 15,
    margin: 8,
    borderRadius: 30,
    borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: 0.3,
  },

  buttonView: {
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#30B784',
    margin: 20,
    borderRadius: 100,
    width: 150,
    padding: 20,
  },

  buttonText: {
    textAlign: "center",
    color: 'white',
    fontWeight: "bold",
  },

  loginText: {
    color: "#fff",
    textAlign: 'center',
    margin: 20,
  }

});