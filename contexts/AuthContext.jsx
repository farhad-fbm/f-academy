import { createContext, useState } from "react";
import { auth, db } from './../config/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ShowToast } from './../app/ShowToast';
import { router } from "expo-router";


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);


  const CreateUser = (email, pass, name) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then(async (res) => {
        const newUser = res.user;
        console.log(newUser);
        newUser && await SaveUserData(newUser, name);
      })
      .catch(e => console.log(e.message))
  }

  const SignInUser = (email, pass) => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, pass)
      .then(async(res) => {
        const userData = res.user
        console.log(userData);
        await getUserData(email)
        // setLoading(false);
        ShowToast("Succesfully login", "success")
        router.replace('/(tabs)/home')
      })
      .catch(e => {
        console.log(e);
        // setLoading(false);
        ShowToast("Succesfully login", "error")
      })
      .finally(() => {
        setLoading(false); // Ensures loading state is updated in all cases
      });
  }





  // database----------------fireStore
  const SaveUserData = async (newUser, name) => {
    const userData = { name: name, email: newUser?.email, member: false, uid: newUser?.uid }
    await setDoc(doc(db, 'users', email), userData);
    setUser(userData);
  }
  const getUserData = async (email) => {
    const result = await getDoc(doc(db, 'users', email))
    console.log(result.data());
  }




  const authInfo = { user,setUser, CreateUser, SignInUser,loading };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )

}