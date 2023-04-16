import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    marginVertical: 30,
    marginHorizontal: 80,
    fontWeight: 'bold',
    color: '#000080',
  },
  button: {
    backgroundColor: '#0000CD',
    padding: 20,
    borderRadius: 15,
    marginVertical: 23,
    marginHorizontal: 15,
  },
});
const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  const login = (userName, passWord) => {
    // setIsLoading(true);

    axios
      .post('http://localhost:9000/api/v1/auth/login', {
        userName,
        passWord,
      })
      .then(res => {
        if (res.status === 200) {
          navigation.push('Home');
        }

        let userInfo = res.data;
        console.log(res);
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        // setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        // setIsLoading(false);
      });
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.header}>Login here</Text>
        <Text style={{fontSize: 17, marginHorizontal: 112, fontWeight: 'bold'}}>
          Welcome back!
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="Username"
          placeholderTextColor={'#696969'}
          value={userName}
          onChangeText={text => setUserName(text)}
          style={{
            backgroundColor: '#DCDCDC',
            padding: 20,
            borderRadius: 15,
            marginTop: 45,
            marginBottom: 30,
            marginHorizontal: 15,
          }}></TextInput>
        <TextInput
          placeholder="Password"
          placeholderTextColor={'#696969'}
          secureTextEntry
          value={passWord}
          onChangeText={text => setPassWord(text)}
          style={{
            backgroundColor: '#DCDCDC',
            padding: 20,
            borderRadius: 15,
            marginHorizontal: 15,
          }}></TextInput>
      </View>

      <TouchableOpacity>
        <Text
          style={{
            color: '#000080',
            fontWeight: 'bold',
            alignSelf: 'flex-end',
            padding: 15,
            marginTop: 10,
          }}>
          Forgot your password ?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          login(userName, passWord);
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 17,
          }}>
          Sign in
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 15,
          }}>
          Create new account
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
