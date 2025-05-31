import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Bienvenida from './src/screens/Bienvenida';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenida" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bienvenida" component={Bienvenida} />
        <Stack.Screen name="MenuPrincipal" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}