import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import HorizontalLine from '../HorizontalLine';




const OverviewRow = () => {
    return (
        <View style={style.overViewCont}>
            <Text style={style.detailTextHead}>Overview</Text>
            {/* <HorizontalLine /> */}
            <HorizontalLine />
            <View style={style.dateLocationCont}>
                <View style={style.detailCont}>
                    <FontAwesome6 name="location-dot" size={24} color="black" />
                    <Text style={style.thisText}>Location</Text>
                    <Text>Ahmadabad , Gujarat</Text>
                </View>
                <View style={style.postDateCont}>
                    <Entypo name="calendar" size={24} color="black" />
                    <Text style={style.thisText}>Posting date</Text>
                    <Text>19-JUN-2024</Text>
                </View>
            </View>
            <HorizontalLine />
        </View>
    )
}

const style = StyleSheet.create({
    thisText: {
        fontSize: 13,
        fontWeight: '700'
    },
    overViewCont: {
        paddingVertical: 20,
        gap: 10,
        width: '100%',
    },
    detailTextHead: {
        fontSize: 20,
        fontWeight: '600',
        paddingHorizontal: 15,
    },
    dateLocationCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailCont: {
        alignItems: 'center',
        maxWidth: 210,
        width: '50%',
        height: '100%',
        gap: 3
    },
    postDateCont: {
        alignItems: 'center',
        maxWidth: 210,
        width: '50%',
        height: '100%',
        borderLeftWidth: 2,
        borderColor: 'lightgray'
        , gap: 3
    },
})

export default OverviewRow