import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Color, Gray } from '../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';


const ProductCardVertical = ({ data, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Details")} style={style.mainCardCont} >
            <View style={style.productCard}>
                <Image
                    resizeMethod='cover'

                    source={{ uri: data.thumbnail }}
                    style={style.ProImage} />
                <TouchableOpacity style={style.heartIcon}>
                    <Ionicons name="heart" size={23} color={Color.cherryRed} />
                </TouchableOpacity>
                <View style={{ paddingHorizontal: 4 }}>
                    <Text style={style.productTitle}>
                        {data.title ? data.title : "Not Available"}
                    </Text>
                    <View style={style.priceRow}>
                        <Text style={style.productPrice}>$ {data.price ? data.price : "null"} </Text>
                        <Text style={style.discountPrice}>/{""} month</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity >
        // <View style={style.mainCont}>
        //     {/* <View style={{ borderWidth: 1 }}> */}
        //     <Image source={Data.image} style={style.productImage} />
        //     <TouchableOpacity style={{ padding: 4, backgroundColor: Gray.gray100, borderRadius: 200, position: 'absolute', right: 10, top: 7 }}>
        //         {Data.isFev ? <Ionicons name="heart" size={23} color={Color.cherryRed} />
        //             : <Ionicons name="heart-outline" size={23} color="gray" />
        //         }
        //     </TouchableOpacity>
        //     <Text
        //         numberOfLines={2}
        //         style={style.productTitle}>
        //         {Data.title}
        //     </Text>
        //     <Text style={style.productPrice}>
        //         {Data.price} / {Data.duration}
        //     </Text>
        //     {/* </View> */}

        // </View>


    )
}

const style = StyleSheet.create({
    mainCont: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 9,
        padding: 8,
        borderColor: "rgb(190, 43, 43)",
        // borderColor: Gray.gray300,
        maxWidth: '48%',
    },
    // productTitle: {
    //     paddingVertical: 8,
    //     lineHeight: 20,
    //     paddingHorizontal: 1,
    //     fontSize: 16,
    //     color: Gray.gray500,
    //     fontWeight: '600',
    // },
    // productPrice: {
    //     fontSize: 16,
    //     color: 'black',
    //     fontWeight: 'bold',
    //     paddingHorizontal: 3,
    // },
    productImage: {
        width: '100%',
        height: 180,
        borderRadius: 8
    },


    mainCardCont: {
        flex: 1,
        maxWidth: Dimensions.get('window').width * 0.5,
        borderRightWidth: 1,
        // borderTopWidth: 1.5,
        // borderWidth: 1,
        paddingTop: 20,
        // paddingBottom: 10,
        borderColor: "#0000001A",

        // borderColor: Gray.gray200,
        alignItems: 'center',
        padding: 7,
        borderBottomWidth: 1
    },
    productCard: {
        borderRadius: 10,
        borderCurve: 'continuous',
        width: '100%',
        paddingHorizontal: 10,
        // padding: 10,
        gap: 10
    },
    ProImage: {
        height: 200,
        borderRadius: 10,
        width: '100%',
        borderCurve: 'continuous',
        resizeMode: 'contain',
        backgroundColor: Gray.gray100
    },
    productTitle: {
        fontSize: 16,
        fontWeight: '500'
    },
    priceRow: {
        flexDirection: 'row',
        // gap: 10,
        paddingVertical: 3.5,
        alignItems: 'center'
    },
    productPrice: {
        fontSize: 17,
        fontWeight: '700'
    },
    discountPrice: {
        color: 'gray',
    },
    heartIcon: {
        padding: 5,
        backgroundColor: Gray.gray300,
        borderRadius: 200,
        position: 'absolute',
        right: 10,
    }

})
export default ProductCardVertical