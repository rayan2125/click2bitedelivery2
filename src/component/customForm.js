import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider as PaperProvider, TextInput, DefaultTheme } from 'react-native-paper';
const theme = {
    ...DefaultTheme,
    roundness: 12, 
  };
const CustomForm = ({title,placeholder,right,mode,editable,error,keyboardType,value}) => {
  return (
  
    <View>
    <Text style={{ fontSize: 16, color: "#2B2E35" }}>{title}</Text>
         <TextInput
           mode={mode}
           keyboardType={keyboardType}
           placeholder={placeholder}
           style={{ marginTop: 5 }} 
           activeOutlineColor={theme.colors.outline}
           right={right}
           editable={editable}
           value={value}
         />
         <Text style={{ color: "red",marginTop:5,marginBottom:5 }}>{error}</Text>
   </View>
  
   
  )
}

export default CustomForm

const styles = StyleSheet.create({})