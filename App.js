


import React, { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
} from 'react-native';



import Navigation from './src/components/Navigation';
import {AuthProvider} from './src/services/AuthContext';



 
function App(){
  return (
    <AuthProvider>
    <StatusBar backgroundColor="#06bcee" />
    <Navigation/>
  </AuthProvider>
   
    

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

