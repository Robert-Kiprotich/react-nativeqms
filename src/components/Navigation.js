import React, {useContext} from 'react';
import {Text,Button, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Ticket from '../screens/Ticket';

import {AuthContext} from '../services/AuthContext';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const Navigation = ({navigation}) => {
  const {userInfo, splashLoading} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {splashLoading ? (
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : userInfo.token ? (
          <>
           <Stack.Screen name="Choose service" component={Home}/>
           <Stack.Screen name="Ticket" component={Ticket}/>
           </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            /> 
          </>
        )
       
      }
      
     

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;