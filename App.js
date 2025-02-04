import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation/Navigation';
import 'react-native-gesture-handler';
import ProductDetail from './src/screens/StackScreens/Detail';
import Category from './src/screens/Category';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <Navigation />
        {/* <ProductDetail /> */}
        <StatusBar backgroundColor='black' style='light' />
      </SafeAreaProvider>
    </>
  );
}

