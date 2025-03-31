import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation/Navigation";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignUp from "./src/screens/LoginSignUpScreens/SignUp";
import Screen2 from "./src/screens/PostItmeStackScreen/Screen2";
import { Text, View } from "react-native";
import "./global.css";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <Navigation />
        {/* <View className="bg-red-900 "></View> */}
        {/* <ProductDetail /> */}
        {/* <Screen2 /> */}
        {/* <SignUp /> */}
        {/* <StatusBar backgroundColor='black' style='light' />  */}
      </SafeAreaProvider>
    </>
  );
}
