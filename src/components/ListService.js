import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 10,
    
  },
  iconSize: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  itemText: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
const listService = [
  {
    name: 'Payment',
    icon: require('../assets/payment.png'),
  },
  {
    name: 'Transfer',
    icon: require('../assets/transfer.png'),
  },
  {
    name: 'QR Code',
    icon: require('../assets/qrCode.png'),
  },
  {
    name: 'Top Up',
    icon: require('../assets/topUp.png'),
  },
];

const ListService = () => {
  return (
    <View>
      <Text style={styles.title}>Service</Text>
      <View style={styles.list}>{listService.map(renderServiceItem)}</View>
    </View>
  );
};
const renderServiceItem = item => {
  return (
    <View key={item.name}>
      <View>
        <TouchableOpacity onPress={item.onPress}>
          <Image source={item.icon} style={styles.iconSize} />
        </TouchableOpacity>
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );
};
export default ListService;
