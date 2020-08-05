import React, { Component } from 'react'
import tableauSoftware from 'tableau-api';
import { View, Button, StyleSheet } from 'react-native';

const url = "https://public.tableau.com/views/NC2018StateElectionCandidatesContactInfo/ContactInfo?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"

class Tableau3 extends Component {

    componentDidMount() {
        this.initViz();
    }

    initViz = () => {
        const options = {
            hideTabs : false,
            width: '380px',
            height : '350px',
        }
        const vizContainer = this.vizContainer;
        this.div = new window.tableauSoftware.Viz(vizContainer, url, options);
    }
    render() {
        return (
            <View style={ styles.MainContainer}>
            <div ref = {div => this.vizContainer = div}>
                <View style={ styles.bottomView }>
                <Button 
                    color="#6FCF97"
                    title="Dashboard"
                    onPress={() => this.props.navigation.navigate("Dashboard")}/>

                <Button 
                    color="#6FCF97"
                    title="Graph 1"
                    onPress={() => this.props.navigation.navigate("Graph 1: Candidates")}/>

                <Button 
                    color="#6FCF97"
                    title="Graph 2"
                    onPress={() => this.props.navigation.navigate("Graph 2: Location of Candidates")}/>
                </View>
            </div>
        </View>
        )
    }
}

export default Tableau3

const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        backgroundColor: '#293428'
    },
 
    bottomView:{
 
      width: '100%', 
      height: 50, 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      padding: 50,
      bottom: -100
    },
  });

