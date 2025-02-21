import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../constant/Colors';

export default function Button({ text, type = 'fill', onPress }) {
  return (
    <TouchableOpacity onPress={onPress}
      style={{
        width: '100%',
        padding: 15,
        borderRadius: 15,
        marginTop: 15,
        borderWidth: 1,
        borderBlockColor:colors.PRIMARY,
        backgroundColor: type === 'fill' ? colors.PRIMARY : colors.WHITE

      }}>
      <Text style={{
        textAlign: 'center',
        fontFamily: 'outfit',
        fontSize: 18,
        color: type == 'fill' ? colors.WHITE : colors.PRIMARY

      }} >{text}</Text>
    </TouchableOpacity>
  )
}