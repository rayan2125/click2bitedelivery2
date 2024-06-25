import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import AuthView from '../../component/AuthView'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation()
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  console.log("000000====>",state)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const userData = await AsyncStorage.getItem('UserRegister');
  //     if (userData !== null) {


  //       const { name, email, password, phone } = JSON.parse(userData);
  //       setState({ name, email, password, phone });
  //     } else {
  //       console.log('No data found');
  //     }
  //   } catch (error) {
  //     console.log('Error fetching data:', error);
  //   }
  // };
  const handleSubmit = async () => {
    const { name, email, phone, password } = state;
    console.log("cheking",state)
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!email.trim()) {
      newErrors.email = 'Please enter your email';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    }
    if (!password.trim()) {
      newErrors.password = 'Please enter your password';
    }

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => error === '');
 
    if (isValid) {
      navigation.navigate("Home")
      // try {
      //   await AsyncStorage.setItem('UserRegister', JSON.stringify(state));
      //   console.log('Successfully Registered');
       
      // } catch (error) {
      //   console.log('Not saved', error);
      // }
    }
  };


  const handleChange = (fieldName, text) => {
    setState((prevState) => ({
      ...prevState,
      [fieldName]: text,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: '',
    }));
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "android" ? 'height' : 'padding'}
      style={{ flex: 1, }}>

      <View style={styles.Container}>
      <Image source={require("../../assets/Images/delivery.png")}
          style={styles.logo}
        />
        {Object.keys(state).map((item, index) => {

          return (
            <AuthView
              key={index}
              placeholder={item}
              keyboardType={
                item === 'email' ? 'email-address' :
                  item === 'phone' ? 'phone-pad' :
                    item === 'password' ? 'default' : 'default'}
              inputMode={
                item === 'email' ? 'email' :
                  item === 'phone' ? 'numeric' :
                    item === 'password' ? 'text' : 'default'
              }
              secureTextEntry={item === "password" ? true : false}
              // maxLength={item === "password" ? 8 : undefined}
              onChangeText={(text) => handleChange(item, text)}
              error={errors[item]}
            />
          );
        })}
        <TouchableOpacity
          onPress={handleSubmit}
          style={[styles.btn, { backgroundColor: 'green', marginBottom: 6 }]}
        >
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={[styles.btn, { backgroundColor: '#fb6107', marginBottom: 6 }]}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;



const styles = StyleSheet.create({

  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  btn: {
    top: 10,


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