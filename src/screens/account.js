import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-paper'
import CustomTextFeild from '../component/customTextFeild'
import CustomformIcon from '../component/customformIcon'
import { useNavigation } from '@react-navigation/native'

const Account = () => {
    const navigation= useNavigation()
    const data = [
        { id: 1, name: "Edit Profile" },
        { id: 2, name: "Payments" },
        { id: 3, name: "Order History" },
        { id: 4, name: "Support" },
        { id: 5, name: "Terms and Conditions" },
        { id: 6, name: "Privacy Policy" },
    ]
    const defaultImgae = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEUAAAD////4+Pjm5ub09PSXl5egoKBjY2OysrLb29vJycn7+/sfHx+/v7/T09Pp6em4uLg7OzswMDCCgoJaWlomJiYYGBiPj48RERFFRUV6enqsrKxAQEBUVFRvb28rKytpG4vvAAAFKElEQVR4nO2c65KiMBCFEQIISkS8IqPz/m+5UrszNeTG6aQNTtWe/zv1bQh9PZisArWTTX7ru3Ny3Xb9IW/kLvQvrlZJ0L/O8vIjUdSXRShXAFQ2dCrQN1gbxOUNJfK9DWnUR5FGhxKFi+iv1pu4UFK7SSbdq5hQBwRpVB4NKitRpiR5eF14OlSFIz3VZTGg6i0JKtnL10PVNKRR9OtOhKqvdKiOTEWDot2nL22pt50ElUHhSddRvBCKEAumur0OCkgtNq1fBVV5XPIvfZKuFQHq7s/0DO2vgWpDmJKEEkNhKNGHQZWE+gqGasKYSEcFQ1lLX1R3fiiPnKcKzzYoFFzX2YVXfCCUCH56lGQDQslwJsLzA6FyDig414BQzh4P1ZEXSnxyQH3yQskzBxRc7GFQgXnvn65oUMegAiqpn2pZoS48UMM7QhWsUAxJZhSaaKJCXf5DgeJ9fG/59jHFKTQjY1BrHqiaFcpn2KLrjA7QMKjdiQPqhHZZYD3FUA0nSQ8yoVA3Dig0y6BQwa3oKLgdBaF2DDd9z93NbB7hUAeUCW5GGWpPNErhUCK4Sj/BTPiAIzjToLUwBWpH3DSo+iBMiPFJXuBRUUaxOFQadFR7AhNlEBsUQElrIwJUSKzCYxQRapV6p2U4FdOhvKdUJ+Iei7bF8ozr1D0kcd/nNTxD+wVfKB8qMhN9h0zutuDSLgCK2tk0dCYfX0JL6CL2eL0SBrWq4CVb6WcO8rKVpDlUHZ89rpM/1DOMHueZHr7+G3//VDODVXrdpkCo1aZxLN8fAUiBnjxRHA05el8OAS6zYKinqiYvu59Aee3jA/KCEpms26FYV2ZLm9hVUlY72wEJORRDK2UGniACJdaH+9dypvR4pZr79zleoAA/CyVaJVRSA2KlbMAe9ayBcA5q0KN3R/KIXPQ4Oxst3FCNuQA+ws+wMe/kSnfZ54LaWMuUE1YjpdY/cHb+AQdU5to89sBhNa4MWTo6ZjuUekHV/+thpg+fc146XhgrFOB0u9hPK63nm0T7EM0GVSE93va4NoZDkUMV18NGZYHCN9m3dhrlhVzDLjmbqcoCRZkGn/pH3srqKTlcyp4yXbO8g2Yopl3MrCyrbiNUFonJNiEyQjGMglEZy3gTFINXCtanqfoyQXn6Xv1kWuEaoFhWHrgMgV2HSoHuiVOGo9KhYt6oUVv9VulQkQ/K9AJqUBnLZpaibh4qVjD/IS2sq1AiyLbsJ22erUL5fTAQJq2wUqEWeHr681Ohor97o9T3T4EKXaD5SV1IKFCRU8w/qbZGBYrF+UpX44LasJgi6CpcUBxmah/dXFDx6uCpeuGAWuaeJ2pRNYVa6J6r4XMK5f2xVajWDqjAb2P8dbBDLfXyqf75CVS1SJIZtbdD8fgBfdSlVqjFIkJyyqxQw2JQZ2mFWqTC+6vaCrVY7FTcVRMoJjO1jwYr1EKFy6jCBsVhUWSHShdLfb8OapH+6o2h8v9QoH7XRX/LOPWeuW+50uVqrxLessjLWL5E8dF0GDRtsaIuQH7q5oB6yw55iTHsqM414FgqfCof/imTPJ4PjqlSvxxTp8OLTBPU6b4KFXuHNapTV37abmaBjkazPmlQm+ixSv8hIX3fV0UO63fdXGLYIcuoA6EPg1vGaAFg+ckGTHeTYclolgj9CR5cZguO2esimL6GnpPlozGbf0pGKI0PNq+Z3f42Z6MORrI7GF3uxSw/vujKz3ie3T7PNKuHQ9lt2Qa01+3+cWnljOf5D1peRPKWrlewAAAAAElFTkSuQmCC"
    const [imageState, setImageState] = useState(defaultImgae)
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: "white", justifyContent: "flex-start", paddingVertical: 12, paddingHorizontal: 12 }}>
                <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <Icon source="account" size={25} />
                    <Text style={{fontSize:24,color:"black"}}>Account</Text>
                </View>
            </View>
            <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>

            <View style={{ paddingVertical: 20, paddingHorizontal: 20,margin:10 }}>
                <View>
                    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 20, }}>
                        <View style={{ flexDirection: "row",alignItems:'center' }}>
                            <View style={{ height: 90, width: 90, borderRadius: 100, borderColor: "orange", justifyContent: "center", alignItems: "center", borderWidth: 1 }}>

                                <Image source={{ uri: imageState }} style={{ height: 80, width: 80, resizeMode: "contain", borderRadius: 99 }} />
                            </View>
                            <View style={{ marginHorizontal: 10,paddingHorizontal:10,paddingVertical:10 }}>
                                <View style={{flexDirection:"row", alignItems:'center',marginHorizontal: 10}}>
                                    <Icon source="account"color='orange' size={20} />
                                    <Text style={{marginHorizontal:10,fontSize:15}}> Dhananjay</Text>
                                </View>
                                <View style={{flexDirection:"row", alignItems:'center',marginHorizontal: 10}}>
                                    <Icon source="phone" color='orange' size={20}/>
                                    <Text style={{marginHorizontal:10,fontSize:15}}>8104781464</Text>
                                </View>
                                <View style={{flexDirection:"row", alignItems:'center',marginHorizontal: 10}}>
                                    <Icon source="email" color='orange' size={20}/>
                                    <Text style={{marginHorizontal:10,fontSize:15}}> Dhananjay@gmail.com</Text>
                                </View>

                            </View>
                        </View>
                        <View style={{ 
                            position:'absolute',
                            right:0,
                            backgroundColor:"white",
                            borderRadius:100,
                            width:60,
                            height:30,
                            borderColor: "red", flexDirection: "row", justifyContent: "space-around", alignItems:"center", }}>
                            <Text>4.8</Text>
                            <Icon source='star' size={25} color='#FF8A00' />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{fontSize:18,fontWeight:"700", color:"#292D32"}}>Options</Text>


                    {data.map((item, index) => {
                        return (
                            <CustomformIcon
                                key={index}
                                title={item.name}
                                source={
                                    item.id === 1 ? "account" :
                                        item.id === 2 ? "credit-card-outline" :
                                            item.id === 3 ? "account" :
                                                item.id === 4 ? "account" :
                                                    item.id === 5 ? "account" :
                                                        item.id === 6 ? "account" : ''



                                }
                            />
                        )
                    })}
                    <View style={{ paddingHorizontal: 18, paddingVertical: 18, backgroundColor: 'white', borderRadius: 10, zIndex: 9, elevation: 10, marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate("Login")}
                        style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Icon source="logout" size={20} color='orange' />
                            <Text style={{ color: "#FF8A00", fontSize: 15, fontWeight: "500", marginHorizontal: 10 }}>Log Out</Text>

                        </TouchableOpacity>

                        <TouchableOpacity >
                            {/* <Icon source="greater-than" size={20} color='orange'/> */}
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            </ScrollView>

        </View>
    )
}

export default Account

const styles = StyleSheet.create({})