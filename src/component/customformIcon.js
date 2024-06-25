import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper'

const CustomformIcon = ({title,onPress,source}) => {
   
  return (
    <View style={{paddingHorizontal:18,paddingVertical:18, backgroundColor:'white',borderRadius:10,zIndex:9,elevation:10,marginTop:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
      <View style={{flexDirection:'row',alignItems:"center"}}>
        <Icon source={source} size={20} color='orange'/>
      <Text style={{color:"#2B2E35",fontSize: 15, fontWeight: "500",marginHorizontal:10}}>{title}</Text>
      
      </View>
      
      <TouchableOpacity onPress={onPress}>
      <Icon source="greater-than" size={20} color='orange'/>
      </TouchableOpacity>

    </View>
  )
}

export default CustomformIcon

const styles = StyleSheet.create({})