import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation/Navigation';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignUp from './src/screens/LoginSignUpScreens/SignUp';



export default function App() {
  return (
    <>
      <SafeAreaProvider>
        {/* <Navigation /> */}
        {/* <ProductDetail /> */}
        <SignUp />
        {/* <StatusBar backgroundColor='black' style='light' />  */}
      </SafeAreaProvider>
    </>
  );
}

