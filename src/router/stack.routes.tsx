
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type StackParamList = {
  Splash: undefined;
  Home: undefined;
  CreateTraining: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

// import { Splash } from '../screens/Splash'
import { Home } from '../screen/Home';
import { CreateTraining } from '../screen/CreateTraining';

export function StackRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      {/* <Screen name="Splash" component={Splash} /> */}
      <Screen name="Home" component={Home} />
      <Screen name="CreateTraining" component={CreateTraining} />
    </Navigator>
  )
}