import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';

const DailogBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.dialog}>
                <View style={{
                    height: 80, width: 80, borderRadius: 100, borderColor: "green", borderWidth: 1,
                    alignSelf: 'center',
                    justifyContent: 'center', alignItems: 'center',
                    marginBottom: 10
                }}>
                    <Icon source="check" size={70} color='green' />
                </View>
                <Text style={{ color: "green" }}>Your Personal Infomation was Succefully</Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', alignSelf: 'flex-end', marginTop: 15 }}>
                    <TouchableOpacity style={{ marginHorizontal: 30 }}>
                        <Text style={{ color: 'red' }}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: 'black' }}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // semi-transparent background to overlay the entire screen
    },
    dialog: {
        position:'absolute',
        // alignItems:'center',
        backgroundColor: 'white',
        paddingVertical: 25,
        paddingHorizontal: 25,
        borderRadius: 10,
        elevation: 5, // elevation for shadow effect (for Android)
    },
});

export default DailogBox;
