import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import ProductCardVertical from './ProductCardVertical'
import { Gray } from '../constants/Colors'

const VerticalProductCard = ({ value, navigation }) => {

    return (
        <View style={{ position: 'relative', width: '100%', borderTopWidth: 1, borderColor: Gray.gray200 }}>
            <FlatList
                numColumns={2}
                bounces={false}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{ width: '100%', alignSelf: 'center', }}
                data={value ? value : [1, 2, 3, 4, 5, 6, 8]}
                renderItem={({ item }) => (
                    <ProductCardVertical navigation={navigation} data={item} />
                )} />
        </View>
    )
}

export default VerticalProductCard