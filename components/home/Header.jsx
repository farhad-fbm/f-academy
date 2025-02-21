import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from './../../contexts/AuthContext';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {

  const { user, setuser } = useContext(AuthContext);
  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View>
        <Text style={{
          fontSize: 25,
          fontFamily: 'outfit-bold'
        }}>Hey , {user?.name}</Text>
        <Text style={{ fontFamily: 'outfit', fontSize: 18 }}>Let's get Started!</Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="settings-outline" size={24} color="black" />
      </TouchableOpacity>

    </View>
  )
}