
import { Tabs } from 'expo-router'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


const TabLayout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false
    }}>
      <Tabs.Screen name='Home'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          tabBarLabel:'Home'
        }} />,
      <Tabs.Screen name='Explore'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="search-outline" size={size} color={color} />,
          tabBarLabel: 'Explore'
        }}/>,
      <Tabs.Screen name='Progress'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="analytics-outline" size={size} color={color} />,
          tabBarLabel: 'Progress'
        }}/>,
      <Tabs.Screen name='Profile'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="person-circle-outline" size={size} color={color} />,
          tabBarLabel: 'Profile'
        }} />
    </Tabs>
  )
}

export default TabLayout;