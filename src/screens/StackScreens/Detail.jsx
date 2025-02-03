import { View, Text, ScrollView, StyleSheet, Pressable, TouchableOpacity, Touchable, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Color } from '../../constants/Colors';
import OverviewRow from '../../components/Detail/OverView';
import HorizontalLine from '../../components/HorizontalLine';




const ProductDetail = ({ navigation }) => {


    const Product = {
        title: "Apple MacBook Pro Core i9 9th Gen - (16GB/1 TB SSD/Mac Os Catalina/4GB Graphics Card)",
        isRated: true,
        rating: 4.5,
        ratingPerson: 90,
        price: "1,99,900",
        duration: "Month",
        details: "ll-Day Battery Life – Go longer than ever with up to 18 hours of battery life.Powerful Performance – Take on everything from professional- quality editing to action-packed gaming with ease.The Apple M1 chip with an 8 - core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive.That way it can support tasks like memory - hogging multitab browsing and opening a huge graphic file quickly and easily.Stunning Display – With a 13.3 - inch / 33.74 cm Retina display, images come alive with new levels of realism.Text is sharp and clear, and colors are more vibrant."
    }

    const [moreText, setMoreText] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [isFev, setIsFev] = useState(false)
    return (
        <ScrollView style={style.mainViewCont}>
            <SafeAreaView style={{ flex: 1, paddingTop: 30, backgroundColor: 'white' }}>
                <View style={style.topNavigationBar}>
                    <TouchableOpacity style={{ padding: 6 }} onPress={() => navigation.goBack()}>
                        <Entypo name="chevron-left" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={style.topUtils}>
                        <TouchableOpacity>
                            <Ionicons name="search" size={22} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="cart" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* TODO:  Product Image  */}
                <View style={style.imageCont}>

                </View>
                <View style={style.productDetailsCont}>
                    {/* TODO: PRoduct Title  */}
                    <Text numberOfLines={moreText ? 5 : 2} style={style.productTitle}>
                        {Product.title}
                    </Text>
                    <TouchableOpacity onPress={() => setMoreText(!moreText)}>
                        <Text style={style.seeAllText}>
                            see all
                        </Text>
                    </TouchableOpacity>
                    {/* TODO: Product Rating  */}
                    {Product.isRated ? (
                        <View style={style.productRating}>
                            <View style={style.ratingCard}>
                                <Text style={style.ratingText}>
                                    {Product.rating}
                                </Text>
                                <Octicons name="star-fill" size={13} color="white" />
                            </View>
                            <Text>({Product.ratingPerson} ratings)</Text>
                        </View>
                    ) : null}

                    {/* TODO: PProduct Pricing  */}
                    <View style={style.priceCont}>
                        <Text style={style.priceText}>
                            ${Product.price} / {Product.duration}
                        </Text>
                        <TouchableOpacity onPress={() => setIsFev(!isFev)} style={style.fevCont}>
                            {isFev ?
                                (
                                    <AntDesign name="heart" size={18} color="red" />
                                ) : (
                                    <AntDesign name="hearto" size={18} color="black" />
                                )}
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <HorizontalLine /> */}
                <HorizontalLine />
                {/* TODO: Rent Now BTN  */}
                <View style={style.mainBtnsCont}>
                    <TouchableOpacity style={style.rentNowBtn}>
                        <MaterialCommunityIcons name="cash" size={24} color="white" />
                        <Text style={style.rentText}> Rent Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.InquiryCont}>
                        <MaterialCommunityIcons name="offer" size={24} color="black" />
                        <Text style={style.InquiryText}>Make Offer</Text>
                    </TouchableOpacity>
                </View>
                <View>

                </View>
                {/* TODO: OVerview Row  */}
                <OverviewRow />


                {/* TODO: Details  */}
                <View >
                    <View style={style.proDetailCont}>
                        <Text style={style.detailTextHead} >Description</Text>
                        <Text numberOfLines={showMore ? 4 : 10} style={style.detailText}>
                            {Product.details}
                        </Text>
                        <TouchableOpacity onPress={() => setShowMore(!showMore)} style={{ marginTop: -10 }}>
                            <Text style={style.seeAllText}>
                                see all
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView >
        </ScrollView>

    )
}

const style = StyleSheet.create({
    mainViewCont: {
        // flex: 1,
        // paddingVertical: 50,
        backgroundColor: 'white'
    },
    topNavigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingTop: 10
    },
    topUtils: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 22
    },
    imageCont: {
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10,
        borderCurve: 'continuous',
        height: 300,
        backgroundColor: Color.secondary,
        marginTop: 13
    },
    productDetailsCont: {
        padding: 14
    },
    productTitle: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 27
    },
    seeAllText: {
        fontWeight: '800',
        fontSize: 17,
        paddingVertical: 5,
        letterSpacing: 0.3
    },
    productRating: {
        flexDirection: 'row',
        gap: 7,
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 10,
    },
    ratingCard: {
        flexDirection: 'row',
        backgroundColor: "#f59e0b",
        paddingHorizontal: 11,
        paddingVertical: 2,
        gap: 6,
        alignItems: 'center',
        borderRadius: 5,
        borderCurve: 'continuous'
    },
    ratingText: {
        fontSize: 15,
        color: 'white',
    },
    fevCont: {
        backgroundColor: 'lightgray',
        padding: 9,
        borderRadius: 20,
    },
    priceCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
    },
    priceText: {
        fontSize: 20,
        fontWeight: '700'
    },
    mainBtnsCont: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        gap: 12
    },
    rentNowBtn: {
        height: 50,
        flexDirection: 'row',
        gap: 10,
        width: '93%',
        backgroundColor: Color.secondary,
        borderRadius: 8,
        borderCurve: 'continuous',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rentText: {
        color: 'white', fontSize: 16,
        fontWeight: '600'
    },
    InquiryCont: {
        height: 50,
        width: '93%',
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#cecece',
        borderRadius: 8,
        borderCurve: 'continuous',
        alignItems: 'center',
        justifyContent: 'center'
    },
    InquiryText: {
        color: Color.secondary,
        fontSize: 16,
        fontWeight: '600'
    },
    proDetailCont: {
        width: '100%',
        marginTop: 16,
        gap: 10,
        paddingHorizontal: 15,
        paddingBottom: 50
    },
    detailTextHead: {
        fontSize: 20,
        fontWeight: '600'
    },
    detailText: {
        fontSize: 16,
    },
    dateLocationCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red'
    },
    detailCont: {
        // backgroundColor: 'red',
        alignItems: 'center',
        maxWidth: 210,
        width: '50%',
        // borderWidth: 2,
        gap: 3

    }
})

export default ProductDetail