import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from './Components/GetStarted';
import Bg from './Components/Bg';
import TabScreen from './Components/TabScreen';
const Stack= createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetStarted" component ={GetStarted}></Stack.Screen>
        <Stack.Screen name="HomeScreen" component ={TabScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    // backgroundImage
  }
})