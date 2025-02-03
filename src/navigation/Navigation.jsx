import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Category from '../screens/Category';
import Orders from '../screens/Orders';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Color, Gray } from '../constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfileEdit from '../screens/StackScreens/UserProfileEdit';
import TostConfigFile from '../constants/TostConfigFile';
import Search from '../screens/StackScreens/Search';
import Notification from '../screens/StackScreens/Notification';
import ProductDetail from '../screens/StackScreens/Detail';




const Navigation = () => {
    return (
        <>
            <NavigationContainer >
                <MyStacks />
            </NavigationContainer>
            <Toast config={TostConfigFile} />
        </>

    )
}

const Stack = createStackNavigator();
export const MyStacks = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Homes' component={BottomTabNavigation} />
        <Stack.Screen options={{ animation: "slide_from_right" }} name="EditProfile" component={UserProfileEdit} />
        <Stack.Screen options={{ animation: "slide_from_bottom" }} name="Search" component={Search} />
        <Stack.Screen options={{ animation: "slide_from_right" }} name="Categories" component={Category} />
        <Stack.Screen options={{ animation: "slide_from_right" }} name="Details" component={ProductDetail} />
        <Stack.Screen options={{ animation: "fade" }} name="Notificaiton" component={Notification} />
    </Stack.Navigator>
)




const Tab = createBottomTabNavigator();
export const BottomTabNavigation = () => (
    <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
    }}>
        <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon: ({ focused }) =>
                focused ? (
                    <Ionicons name="home" size={24} color={Color.secondary} />
                ) : (
                    <Ionicons name="home-outline" size={24} color={Gray.gray500} />
                ),
        }}
        />
        <Tab.Screen name='Category' component={Category} options={{
            tabBarIcon: ({ focused }) =>
                focused ? (
                    <AntDesign name="appstore1" size={24} color={Color.secondary} />
                ) : (
                    <AntDesign name="appstore-o" size={24} color={Gray.gray500} />
                ),
        }} />
        <Tab.Screen name='Orders' component={Orders} options={{
            tabBarIcon: ({ focused }) =>
                focused ? (
                    <MaterialCommunityIcons name="clock-time-four" size={26} color={Color.secondary} />
                ) : (
                    <MaterialCommunityIcons name="clock-time-four-outline" size={26} color={Gray.gray500} />
                ),
        }} />
        <Tab.Screen name='Profile' component={Profile} options={{
            tabBarIcon: ({ focused }) =>
                focused ? (
                    <Ionicons name="person" size={24} color={Color.secondary} />
                ) : (
                    <Ionicons name="person-outline" size={26} color={Gray.gray500} />),
        }} />
    </Tab.Navigator>
)



export default Navigation