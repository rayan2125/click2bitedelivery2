import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Divider, Icon } from 'react-native-paper'
import Offline from './offline'
import Online from './online'
import { useDispatch, useSelector } from 'react-redux'
import { setOnlinedata } from '../redux/Reducers/modeReducers'

const Order = () => {
    const selector = useSelector(state=>state.modeData)
    const dispatch = useDispatch()
    console.log("checking selector is ",selector)

    const [dataMode, setDataMode] = useState(0)
    console.log("checking ",dataMode)

    const handleMode = (mode) => {
        if(mode===0){
            dispatch(setOnlinedata(1))
        } else{
            dispatch(setOnlinedata(0))
        }
        setDataMode((dataMode + 1) % 2);
       
        
    }
    return (
        <View style={{ flex: 1, }}>

            <View style={{ justifyContent: "flex-start", paddingHorizontal: 25, paddingVertical: 25 }}>
                <View style={{ justifyContent: "space-between", flexDirection: "row", }}>
                    <View>

                        <TouchableOpacity
                            onPress={()=>handleMode(dataMode)}
                            style={{
                                backgroundColor: selector == 0 ? "red" : "green", flexDirection: "row", paddingHorizontal: 10, paddingVertical: 10,

                                borderRadius: 20
                            }}>
                            {
                                selector === 1 &&
                                <View style={{ backgroundColor: "#34A853", height: 20, width: 20, borderRadius: 100 }}></View>
                            }
                            <Text style={{ color: "#000000", marginHorizontal: 10 }}>{selector === 0 ? "offline" : "Online"}</Text>
                            {
                                selector === 0 &&
                                <View style={{ backgroundColor: "#A91C1CED", height: 20, width: 20, borderRadius: 100 }}></View>
                            }
                        </TouchableOpacity>
                    </View>
                    <Icon source="bell" color={selector === 0 ? 'black' : "#F8B200"} size={30} />
                </View>
            </View>
            <Divider style={{ backgroundColor: "black", height: 2 }} />
            {
                 selector === 0 ?
                    <Offline /> :
                    selector === 1 ?
                     <Online /> : []
            }


        </View>
    )
}

export default Order

const styles = StyleSheet.create({})