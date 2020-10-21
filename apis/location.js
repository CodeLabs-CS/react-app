import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import * as firebase from "firebase";
import ScriptTag from 'react-script-tag';

export default class Location extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        isLoading: true,
        dataSource: null,
        uid: ''
      }
    }
    
    lookup(address, callback) {
    /**
      * Election ID for which to fetch voter info.
      * @type {number}
      */
     var electionId = 2000;

     /**
      * Request object for given parameters.
      * @type {gapi.client.HttpRequest}
      */
     var req = gapi.client.request({
         'path' : '/civicinfo/v2/voterinfo',
         'params' : {'electionId' : electionId, 'address' : address}
     });
    req.execute(callback);
   }

   /**
    * Render results in the DOM.
    * @param {Object} response Response object returned by the API.
    * @param {Object} rawResponse Raw response from the API.
    */
   renderResults(response, rawResponse) {
     var el = document.getElementById('results');
     if (!response || response.error) {
       el.appendChild(document.createTextNode(
           'Error while trying to fetch polling place'));
       return;
     }
     var normalizedAddress = response.normalizedInput.line1 + ' ' +
         response.normalizedInput.city + ', ' +
         response.normalizedInput.state + ' ' +
         response.normalizedInput.zip;
     if (response.pollingLocations.length > 0) {
       var pollingLocation = response.pollingLocations[0].address;
       var pollingAddress = pollingLocation.locationName + ', ' +
           pollingLocation.line1 + ' ' +
           pollingLocation.city + ', ' +
           pollingLocation.state + ' ' +
           pollingLocation.zip;
       var normEl = document.createElement('strong');
       normEl.appendChild(document.createTextNode(
           'Polling place for ' + normalizedAddress + ': '));
       el.appendChild(normEl);
       el.appendChild(document.createTextNode(pollingAddress));
     } else {
       el.appendChild(document.createTextNode(
           'Could not find polling place for ' + normalizedAddress));
     }
   }

   /**
    * Initialize the API client and make a request.
    */
   load() {
     gapi.client.setApiKey('AIzaSyDh6Tw08vz_HI2ccN1nDe0XtMabFVy4SK0');
     lookup('1263 Pacific Ave. Kansas City KS', renderResults);
   }

   componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://apis.google.com/js/client.js?onload=load";
    script.async = true;

    document.body.appendChild(script);
  }
   
}