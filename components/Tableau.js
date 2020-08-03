import React, { Component } from 'react'
import tableauSoftware from 'tableau-api';
import { View, Button, StyleSheet } from 'react-native';

const url = "https://public.tableau.com/views/NC2018StateElectionCandidates/Top20CandidatesinNC2018StateElection?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"

class Tableau extends Component {

    componentDidMount() {
        this.initViz();
    }

    initViz = () => {
        const options = {
            hideTabs : false,
            width: '1520px',
            height : '720px',
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
                        color="#3740FE"
                        title="Dashboard"
                        onPress={() => this.props.navigation.navigate("Dashboard")}/>

                    <Button 
                        color="#3740FE"
                        title="Graph 2"
                        onPress={() => this.props.navigation.navigate("Graph 2: Location of Candidates")}/>

                    <Button 
                        color="#3740FE"
                        title="Graph 3"
                        onPress={() => this.props.navigation.navigate("Graph 3: Contact Info of Candidates")}/>
                    </View>
                </div>
            </View>

        );
    }
}

export default Tableau

const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50
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

