import 'react-native-gesture-handler';
import 'react-native-get-random-values';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { useTraining, TrainingProvider } from './src/hooks/training';

import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,  
  Archivo_600SemiBold,  
} from '@expo-google-fonts/archivo';

import {
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

import theme from './src/styles/theme';
import { Routes } from './src/router';

export default function App() {
  const { trainingStorageLoading } = useTraining();

  const [ fontsLoaded ] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,  
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  })

  if(!fontsLoaded || trainingStorageLoading) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme} >
      <TrainingProvider>
        <StatusBar translucent style="light" />
        <Routes />
      </TrainingProvider>
    </ThemeProvider>
  );
}