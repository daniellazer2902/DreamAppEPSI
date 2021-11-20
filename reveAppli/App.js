// App.js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './Pages/MainPage';
import DemineurPage from './Pages/DemineurPage';
import HomePage from './Pages/HomePage';
import NavBarre from './Components/NavBarre';
import StatPage from './Pages/StatPage';
import AddDreamPage from './Pages/AddDreamPage';
import ViewDreamPage from './Pages/ViewDreamPage';








const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            
            <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
            <Stack.Screen name="DemineurPage" component={DemineurPage} options={{ headerShown: false }} />
            <Stack.Screen name="NavBarre" component={NavBarre} options={{ headerShown: false }} />
            <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
            <Stack.Screen name="StatPage" component={StatPage} options={{ headerShown: false }} />
            <Stack.Screen name="AddDreamPage" component={AddDreamPage} options={{ headerShown: false }} />
            <Stack.Screen name="ViewDreamPage" component={ViewDreamPage} options={{ headerShown: false }} />

          </Stack.Navigator>
        </NavigationContainer>
      
    )
  }
}