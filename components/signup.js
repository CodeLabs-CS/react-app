import {StyleSheet, Text, Image, View, TextInput, Button, Alert, ActivityIndicator, TouchableHighlight} from 'react-native';
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

        <View style = {styles.logo}>
          <Image 
          style={{width: 250, height: 250, left: 50, justifyContent: 'center'}}
          source = {require("../assets/splash2.png")} 
          resizeMode={'cover'}
          />
        </View>
        
        <View style={styles.bottom}>
          <Button
            style={styles.buttonStyle}
            color="#fff"
            title="Sign Up"
            onPress={() => this.registerUser()}
          />
        </View>
        

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
          onChangeText={(val) => this.updateInputVal(val, 'email')}
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

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Already Registered? Tap here to log in.
        </Text>
                   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#293428'
  },

  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    color: '#fff',
    top: -350
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    top: -150  
  },

  loginText: {
    color: '#fff',
    marginTop: 0,
    top: -250,
    textAlign: 'center'
  },

  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },


  logo: {
    flex: 1,
    width: "100%",
    height: null,
    justifyContent:'center'
  }

});