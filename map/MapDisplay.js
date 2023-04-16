import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Platform,
  Button,
  Image,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {error} from 'console';
Geolocation.getCurrentPosition(info => {
  console.log(info);
});

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});

const App = () => {
  const [currentLong, setCurrentLong] = useState('...');
  const [currentLat, setCurrentLat] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocation();
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting location...');
    //Give the current location
    Geolocation.getCurrentPosition(
      position => {
        setLocationStatus('You are here');
        const currentLong = JSON.stringify(position.coords.longitude);
        const currentLat = JSON.stringify(position.coords.latitude);
        setCurrentLat(currentLat);
        setCurrentLong(currentLong);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const subscribeLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        setLocationStatus('You are here');
        console.log(position);
        const currentLong = JSON.stringify(position.coords.longitude);
        const currentLat = JSON.stringify(position.coords.latitude);
        setCurrentLong(currentLong);
        setCurrentLat(currentLat);
      },
      error => {
        setLocationStatus(error.message);
      },
      {enableHighAccuracy: true, maximumAge: 1000},
    );
  };

  return (
    <SafeAreaView>
      <Text style={styles.boldText}>{locationStatus}</Text>
      <View>
        <Text>Longitude: {currentLong}</Text>
        <Text>Latitude: {currentLat}</Text>
        <View>
          <Button title="Button" onPress={getOneTimeLocation} />
        </View>
      </View>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 41.8933203,
          longitude: 12.4829321,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
    </SafeAreaView>
  );
};
export default App;
