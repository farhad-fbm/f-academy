import { Alert, Platform, ToastAndroid } from "react-native";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const ShowToast = ({ message, type }) => {

  if (Platform.OS === "android") {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }


  else if (Platform.OS === "web") {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    } else if (type === "warn") {
      toast.warn(message);
    }else {
      toast.info(message);
    } 
  }
  
  
  else {
    Alert.alert(message);
  }
};

