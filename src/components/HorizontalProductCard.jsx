import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CategoriesTextRow from './Home/CategoriesTextRow'
import ProductCard from './ProductCardHorizontal'

const HorizontalProductCard = ({ text, value }) => {
    return (
        <View >
            <CategoriesTextRow text={text} />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={value}
                contentContainerStyle={{ paddingHorizontal: 3, paddingTop: 12 }}
                renderItem={({ item, index }) => (
                    <View key={index} style={{ paddingHorizontal: 5, }}>
                        <ProductCard value={item} />
                    </View>
                )}
            />
        </View>
    )
}

export default HorizontalProductCard 