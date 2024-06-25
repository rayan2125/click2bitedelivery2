import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Forms from '../screens/Forms/forms';
import PendingForms from '../screens/Forms/pendingForms';
import Personalform from '../screens/Forms/personalform';
import Adharcardform from '../screens/Forms/adharcardform';
import PanCardForm from '../screens/Forms/panCardform';
import DrivingLicenseForm from '../screens/Forms/drivingLicenseform';
import Vehicleform from '../screens/Forms/vehicleform';
import Bankform from '../screens/Forms/bankform';
import Account from '../screens/account';
import Profile from '../screens/Profile';
import Order from '../screens/order';
import Login from '../screens/Auth/login';
import Register from '../screens/Auth/register';
// import { useDispatch, useSelector } from 'react-redux';



const Stack = createStackNavigator();

const RootNavigations = () => {
  // const dispatch = useDispatch()
  // const selector = useSelector(state => state.authData)
  // const dataSetWise = selector === null ? "PendingForms" : "Home"
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='Forms' component={Forms} />
      <Stack.Screen name='PendingForms' component={PendingForms} />
      <Stack.Screen name='Personalform' component={Personalform} />
      <Stack.Screen name='Adharcardform' component={Adharcardform} />
      <Stack.Screen name='PanCardForm' component={PanCardForm} />
      <Stack.Screen name='DrivingLicenseForm' component={DrivingLicenseForm} />
      <Stack.Screen name='Vehicleform' component={Vehicleform} />
      <Stack.Screen name='Bankform' component={Bankform} />
      <Stack.Screen name='Account' component={Account} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Order' component={Order} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register}/>
    </Stack.Navigator>
  );
}

export default RootNavigations

const styles = StyleSheet.create({})