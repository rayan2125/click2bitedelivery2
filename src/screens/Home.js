import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Divider, Icon } from 'react-native-paper'
import Order from './order'
import Account from './account'

const Home = () => {

  const [handleScreens, setHandleScreens] = useState(0)

  const handleOrder = () => {
    setHandleScreens(0)
  }
  const handleAccount = () => {
    setHandleScreens(1)
  }
  return (
    <View style={{ flex: 1, }}>
      {
        handleScreens === 0 ? <Order /> :
        handleScreens === 1 ? <Account /> : []
      }


      <View style={{ justifyContent: "flex-end", paddingHorizontal: 25, paddingVertical: 25, elevation: 99, zIndex: 9, backgroundColor: "white" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", }}>

          <TouchableOpacity
            onPress={handleOrder}
            style={{
              backgroundColor: handleScreens == 0 ? "orange" : "transparent",
              paddingHorizontal: 18,
              paddingVertical: 18,
              borderRadius: 8,
              width: "50%",
              justifyContent: "center",
              flexDirection: "row", alignItems: "center"
            }}>
            <Icon source="cart-arrow-right" size={20} color={handleScreens == 0 ? "white" : "black"} />
            <Text style={{ marginHorizontal: 10, fontSize: 16, color: handleScreens == 0 ? "white" : "black", fontWeight: "600" }}>
              Orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleAccount}
            style={{
              backgroundColor: handleScreens == 1 ? "orange" : "transparent",
              paddingHorizontal: 18,
              paddingVertical: 18,
              borderRadius: 8,
              width: "50%",
              justifyContent: "center",
              flexDirection: "row", alignItems: "center"
            }}>
            <Icon source="account" size={20} color={handleScreens == 1 ? "white" : "black"} />
            <Text style={{ marginHorizontal: 10, fontSize: 16, color: handleScreens == 1 ? "white" : "black", fontWeight: "600" }}>
              Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})