import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import colors from './../../constant/Colors';
import { router } from 'expo-router';

const SignUp = () => {
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
        paddingHorizontal: 10

      }}
    >
      <Image source={require('./../../assets/images/f-logo.png')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 15
        }}
      />

      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 25,
          paddingTop: 20,
        }}
      >
        Create New Account</Text>



      <TextInput
        textContentType='name'
        placeholder='Full name'
        style={styles.textInput}
      />
      <TextInput
        textContentType='emailAddress'
        keyboardType='email-address'
        placeholder='Email'
        style={styles.textInput}
      />
      <TextInput
        textContentType='password'
        secureTextEntry={true}
        placeholder='Password'
        style={styles.textInput}
      />

      <Pressable
        style={[
          {
            padding: 15,
            backgroundColor: colors.PRIMARY,
            width: '100%',
            marginTop: 25,
            borderRadius: 8,
          },
          ({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]
        ]}
      >
        <Text
          style={{
            fontFamily: 'outfit-bold',
            textAlign: 'center',
            color: colors.WHITE

          }}
        >Create Account</Text>
      </Pressable>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 25,
          gap: 10

        }}
      >
        <Text style={{
          fontFamily:'outfit'
        }}
        >Already have an account?</Text>
        <Pressable
          onPress={()=>router.push('./SignIn')}
        >
          <Text style={{
            color: colors.PRIMARY,
            fontFamily: 'outfit-bold',
            textDecorationLine: 'underline',
            
          }}>
            Sign In Here
          </Text></Pressable>
      </View>


    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    width: '100%',
    padding: 15,
    fontSize: 18,
    marginTop: 20,
    borderRadius: 8

  }
})