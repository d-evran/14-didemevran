import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ParacikBakiyeScreen from '../screens/Cüzdanim/ParacikBakiyeScreen';
import TLBakiyeScreen from '../screens/Cüzdanim/TLBakiyeScreen';
import KartlarimScreen from '../screens/Cüzdanim/KartlarimScreen';

const Tab = createMaterialTopTabNavigator();

const MyWalletScreen = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarIndicatorStyle: { borderBottomColor: "black", borderBottomWidth: 2 }     
    }}
  >
    <Tab.Screen
      name="Paracik Bakiye"
      component={ParacikBakiyeScreen}
      options={{tabBarLabelStyle:{textTransform:'none'}}}
    />
    <Tab.Screen
      name="TL Bakiye"
      component={TLBakiyeScreen}
      options={{tabBarLabelStyle:{textTransform:'none'}}}
      />
      <Tab.Screen
      name="Kartlarim"
      component={KartlarimScreen}
      options={{tabBarLabelStyle:{textTransform:'none'}}}
    />
  </Tab.Navigator>
  )
}

export default MyWalletScreen

const styles = StyleSheet.create({})