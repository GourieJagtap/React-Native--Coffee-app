import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './BottomNav/HomeScreen';
import CartScreen from './BottomNav/CartScreen';
import WishList from './BottomNav/WishList';
import Notifications from './BottomNav/Notifications';
import Icon from 'react-native-vector-icons/FontAwesome';
import { coffeebrown, darkBrown } from './Constant';

const Tab = createBottomTabNavigator();
const TabScreen = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:"white",
        tabBarInactiveTintColor:coffeebrown,
        tabBarShowLabel:false,
        tabBarStyle:{
            backgroundColor:darkBrown,
        },
        headerShown:false
    }}
    >
    <Tab.Screen name="Home" component={HomeScreen} 
    options={{
        tabBarLabel:'Home',
        tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
    }}/>
    <Tab.Screen name="Cart" component={CartScreen} 
    options={{
        tabBarLabel:'Cart',
        tabBarIcon: ({ color, size }) => (
            <Icon name="cart-plus" color={color} size={size} />
          ),
    }}/>
    <Tab.Screen name="WishList" component={WishList} 
    options={{
        tabBarLabel:'WishList',
        tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
    }}/>
    <Tab.Screen name="Notifications" component={Notifications} 
    options={{
        tabBarLabel:'Notifications',
        tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} />
          ),
    }}/>
  </Tab.Navigator>

  )
}

export default TabScreen
