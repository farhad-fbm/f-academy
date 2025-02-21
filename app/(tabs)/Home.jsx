import { View, Text, Platform } from 'react-native'
import React from 'react'
import Header from '../../components/home/Header'
import Colors from './../../constant/Colors'
import NoCourse from '../../components/NoCourse'
export default function Home() {
  return (
    <View style={{
      padding: 25,
      paddingTop: Platform.OS == 'android' && 30,
      flex: 1,
      backgroundColor: Colors.WHITE
      
    }}>
      <Header />
      <NoCourse/>
    </View>
  )
}