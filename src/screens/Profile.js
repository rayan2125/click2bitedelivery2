import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper'

const Profile = () => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20 }}>
            <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon source="chevron-left" />
                    <Text>Account Settings</Text>
                </View>
                <View>
                    <Text>Img</Text>
                </View>
                <View>
                    <View>
                        <Text>Full name</Text>

                    </View>
                </View>
                <TouchableOpacity
                    // onPress={()=>navigation.navigate('PendingForms')}
                    style={{ backgroundColor: '#FF8A0099', paddingVertical: 15, paddingHorizontal: 15, justifyContent: "center", alignItems: 'center', marginTop: 10, borderRadius: 20 }}>
                    <Text style={{fontWeight:"700", color:"white", fontSize:16}}>Change Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})