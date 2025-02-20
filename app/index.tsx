import { Image, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from './../constant/Colors';





export default function Index() {

  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const bgColor = isDarkMode ? colors.BLACK : colors.WHITE;


  return (
    <SafeAreaView
      style={[{
        flex: 1,
        backgroundColor: isDarkMode ? colors.BLACK : colors.WHITE
        
      },
      
      ]}
    >
      <Image
        source={require('./../assets/images/landing.png')}
        style={{
          width: '100%',
          height: 300,
        }}
      />
    </SafeAreaView>
  );
}
