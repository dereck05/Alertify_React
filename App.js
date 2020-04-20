import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import Login from './app/pages/Login'

export default class App extends Component<{}> {
  render(){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29434e"/>
        <Login></Login>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#546e7a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
