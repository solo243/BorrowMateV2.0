import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Gray } from '../constants/Colors';
import HorizontalLine from '../components/HorizontalLine';

import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import VerticalProductCard from '../components/VerticalProductCard';


const Category = ({ navigation, route }) => {

    const { title } = route.params;

    console.log(route.params.title)
    return (
        // <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 16, alignItems: 'center', }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 5 }}>
                        <AntDesign name="arrowleft" size={25} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: '500', color: Gray.gray800 }}> {title ? title : 'Category'}</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 12 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Search")} style={{ padding: 5 }}>
                        <Feather name="search" size={27} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 5 }}>
                        <Ionicons name="bag-handle-outline" size={27} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <HorizontalLine />
            <View style={{ paddingBottom: 50 }}>
                <VerticalProductCard navigation={navigation} />
            </View>
        </SafeAreaView>
        // </ScrollView>

    )
}

export default Category