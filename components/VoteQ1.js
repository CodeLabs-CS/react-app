import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image, Button} from 'react-native';

export default class VoteQ1 extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style = {styles.logo}>
                    <Image 
                    style={{width: 150, height: 150, left:135, justifyContent: 'center'}}
                    source = {require("../assets/splash2.png")} 
                    resizeMode={'cover'}
                    />
                    </View>

                <View style = {styles.questionStyle}>
                    <Text style={styles.textStyle}>
                    Have you ever voted?
                    </Text>
                </View>

            <View style={{flex: 1, flexDirection: 'row'}}>

                <View style={styles.buttonStyle}>
                    <Text 
                    style={styles.textStyle}
                    onPress={() => this.props.navigation.navigate('AddRegistration')}>
                    Yes
                    </Text>  
                </View>

                <View style={styles.buttonStyle}>
                    <Text 
                    style={styles.textStyle}
                    onPress={() => this.props.navigation.navigate('VoteQ2N')}>
                    No
                    </Text> 
                </View>

            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
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
        flex: 1,
        position: 'absolute',
        top: 250,
      },

      textStyle: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
      },

      buttonStyle: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        top: -300,
        left: 35,
        width: 100,
        justifyContent: 'center'
      }
});