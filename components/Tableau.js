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
            <div ref = {div => this.vizContainer = div}>
                <Button 
                    color="#3740FE"
                    title="Back"
                    onPress={() => this.props.navigation.navigate("Dashboard")}/>

                <Button 
                    color="#3740FE"
                    title="Graph 2"
                    onPress={() => this.props.navigation.navigate("Tableau 2")}/>

                <Button 
                    color="#3740FE"
                    title="Graph 3"
                    onPress={() => this.props.navigation.navigate("Tableau 3")}/>
            </div>

        );
    }
}

export default Tableau

