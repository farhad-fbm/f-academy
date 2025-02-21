import { ActivityIndicator, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Image } from 'react-native';
import colors from './../../constant/Colors';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './../../config/firebaseConfig';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { AuthContext } from '../../contexts/AuthContext';


const AuthForm = ({ greeting, subBtn, isAcc, switchBtn, page }) => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const router = useRouter();
  const { CreateUser, SignInUser, loading } = useContext(AuthContext);

  return (

    <SafeAreaView style={styles.mainContainer}>
      <Image source={require('./../../assets/images/f-logo.png')}
        style={styles.logo} />

      <Text style={styles.titleTxt}>{greeting}</Text>


      {
        page === 'up' &&
        <TextInput placeholder='Full name' onChangeText={(v) => setName(v)} style={styles.textInput} />
      }
      <TextInput placeholder='Email' onChangeText={(v) => setEmail(v)} style={styles.textInput} />
      <TextInput placeholder='Password' onChangeText={(v) => setPass(v)} style={styles.textInput} secureTextEntry={true} />

      <Pressable style={({ pressed }) => [styles.subBtn, { opacity: pressed ? 0.7 : 1, }]}
        onPress={page === 'up'
          ? () => CreateUser(email, pass, name)
          : () => SignInUser(email, pass)}
        disabled={loading}
      >
        {!loading
          ? <Text style={styles.subBtnTxt}>{subBtn}</Text>
          : <ActivityIndicator size={'large'} color={colors.WHITE}/>
        }
      </Pressable>

      <View style={styles.isAccContainer}>
        <Text style={{ fontFamily: 'outfit' }}
        >{isAcc}</Text>
        <Pressable
          onPress={() => router.push(page === "up" ? "./SignIn" : "./SignUp")}
        >
          <Text style={{
            color: colors.PRIMARY,
            fontFamily: 'outfit-bold',
            textDecorationLine: 'underline',

          }}>
            {switchBtn}
          </Text></Pressable>
      </View>


    </SafeAreaView>
  )
}

export default AuthForm





const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 10,
    fontFamily: 'outfit'

  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 15
  },
  titleTxt: {
    fontFamily: 'outfit-bold',
    fontSize: 25,
    paddingTop: 20,
  },

  textInput: {
    borderWidth: 1,
    width: '100%',
    padding: 15,
    fontSize: 18,
    marginTop: 20,
    borderRadius: 8
  },
  subBtn: {
    padding: 15,
    backgroundColor: colors.PRIMARY,
    width: '100%',
    marginTop: 25,
    borderRadius: 8,
  },
  subBtnTxt: {
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    color: colors.WHITE
  },
  isAccContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
    gap: 10
  }
})