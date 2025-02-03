import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation/Navigation';
import 'react-native-gesture-handler';
import ProductDetail from './src/screens/StackScreens/Detail';
import Category from './src/screens/Category';



export default function App() {
  return (
    <>
      {/* <Category /> */}
      {/* <Search /> */}
      <Navigation />
      {/* <ProductDetail /> */}
      <StatusBar backgroundColor='black' style='dark' />
    </>
  );
}

