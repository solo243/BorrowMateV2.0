import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const Notification = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingTop: 30 }}>
            <View style={{ paddingHorizontal: 15, height: 80, flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={30} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Notifications</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', paddingTop: 50 }}>
                <Image source={require('../../../assets/Emptybox.png')} style={{ width: 300, height: 300 }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 20 }}>Nothing to see here..!</Text>
            </View>
        </SafeAreaView >
    )
}

export default Notification