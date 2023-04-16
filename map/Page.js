import React from 'react';
import {View, StyleSheet, Text,SafeAreaView, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default () =>{
    return(
        <SafeAreaView>
            <TouchableOpacity>
            <Text>Hello World</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}