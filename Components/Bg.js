import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const Bg = ({children}) => {
  return (
    <View>
      <ImageBackground source={require("/Users/apple/Documents/programs/reactnative/pratice/coffeeapp/Images/bg.jpg")} style={{height:900}}></ImageBackground>
      <View style={{position:"absolute"}}>
        {children}
      </View>
    </View>
  )
}

export default Bg