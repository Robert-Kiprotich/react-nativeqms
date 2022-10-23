import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {BASE_URL} from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  


const [QueueInfo, setQueueInfo] = useState({});
 
  
  const login = (email, password) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/login`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);

    axios
      .post(
        `${BASE_URL}/logout`,
        {},
        {
          headers: {Authorization: `Bearer ${userInfo.token}`},
        },
      )
      .then(res => {
        console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

 

  const queue = (service_id, email,name, phone) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/queue`, {
        service_id,
        name,
        email,
        phone
      })
      .then(res => {
        let QueueInfo = res.data;
        setQueueInfo(QueueInfo);
        AsyncStorage.setItem('QueueInfo', JSON.stringify(QueueInfo));
        setIsLoading(false);
        console.log(QueueInfo);
      })
      .catch(e => {
        console.log(`data error ${e}`);
        setIsLoading(false);
      });
  };

 

  const isData = async () => {
    try {
      setSplashLoading(true);

      let QueueInfo = await AsyncStorage.getItem('QueueInfo');
      QueueInfo = JSON.parse(QueueInfo);

      if (QueueInfo) {
        setQueueInfo(QueueInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`ino data${e}`);
    }
  };

  useEffect(() => {
    isData();
  }, []);
 
  
 
  


  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

 
  useEffect(() => {
    isLoggedIn();
   
   

  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        QueueInfo,  
        splashLoading,
        login,
        queue,
        logout
        
      }}>
      {children}
    </AuthContext.Provider>
  );
};

