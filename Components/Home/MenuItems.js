import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { coffeebrown } from '../Constant';
import {DATA} from "../MenuList"
import { Card } from 'react-native-paper';


const MenuItems = ({route}) => {
  const {itemId,itemName,itemMenu}=route.params;

  const renderItem=({item})=>{
    return (
      <Card mode='elevated' elevation={3} style={{width:140,margin:10,borderRadius:15}} >
        <Text></Text>
        <View style={{justifyContent:"center",alignItems:"center",padding:10}}>
            <Image source={item.imgsrc} style={{height:100,width:100,borderRadius:50}}></Image>
            <Text style={{padding:6,fontWeight:800}}>{item.name}</Text>
        </View>
      </Card>
    )
  }
 
  return (
    <View style={{flex:1,backgroundColor:coffeebrown}}>
      <View style={{flex:0.1,alignItems:"center",justifyContent:"center"}}>
        <Text style={{fontFamily:"monospace",fontWeight:900,fontSize:20}}>{itemName}</Text>
      </View>
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <FlatList data={itemMenu} renderItem={renderItem} 
          numColumns={2} 
          keyExtractor={item => item.pid}/>
      </View>
    </View>
  )
}

export default MenuItems

const styles = StyleSheet.create({})
