import React from 'react';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';

import Card from '../components/Card';
import ListService from '../components/ListService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  username: {
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text>Hello</Text>
            <Text style={styles.username}>My Name</Text>
          </View>
          <View></View>
        </View>
        <Card />
        <ListService />
      </View>
    </SafeAreaView>
  );
};
export default Home;
