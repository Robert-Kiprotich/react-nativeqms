import React, { useContext, useEffect,useState } from 'react';
import axios from 'axios';
import { Button, StyleSheet,TouchableOpacity, Text,TextInput, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../services/AuthContext';
import {BASE_URL} from '../config';
import SelectList from 'react-native-dropdown-select-list';


 



const Home = ({navigation}) => {
  
  
 
  const [selected, setSelected] = React.useState("");

  const [service_id, setServiceId] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const {isLoading,queue,setIsLoading} = useContext(AuthContext);
  const [data,setData] = React.useState([]);

  React.useEffect(() => {
  

  axios.get(`${BASE_URL}/kiosk`)  
    .then((response) => {
   
      let newArray = response.data.services.map((service) => {
        
        return {key: service.id, value: service.name}
        
       
      })
      console.log(response.data.services); 
     
      setData(newArray) 
    })
    .catch((e) => {    
      console.log(e)
    })
  }
    
    
,[])

  
  return (
    <AuthContext.Provider>
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.wrapper}>

      <SelectList   setSelected={setSelected} data={data} value={service_id}    onSelect={() => {
        setServiceId(service_id)
                            //console.log(service_id)
                            // alert(selected)
                        }}
	  />
        <TextInput
          style={styles.input}
          value={name}
          placeholder="enter name"
          onChangeText={text => setName(text)}
        />

        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={text => setEmail(text)}
        />
         <TextInput
          style={styles.input}
          value={phone}
          placeholder="Enter phone"
          onChangeText={text => setPhone(text)}
          
        />
        <Button
          title="Submit"
          onPress={() => {
            queue(selected,email,name, phone) 
             navigation.navigate('Ticket')
            // console.log(selected)
          }}
        />
      </View>
    </View>
    </AuthContext.Provider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0ceae3'
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
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },

});

export default Home;