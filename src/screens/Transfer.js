import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@500&family=Lato&family=PT+Sans:wght@700&family=Poppins:wght@100;200;300;400;500;600;700&family=Roboto+Mono:wght@100&family=Roboto:wght@400;700;900&family=Signika:wght@500&display=swap');
</style>;

const Transfer = () => {
  const [senderId, setSenderId] = useState('');
  const [contractNum, setContractNum] = useState('');
  const [recipientAccountEmail, setRecipientAccountEmail] = useState('');

  const handleTransfer = () => {};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    headerText: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#fff',
      marginTop: 20,
    },
    subheading: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    },
    acountNum: {
      fontSize: 14,
      color: '#fff',
    },
    border: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      marginTop: 10,
      color: '#fff',
    },
    text: {
      color: '#fff',
    },
  });
  return (
    <ImageBackground
      source={require('../assets/transfer.jpeg')}
      style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <View>
        <View style={styles.heading}>
          <Text style={styles.headerText}>Transfer electric bill</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Image
            source={{uri: 'https://via.placeholder.com/50'}}
            style={{width: 50, height: 50, borderRadius: 25}}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.subheading}>Account number</Text>
            <Text style={styles.acountNum}>0123456789</Text>
          </View>
        </View>
        <Text style={styles.text}>User's ID:</Text>
        <TextInput
          placeholder="Enter your ID"
          placeholderTextColor="white"
          keyboardType="numeric"
          style={styles.border}
          value={senderId}
          onChangeText={setSenderId}
        />
        <Text style={styles.text}>Contract ID number:</Text>
        <TextInput
          placeholder="Enter your contract number"
          placeholderTextColor="white"
          keyboardType="numeric"
          style={styles.border}
          value={contractNum}
          onChangeText={setContractNum}
        />
        <Text style={styles.text}>Send receipt to:</Text>
        <TextInput
          placeholder="address@gmail.com"
          placeholderTextColor="white"
          keyboardType="email-address"
          style={styles.border}
          value={recipientAccountEmail}
          onChangeText={setRecipientAccountEmail}
        />
        <TouchableOpacity
          onPress={handleTransfer}
          style={{
            backgroundColor: '#007AFF',
            borderRadius: 5,
            padding: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 16}}>Chuyển tiền</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Transfer;
