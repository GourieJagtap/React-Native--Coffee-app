import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { Image } from 'react-native'

const MenuCard = (props) => {
  return (
    <Pressable key={props.id} onPress={props.press}>
      <Card mode='elevated' elevation={3} style={{width:140,margin:10,borderRadius:15}} >
        <Text></Text>
        <View style={{justifyContent:"center",alignItems:"center",padding:10}}>
            <Image source={props.source} style={{height:100,width:100,borderRadius:50}}></Image>
            <Text style={{padding:6,fontWeight:800}}>{props.title}</Text>
        </View>
      </Card>
    </Pressable>
  )
}

export default MenuCard