import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import * as firebase from "firebase";
import ScriptTag from 'react-script-tag';

export default class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      dataSource: null,
      uid: ''
    }
  }
  

  componentDidMount(){
    fetch("https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyDh6Tw08vz_HI2ccN1nDe0XtMabFVy4SK0")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       loading: false,
       dataSource: responseJson
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }

    renderItem=(data)=>
        <TouchableOpacity style={styles.list}>
        <Text style={styles.lightText}>{data.item.id}</Text>
        <Text style={styles.lightText}>{data.item.name}</Text>
        <Text style={styles.lightText}>{data.item.electionDay}</Text></TouchableOpacity>
    render(){
        if(this.state.loading){
    return( 
        <View style={styles.loader}> 
        <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )}
    return(
        <View style={styles.container}>
        <FlatList
           data= {this.state.dataSource}
           ItemSeparatorComponent = {this.FlatListItemSeparator}
           renderItem= {item=> this.renderItem(item)}
           keyExtractor= {item=>item.id.toString()}
        />
       </View>
       )}
    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }
  }
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        backgroundColor: '#fff'
      },
      textStyle: {
        fontSize: 15,
        marginBottom: 20
      }
  })