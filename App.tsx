import * as React from 'react';

import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import Home from './Home'
import Countries from './Countries';
import Weather from './Weather';

export interface Stack{
  name: string;
  navigation: StackNavigationProp<any>;
  route: RouteProp<any>;
}
const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Weather App" component={Home} />
        <Stack.Screen name="Countries" component={Countries} />
        <Stack.Screen name="Weather" component={Weather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;