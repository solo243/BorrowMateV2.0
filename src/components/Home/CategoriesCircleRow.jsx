import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { Color, Gray } from '../../constants/Colors';
import { CategorieData } from '../../constants/CateforiesData';
const CategoriesCircleRow = ({ navigation }) => {



    const Style = StyleSheet.create({
        mainContiner: {
            width: '100%',
            paddingVertical: 7
        },
        circleItem: {
            backgroundColor: 'red',
            // padding: 22,
            width: 64,
            height: 64,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            borderWidth: 0.3,
            borderColor: Color.borderColor
            //  borderColor: Gray.gray200
        },
        cateName: {
            textAlign: 'center',
            maxWidth: 70,
            fontSize: 12,
            color: Gray.gray600,
            alignItems: 'center',
            justifyContent: 'center'
        },
        contWrapper: {
            alignItems: 'center',
            gap: 4,
            justifyContent: 'center'
        }
    })
    return (
        <View style={Style.mainContiner}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{ gap: 15, paddingTop: 4, paddingHorizontal: 13, }}
                data={CategorieData}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Categories", { title: item.name })} style={Style.contWrapper} key={item.id}>
                        <View style={[Style.circleItem, { backgroundColor: item.bg }]}>
                            {item.icon}
                        </View>
                        <Text numberOfLines={1} style={Style.cateName}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )} />
        </View>
    )
}


export default CategoriesCircleRow