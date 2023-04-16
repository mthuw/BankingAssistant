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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 100,
    position: 'absolute',
    marginTop: 500,
    marginHorizontal: 130,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
const Welcome = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/background.jpeg')}>
      <StatusBar barStyle="light-content" translucent={true}></StatusBar>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('Login')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default Welcome;
