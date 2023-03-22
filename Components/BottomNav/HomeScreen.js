import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { coffeebrown, darkBrown } from '../Constant';

import { Appbar } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { DATA } from '../MenuList';
import MenuCard from '../Home/MenuCard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from './CartScreen';
import HomeMain from '../Home/HomeMain';
import MenuItems from '../Home/MenuItems';
const Stack= createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <View style={{flex:1}}>
     <Appbar.Header style={{backgroundColor:darkBrown,height:80}}>
      <Appbar.Content title="The Caffeine Factor" color='white' style={{alignItems:"center"}}/>
    </Appbar.Header>
    <NavigationContainer independent={true} >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="home" component={HomeMain}></Stack.Screen>
        <Stack.Screen name="MenuItems" component={MenuItems}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}

export default HomeScreen

