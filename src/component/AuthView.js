import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome6"
import { TextInput, useTheme } from 'react-native-paper';



const AuthView = ({
  outlineColor,
  activeOutlineColor,
  title, placeholder,
  onChangeText, textIn,
  error,
  secureTextEntry,
  keyboardType,
  inputMode,
  maxLength
 
}) => {

  const getOutlineColor = () => {
    if (outlineColor && !activeOutlineColor) {
      return outlineColor;
    } else {
      return  theme.colors.primary
      
    }
  };
 
 
  const theme = useTheme();
  return (
    <View style={styles.mainView} >


      <TextInput
        mode="outlined"
        label={title}
        placeholder={placeholder}
        value={textIn}
        keyboardType={keyboardType}
        inputMode={inputMode}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        maxLength={maxLength}
        outlineColor={getOutlineColor()}
        
      />
      <Text style={{ color: "red", }}>{error}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    width: "80%",
    margin: 5,

  },

  inputView: {

    backgroundColor: "red"
  }
})

export default AuthView
