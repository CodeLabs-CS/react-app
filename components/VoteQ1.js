import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';


export default class VoteQ1 extends React.Component{
    render(){
        return(
            <View>
                <Text>Vote Question 1</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});