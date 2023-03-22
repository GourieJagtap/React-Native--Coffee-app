import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { coffeebrown } from '../Constant'
import { DATA } from '../MenuList'
import MenuCard from './MenuCard'


const HomeMain = (props) => {
  return (
      <View style={{flex:1,alignItems:"center",backgroundColor:coffeebrown}}>
        <Text></Text>
      <FlatList
          data={DATA}
          renderItem={({item}) => <MenuCard title={item.title} source={item.source} id={item.id} press={()=>props.navigation.navigate("MenuItems",{itemId:item.id,itemName:item.title,itemMenu:item.menu})}/>}
          keyExtractor={item => item.id}
          numColumns={2} 
        />
    </View> 
  )
}

export default HomeMain