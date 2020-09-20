import React from 'react';

import MainScreen from './src/screens/main';
import Write from './src/screens/write';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Saved from './src/screens/savedNotes';
import Edit from './src/screens/editNote';


const App = () => {
  const Stack = createStackNavigator();
 // return(<Saved />)
return(<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='main' component={MainScreen} options={{headerShown: false}}/>
    <Stack.Screen name = 'write' component = {Write} options={{title: false}}/>
    <Stack.Screen name = 'saved' component = {Saved} options={{title: false}}/>
    <Stack.Screen name = 'edit' component = {Edit} options={{title: false}}/>
  </Stack.Navigator>
</NavigationContainer>)
}
export default App;
