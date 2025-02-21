import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, browserLocalPersistence, getReactNativePersistence, setPersistence } from "firebase/auth";  // Fixed function name
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from "react-native";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAHILToAELav8CCX6q-i18qZi5lNUr71oA",
  authDomain: "projects-2025-5fe86.firebaseapp.com",
  projectId: "projects-2025-5fe86",
  storageBucket: "projects-2025-5fe86.firebasestorage.app",
  messagingSenderId: "349093756242",
  appId: "1:349093756242:web:00e4551b970561cb4f8e8b",
  measurementId: "G-4PXV8YKP5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


let auth;
if (Platform.OS === "web") {
  auth = getAuth(app);
  setPersistence(auth, browserLocalPersistence)
    .then(() => console.log("Persistence set for web"))
    .catch((error) => console.error("Error setting web persistence:", error));
} else {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage) // Mobile persistence
  });
}
export { auth };


export const db = getFirestore(app);



// const analytics = getAnalytics(app);