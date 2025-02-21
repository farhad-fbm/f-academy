import { Image, Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from '../constant/Colors';

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../config/firebaseConfig";
import { useContext, useEffect, } from "react";
import { doc, getDoc } from "firebase/firestore";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";







export default function Index() {
  const router = useRouter();
  const { user, setUser } = useContext(AuthContext);




  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("User logged in:", user);

        try {
          const result = await getDoc(doc(db, "users", user?.email))
          if (result.exists()) {
            setUser(result.data())
            router.replace('/Home')
            setTimeout(() => {
            },500)
          }
        } catch (e) { console.log(e); }



      } else console.log("No user logged in");
    })
    return () => unsubscribe();
  }, [])


  return (
    <SafeAreaView style={{
      flex: 1,
      // backgroundColor: isDarkMode ? colors.BLACK : colors.WHITE,
      backgroundColor: colors.WHITE
    }}
    >
      <Image
        source={require('./../assets/images/landing.png')}
        style={{
          width: '100%',
          height: 300,
          marginTop: 60
        }}
      />

      <View style={{
        padding: 25,
        backgroundColor: colors.PRIMARY,
        height: '100%',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35
      }}>
        <Text style={{
          fontSize: 30,
          textAlign: 'center',
          color: colors.WHITE,
          fontFamily: 'outfit-bold'
        }}>Welcome to F-Academy</Text>
        <Text style={{
          fontSize: 18,
          color: colors.WHITE,
          marginTop: 20,
          textAlign: 'center',
          fontFamily: 'outfit'
        }}>Transform your ideas into engaging educational content, effortlessly with AI !</Text>


        <View style={styles.container}>
          <Pressable
            style={styles.button}
            onPress={() => router.push('/auth/SignUp')}
          >
            <Text style={[styles.buttonText, { color: colors.PRIMARY }]}>
              Get Started</Text>
          </Pressable>

          <Pressable
            style={[styles.button, {
              backgroundColor: 'none',
              borderWidth: 2,
              borderColor: colors.WHITE
            }]}
            onPress={() => router.push('/auth/SignIn')}
          >
            <Text style={[styles.buttonText, { color: colors.WHITE }]}>
              Already have an account?</Text>

          </Pressable>
        </View>



      </View>
    </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#f8f9fa',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: colors.WHITE,

  },
  buttonText: {
    color: colors.BLACK,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'outfit-bold'
  },
});