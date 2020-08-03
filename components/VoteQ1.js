import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image} from 'react-native';


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
                <Text>Vote Question 1</Text>
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
      }
});