import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';


export default class LoadingScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Loading Screen</Text>
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