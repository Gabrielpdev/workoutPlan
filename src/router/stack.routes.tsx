
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type StackParamList = {
  Splash: undefined;
  Home: undefined;
  CarDetails: undefined;
  Scheduling: undefined;
  SchedulingDetails: undefined;
  SchedulingComplete: undefined;
  MyCars: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

// import { Splash } from '../screens/Splash'
import { Home } from '../screen/Home';

export function StackRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      {/* <Screen name="Splash" component={Splash} /> */}
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}