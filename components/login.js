import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Image} from 'react-native';
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
        this.props.navigation.navigate('VoteQ1')
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
          placeholder="Email"
          placeholderTextColor='#fff'
          autoCapitalize = 'none'
          color="white"
          onChangeText={(userName) => {
            this.setState({userName},()=>{
            if (!this.validateEmail(this.state.email)) {
            Alert.alert("Invalid email.")
            }
            })
            }}
          value={this.state.email}
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

        <View style={styles.buttonView}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.userLogin()}>
              <Text style = {styles.buttonText}>
                Sign In
              </Text>
          </TouchableOpacity>
        </View>


        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Don't have an account? Tap here to sign up.
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