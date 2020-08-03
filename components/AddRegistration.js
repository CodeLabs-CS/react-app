import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image, TouchableHighlight} from 'react-native';


export default class AddRegistration extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                {/* <TouchableHighlight style={styles.backButton}
                onPress={() => this.props.navigation.navigate('VoteQ1')}
                >
                    <Image
                    style={{width: 45, height: 45, left: -160, top: 50, justifyContent: 'flex-start'}}
                    source = {require("../assets/back.png")} 
                    />
                </TouchableHighlight> */}

                <View style={styles.backButton}>
                    <Text 
                    style={styles.textStyle}
                    onPress={() => this.props.navigation.navigate('VoteQ1')}>
                    Back
                    </Text> 
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
        left: -160, 
        top: 50, 
        justifyContent: 'flex-start'
      }
});