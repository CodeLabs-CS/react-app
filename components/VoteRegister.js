import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image} from 'react-native';


export default class VoteRegister extends React.Component{
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
                    Are you registered to vote?
                    </Text>
                </View>


                <View>
                    <Button>
                        
                    </Button>
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
      }
});