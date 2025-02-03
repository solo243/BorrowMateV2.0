import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { Color, Gray } from '../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Data } from '../constants/SampleData';

const ProductCard = ({ value }) => {
    return (
        <TouchableOpacity activeOpacity={1} style={{
            width: 160
            , alignItems: 'center'
        }}>
            <View style={style.imageWrapper}>
                <Image source={{ uri: value.images[0] }} style={style.productImage} />
            </View>
            <TouchableOpacity style={style.heartIcon}>
                {Data.isFev ? <Ionicons name="heart" size={23} color={Color.cherryRed} />
                    : <Ionicons name="heart-outline" size={23} color="gray" />
                }
            </TouchableOpacity>
            <View>
                <Text
                    numberOfLines={2}
                    style={style.productTitle}>
                    {value.title}
                </Text>
                <Text style={style.productPrice}>
                $ {value.price} / {Data.duration}
                </Text>
            </View>
        </TouchableOpacity >
    )
}

const style = StyleSheet.create({
    imageWrapper: {
        width: 155, // Fixed width
        height: 180, // Fixed height
        // backgroundColor: 'gray', // Placeholder color
        borderRadius: 7,

        overflow: 'hidden', // Ensures images don't overflow
    },
    productTitle: {
        paddingVertical: 8,
        lineHeight: 20,
        paddingHorizontal: 1,
        fontSize: 16,
        color: Gray.gray500,
        fontWeight: '600',
    },
    productImage: {
        width: 155,
        backgroundColor: Gray.gray100,
        height: 180,
        borderRadius: 7,
        resizeMode: 'contain'
    },
    productPrice: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        paddingHorizontal: 1,
    },
    heartIcon: {
        padding: 4,
        backgroundColor: Gray.gray100,
        borderRadius: 200,
        position: 'absolute',
        right: 10,
        top: 7
    }
})

export default ProductCard