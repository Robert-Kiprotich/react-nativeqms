import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../services/AuthContext';

const Login = ({navigation}) => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const {isLoading, login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter phone no"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <Button
          title="Login"
          onPress={() => {
            login(email, password);
            //  navigation.navigate('Home');
           console.log(email,password);
          }}
        />
<View style={{marginTop: 20}}>
          <Text>Are you a visitor</Text>
         
            <Text style={styles}>Login as guest</Text>
            <Text style={styles}>Username:guest@mail.com</Text>
            <Text style={styles}>Password:guest123</Text>
          
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#0ceae3'
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor:'#bbb',
    color:'black',
    backgroundColor:'white',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',
  },
});

export default Login;