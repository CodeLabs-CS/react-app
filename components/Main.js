import React from "react";
import { View, Button } from "react-native";
import * as firebase from "firebase";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    null
  );
}

export default class Main extends React.Component {
  state = { currentUser: null };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }
  logoutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate("Login");
      });
  };
  render() {
    const { currentUser } = this.state;
    <Button title="Logout" onPress={this.logoutUser} />
    return (
      <View style={{flex: 1, backgroundColor: '#80ED99'}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Home",
              headerStyle: {
                backgroundColor: "#00E07F"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold"
              }
            }}
            initialParams={currentUser}
            
          />
      
        </Stack.Navigator>
      </NavigationContainer>
      <Button title="Logout" onPress={this.logoutUser} />
      </View>
    );
  }
}