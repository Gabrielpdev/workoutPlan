import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

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
  const [ fontsLoaded ] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,  
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme} >
      <StatusBar translucent style="light" />
      <Routes />
    </ThemeProvider>
  );
}


// import React from 'react';
// import { Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

