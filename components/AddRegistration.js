import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image, TouchableHighlight} from 'react-native';


export default class AddRegistration extends React.Component{
  render(){
    return(
      <View style={styles.container}>
          <View>
          <TouchableHighlight 
          style={styles.backButton}
          onPress={() => this.props.navigation.navigate('VoteQ1')}
          >
          <Text 
          style={styles.textStyle}
          onPress={() => this.props.navigation.goBack}>
          Back
          </Text> 
          </TouchableHighlight>
          </View>

          <View style = {styles.logo}>
              <Image 
              style={{width: 150, height: 150, left:135, justifyContent: 'center'}}
              source = {require("../assets/splash2.png")} 
              resizeMode={'cover'}
              />
          </View>

          <View style = {styles.questionStyle}>
              <Text style={styles.textStyle}>
              Where are you registered to vote?
              </Text>
          </View>

          <View style = {styles.addButton}>
              <Image 
              style={{width:50, height:50, position:'absolute', justifyContent: 'center'}}
              source = {require("../assets/add.png")} 
              // resizeMode={'cover'}
              />
          </View>

          <Text 
              style={styles.instrucStyle}>
                  Tap to add a registration
          </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: "center",
        backgroundColor: '#293428',
    },

    logo: {
        flex: 1,
        width: "100%",
        height: null,
        justifyContent:'center',
        top: -300
      },

      questionStyle: {
        position: 'absolute',
        top: 250,
      },

      textStyle: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
      },

      backButton:{
        left: -140, 
        top: 70, 
        justifyContent: 'flex-start'
      },

      addButton: {
        //   flex: 1,
        flexDirection: 'column', 
        position: 'relative',
        left: -30,
        top: -500,
        justifyContent:'space-between'

      },

      instrucStyle: {
        position: 'relative',
        left: 0,
        top: -410,
        color: '#fff',
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold'
      }
});