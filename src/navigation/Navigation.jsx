import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Color, Gray } from "../constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Toast from "react-native-toast-message";
import { createStackNavigator } from "@react-navigation/stack";
import UserProfileEdit from "../screens/StackScreens/UserProfileEdit";
import TostConfigFile from "../constants/TostConfigFile";
import Search from "../screens/StackScreens/Search";
import Notification from "../screens/StackScreens/Notification";
import ProductDetail from "../screens/StackScreens/Detail";
import Chats from "../screens/StackScreens/Chats";
import Screen2 from "../screens/PostItmeStackScreen/Screen2";
import Screen1 from "../screens/PostItmeStackScreen/Screen1";
import Screen3 from "../screens/PostItmeStackScreen/Screen3";
import Orders from "../screens/Orders";
import SignUp from "../screens/LoginSignUpScreens/SignUp";
import SignIn from "../screens/LoginSignUpScreens/SignIn";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        {/* <LoginSignUp /> */}
        <Auth />
        {/* <MyStacks /> */}
      </NavigationContainer>
      <Toast config={TostConfigFile} />
    </>
  );
};

const Stack = createStackNavigator();
export const MyStacks = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Homes" component={BottomTabNavigation} />
    <Stack.Screen
      options={{ animation: "slide_from_right" }}
      name="EditProfile"
      component={UserProfileEdit}
    />
    <Stack.Screen
      options={{ animation: "slide_from_bottom" }}
      name="Search"
      component={Search}
    />
    <Stack.Screen
      options={{ animation: "slide_from_right" }}
      name="Categories"
      component={Category}
    />
    <Stack.Screen
      options={{ animation: "slide_from_right" }}
      name="Details"
      component={ProductDetail}
    />
    <Stack.Screen
      options={{ animation: "fade" }}
      name="Notificaiton"
      component={Notification}
    />
  </Stack.Navigator>
);

const LoginSignUp = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="SignUp"
      options={{ animation: "slide_from_right" }}
      component={SignUp}
    />
    <Stack.Screen
      name="SignIn"
      options={{ animation: "slide_from_left" }}
      component={SignIn}
    />
  </Stack.Navigator>
);

const PostScreens = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="screen1"
      options={{ animation: "slide_from_left" }}
      component={Screen1}
    />
    <Stack.Screen
      name="screen2"
      options={{ animation: "slide_from_right" }}
      component={Screen2}
    />
    <Stack.Screen
      name="screen3"
      options={{ animation: "slide_from_right" }}
      component={Screen3}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
export const BottomTabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Ionicons name="home" size={24} color={Color.secondary} />
          ) : (
            <Ionicons name="home-outline" size={24} color={Gray.gray500} />
          )
      }}
    />
    <Tab.Screen
      name="Chats"
      component={Chats}
      options={{
        tabBarIcon: ({ focused }) =>
          focused ? (
            // <AntDesign name="appstore1" size={24} color={Color.secondary} />
            <Ionicons
              name="chatbox-ellipses"
              size={25}
              color={Color.secondary}
            />
          ) : (
            // <AntDesign name="appstore-o" size={24} color={Gray.gray500} />
            <Ionicons
              name="chatbox-ellipses-outline"
              size={25}
              color={Gray.gray500}
            />
          )
      }}
    />
    <Tab.Screen
      name="PostScreens"
      component={PostScreens}
      options={{
        tabBarIcon: ({ focused }) =>
          focused ? (
            <AntDesign name="pluscircle" size={23} color={Color.secondary} />
          ) : (
            <AntDesign name="pluscircleo" size={23} color={Gray.gray500} />
          )
      }}
    />
    <Tab.Screen
      name="MyOrders"
      component={Orders}
      options={{
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Ionicons name="newspaper" size={23} color={Color.secondary} />
          ) : (
            <Ionicons name="newspaper-outline" size={23} color={Gray.gray500} />
          )
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Ionicons name="person" size={24} color={Color.secondary} />
          ) : (
            <Ionicons name="person-outline" size={26} color={Gray.gray500} />
          )
      }}
    />
  </Tab.Navigator>
);

const Auth = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  const auth = getAuth();

  useEffect(() => {
    const checkAuthState = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }

      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          setUser(firebaseUser);
          await AsyncStorage.setItem("user", JSON.stringify(firebaseUser)); // Save user
        } else {
          setUser(null);
          await AsyncStorage.removeItem("user"); // Clear user if logged out
        }
        setLoading(false);
      });

      return () => unsubscribe();
    };

    checkAuthState();
  }, []);

  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Color.secondary} />
      </View>
    );

  return <>{user ? <MyStacks /> : <LoginSignUp />}</>;
};

export default Navigation;
