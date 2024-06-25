import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Divider, Icon } from 'react-native-paper'

const Offline = () => {
    const data = [
        { id: 1, hour: '12.2 hrs', },
        2,
        3,
        4,
        5,
        6,
    ]
    return (
        <View style={{ flex: 1, paddingHorizontal: 25, paddingVertical: 25 }}>
            <View >
                <Text style={{ borderColor: 'black', borderWidth: 1 }}>Today -23</Text>

            </View>
            <View style={{ marginTop: 10, flex: 1 }}>
                <Text>
                    Today’s Progress
                </Text>
                <FlatList
                    data={data}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    width: '40%',
                                    padding: 10,
                                    margin: 15,
                                    // gap:15,
                                    backgroundColor: "#FAD29F", paddingVertical: 25, paddingHorizontal: 20, justifyContent: "center", alignItems: "center",
                                    borderRadius: 18
                                }}>
                                <Text>
                                    12.2 hrs
                                </Text>
                                <Text>Total login Hours</Text>
                            </View>
                        )
                    }}
                />

            </View>
        </View>
    )
}

export default Offline

const styles = StyleSheet.create({})