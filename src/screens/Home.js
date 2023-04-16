import React from 'react';
import {
  ImageBackground,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import Card from '../components/Card';
import ListService from '../components/ListService';
import RecentTransaction from '../components/RecentTransaction';

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 17,
    paddingBottom: 7,
    color: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 250,
    borderRadius: 65,
  },
  chatBot: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
const Home = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/homeWallpaper.png')}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.header}>
            <View>
              <Text style={{fontSize: 16, color:"#fff"}}>Account</Text>
              <Text style={styles.username}>My Name</Text>
            </View>
            <View></View>
          </View>
          <Card />
          <ListService />
          <RecentTransaction />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.push('ChatBot');
            }}>
            <Text style={styles.buttonText}></Text>
            <Image
              style={styles.chatBot}
              source={require('../assets/chatBot.png')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default Home;
