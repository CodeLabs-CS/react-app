import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Image} from 'react-native';
import * as firebase from "firebase";

export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to sign in!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Dashboard')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#fff"/>
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
            color="#fff"
            title="Sign In"
            onPress={() => this.userLogin()}
          />   
        </View>

        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          placeholderTextColor='#fff'
          color="white"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor='#fff'
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Don't have an account? Tap here to sign up.
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
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#293428'
  },


  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#fff",
    borderBottomWidth: 1,
    top: -400
  },

  loginText: {
    color: '#fff',
    marginTop: 0,
    textAlign: 'center',
    top: -250
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
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    top: -200  
  },


});