import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Bg from './Bg'
import { Button } from 'react-native-paper'
import { coffeebrown, coffeetext } from './Constant'


const GetStarted = (props) => {
  return (
    <Bg>
      <View style={{flex:1,justifyContent:"center",
      alignItems:"center",height:700 ,width:360}}>
          <Text style={{fontSize:15,color:coffeetext}}>IT'S A GREAT DAY FOR</Text>
          <Text style={{fontSize:60,color:"white",fontWeight:800,fontFamily:"serif"}}>Coffee</Text>
        <Image source={require("/Users/apple/Documents/programs/reactnative/pratice/coffeeapp/Images/coffee.png")} style={{height:200,width:200,margin:50}}></Image>
          <Button labelStyle={{fontSize: 30}} buttonColor={coffeebrown} icon="coffee" mode="contained-tonal" style={{position:'absolute',bottom:40,padding:5,borderRadius:50}} onPress={()=>{props.navigation.navigate("HomeScreen")}}>
            <Text style={{fontSize:20,fontWeight:800}}>ORDER NOW</Text>
          </Button>
      </View>
    </Bg>
  )
}

export default GetStarted

const styles = StyleSheet.create({})