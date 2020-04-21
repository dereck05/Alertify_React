import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';




export default class Logo extends Component<{}> {
    render() {
        return(
            <View>
                <Image source={require('../images/logo.png')}/>
            </View>
            
        )
    }
}