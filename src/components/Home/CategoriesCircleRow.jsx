import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Color, Gray } from '../../constants/Colors';
const CategoriesCircleRow = ({ navigation }) => {

    const Data = [
        {
            id: 1,
            name: "Fashion",
            icon: <FontAwesome5 name="tshirt" size={24} color="#2DD4BF" />,
            bg: "#ECFDF5"
        },
        {
            id: 2,
            name: "Electronics",
            icon: <FontAwesome6 name="laptop" size={24} color="#FB923C" />,
            bg: "#FFF7ED"
        },
        {
            id: 3,
            name: "Tools",
            icon: <Entypo name="tools" size={26} color="#22D3EE" />,
            bg: "#ECFEFF"
        },
        {
            id: 4,
            name: "Furniture",
            icon: <MaterialCommunityIcons name="sofa-single" size={31} color="#60A5FA" />,
            bg: "#EFF6FF"
        },
        {
            id: 5,
            name: "Automobiles",
            icon: <FontAwesome5 name="car-alt" size={28} color="#FB923C" />,
            bg: "#FFF7ED"
        },
        {
            id: 6,
            name: "Appliancs",
            icon: <MaterialCommunityIcons name="fridge" size={29} color="#34D399" />,
            bg: "#ECFDF5"
        },
        {
            id: 7,
            name: "Sports",
            icon: <Ionicons name="tennisball" size={28} color="#22D3EE" />,
            bg: "#ECFEFF"
        },
    ]


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
                data={Data}
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