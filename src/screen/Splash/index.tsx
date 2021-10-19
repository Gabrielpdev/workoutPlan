import React , { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StackParamList } from '../../router/stack.routes';

import { Container } from './styles';

import logo from '../../assets/logo.png';

type splashScreenProp = NativeStackNavigationProp<StackParamList, 'Home'>;

export function Splash() {  
  const navigation = useNavigation<splashScreenProp>();

  function startApp(){
    navigation.navigate('Home')
  }

  useEffect(() => {
    setTimeout(startApp, 3000)
  },[])

  return (
    <Container>
      <Image source={logo} style={{ width: 290, height: 290}} />
    </Container>
  );
};


