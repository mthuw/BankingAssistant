import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 10,
  },
  container:{
    marginTop: 12
  },
  image:{
    width:40,
    height: 40,
    marginRight:10
  }, 
  items:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  itemBody:{
    flex:1
  },
  itemType:{
    fontWeight: 'bold',
   
  }
});

const listTransaction = [
  {
    type: 'Netflix',
    icon: require('../assets/netflixLogo.png'),
    date: 'Apr 14, 12:30',
    payment: '-50.000 VND',
  },
  {
    type: 'Spotify',
    icon: require('../assets/spotifyLogo.png'),
    date: 'May 14, 12:30',
    payment: '-25.000 VND',
  },
];

const renderTransactionItem = item => (
  <View key={item.type} style={styles.items}>
    <View>
      <Image source={item.icon} style={styles.image} />
    </View>
    <View style={styles.itemBody}>
      <Text style={styles.itemType}>{item.type}</Text>
      <Text>{item.date}</Text>
    </View>
    <View>
        <Text >{item.payment}</Text>
    </View>
  </View>
);

const RecentTransaction = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Transaction</Text>
      <View style={styles.list}>{listTransaction.map(renderTransactionItem)}</View>
    </View>
  );
};
export default RecentTransaction;
