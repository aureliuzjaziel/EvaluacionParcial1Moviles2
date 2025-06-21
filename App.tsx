import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import Navegador from './src/navigation/Navegator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Navegador/>
  );
}