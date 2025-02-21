import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';
import { AllContexts } from './../contexts/AllContexts';

export default function RootLayout() {


  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf')
  })
  return (
    <AllContexts>
      <Stack screenOptions={{ headerShown: false }}>
        
      </Stack>
    </AllContexts>
  );
}
