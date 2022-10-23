import React, {useContext} from 'react';
import {Button, StyleSheet, Text,Toast, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../services/AuthContext';


var RNFS = require('react-native-fs');




const Ticket = () => {
  const { isLoading,QueueInfo, logout} = useContext(AuthContext);
  
 


 const txtDownload = async() => {
 // create a path you want to write to
 var path = RNFS.DownloadsDirectoryPath + '/test.txt';

 // write the file
 RNFS.writeFile(path, QueueInfo.queue.token_number, 'utf8')

 .then((success) => {
  
 console.log('FILE WRITTEN!');
 })
 .catch((err) => {
 console.log(err.message);
 });
 await RNFS.copyFile(DownloadsDirectoryPath, `RNFS.DownloadDirectoryPath/${fileName}`)
}
 
  

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
     
      <View style={[styles.card,styles.shadowProp]} >

          <Text style={styles.letters}>
          Ticket Number:
            <Text style={styles.number}>
         {QueueInfo.queue.token_number}
            </Text>
          </Text>
         
      </View>

      <Button title="Download ticket" color="cyan"  onPress={txtDownload}/>
      <Button title="Logout" color="cyan" onPress={logout} />
     
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
  welcome: {
    fontSize: 18,
    marginBottom: 8,
    
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  number:{
    fontSize: 80,
  },
  letters :{
   
    justifyContent: 'center',
    alignItems: 'center',
    fontColor:'black'
  }

});

export default Ticket;