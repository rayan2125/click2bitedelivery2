import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AuthView from '../../component/AuthView'

import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation()


    const dispatch = useDispatch()
    const [logDetail, setLogDetail] = useState('')
    const [valided, setValided] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setErroremail] = useState('')
    const [error, setError] = useState('')
    useEffect(() => {
        fetchData()
        fetchRegister()
        const unsubscribe = navigation.addListener('focus', () => {
            setErroremail('');
            setError('');
        });
        return unsubscribe;
    }, [navigation])


    const fetchData = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData');


            if (userData !== null) {
                let data = JSON.parse(userData)
               
                const { email, password } = JSON.parse(userData);


            } else {

                console.log('No data found');
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };
    const fetchRegister = async () => {
        try {
            const userData = await AsyncStorage.getItem('UserRegister');
            setLogDetail(userData)

            if (userData !== null) {
                let data = JSON.parse(userData)




            } else {

                console.log('No data found');
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };


    const handleSubmit = async () => {
        let isValid = false;

        if (email === "") {
            setErroremail("Please enter Email..!");
            isValid = false;
        } else if (email !== "") {
            setErroremail("");
            isValid = true;
        }

        isValid = false;



        if (password === "") {
            setError("please Enter password..!");
            isValid = false;
        } else if (password !== "" && password.length < 6) {
            setError("please Enter min 6 characters");
            isValid = false;
        } else if (password !== "" && password.length > 5) {
            setError("");
            isValid = true; // Changed to true since this condition indicates password is valid
        }

        if (isValid) {
            try {
                await AsyncStorage.setItem('userData', JSON.stringify({ email, password }));
                console.log('Data stored successfully!');
                const data = null
                navigation.navigate(data === null ? "PendingForms" : "Home")
                setEmail('')
                setPassword('')
            } catch (error) {
                console.error('Error storing data:', error);
            }
        }

        setValided(isValid)

        return isValid;
    };


    return (
        <View style={styles.login}>
            <Image source={require("../../assets/Images/delivery.png")}
                style={styles.logo}
            />
            <AuthView
                title="Email"
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
                placeholder="Enter Email ..."
                isvalid={error ? true : false}
                textIn={email}
                error={errorEmail}
                valid={valided}
            />

            <AuthView
                title="Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                placeholder="Enter Password ..."
                isvalid={error ? true : false}
                textIn={password}
                error={error}
            />



            <TouchableOpacity style={[styles.btn, {
                backgroundColor: "green",
                columnGap: 5,

            }]} onPress={() => navigation.navigate("PendingForms")}>
                <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, {
                backgroundColor: "#fb6107",
                marginBottom: 6,
                top: 10

            }]} onPress={handleSubmit}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    login: {
        flex: 1,
        // backgroundColor:"red",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    },
    btn: {
        // top: 10,


        width: "70%", height: 40,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontWeight: "bold"
    }
})