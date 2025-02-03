import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


const TostConfigFile = {
    success: ({ text1, text2, props }) => (
        <View style={{
            backgroundColor: '#111827', // Green background
            borderRadius: 10,
            borderCurve: 'continuous',
            flexDirection: 'row',
            shadowColor: '#000',
            paddingVertical: 20,
            width: '85%',
            alignItems: 'center',
            gap: 10,
            paddingStart: 10,
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3, // Shadow for Android
        }}>
            <Ionicons name="checkmark-circle" size={24} color="white" />
            <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>{text1}</Text>
        </View >

    )
}

export default TostConfigFile