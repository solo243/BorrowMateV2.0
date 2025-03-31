import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Gray } from '../../constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';


const CategoriesTextRow = ({ text, Refirect }) => {
    return (
        <View style={style.mainRow}>
            <Text style={style.cateText}>{text}</Text>
            {/* <TouchableOpacity style={style.viewAllRow}> */}
                {/* <Text style={style.viewAllText}>View All</Text> */}
                {/* <AntDesign name="arrowright" size={15} color={Gray.gray500} /> */}
            {/* </TouchableOpacity> */}
        </View>
    )
}

const style = StyleSheet.create({
    mainRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        alignItems: 'center'
    },
    cateText: {
        fontSize: 18,
        fontWeight: '600'
    },
    viewAllRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    viewAllText: {
        fontSize: 12,
        color: Gray.gray500
    }
})
export default CategoriesTextRow