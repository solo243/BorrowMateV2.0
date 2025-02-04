import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color, Gray } from '../constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import Bell from '../../assets/icons/Bell.svg'
import Bag from '../../assets/icons/bag.svg'
import Send from '../../assets/icons/Send.svg'
import Search from '../../assets/icons/search.svg'
import CategoriesTextRow from '../components/Home/CategoriesTextRow'
import CategoriesCircleRow from '../components/Home/CategoriesCircleRow'
import DealArea from '../components/Home/DealArea'
import HorizontalProductCard from '../components/HorizontalProductCard'
import HorizontalLine from '../components/HorizontalLine'
import VerticalProductCard from '../components/VerticalProductCard'

const Home = ({ navigation }) => {

    useEffect(() => {
        Fetching()
    }, [])

    const [data, setdata] = useState();

    const Fetching = async () => {
        const fetching = await fetch("https://server7-wb1d.onrender.com/v12/popular/post");
        const convert = await fetching.json();
        const Data = convert.posts;
        setdata(Data)
        console.log(Data)
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={style.mainContainer}>
                {/*TODO: Topbar Cont  */}
                <View style={style.navigationBar}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: "#333333" }}>
                            <Send width={20} height={20} color={"#333333"} />  Borrow Buddy
                        </Text>
                    </View>
                    <View style={style.bellBagRow}>
                        <TouchableOpacity onPress={() => navigation.navigate("Notificaiton")} style={style.topIconCont}>
                            <Bell width={20} height={33} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.topIconCont}>
                            <Bag width={23} height={35} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/*TODO:: SearchBar  */}
                <View style={style.searchBarCont}>
                    <TouchableOpacity onPress={() => navigation.navigate("Search")} style={style.searchBar}>
                        <Search color='black' fill={"black"} />
                        <Text style={style.searchText}>
                            Search Anything...
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* TODO: ADsection  */}
                <View style={{ width: '100%', height: 180 }}>
                    <DealArea />
                </View>
                {/* TODO: Category Row  */}
                <View style={{ paddingTop: 20 }}>
                    <CategoriesTextRow text={"Categories"} />
                    <CategoriesCircleRow navigation={navigation} />
                </View>

                {/* TODO: Product Cards  */}
                <View style={{
                    paddingTop: 20,
                    gap: 20
                }}>
                    {/* <HorizontalProductCard text={"Recently Added"} value={data} /> */}
                    {/* <CategoriesTextRow text={"Recently Added"} /> */}
                    <VerticalProductCard value={data} navigation={navigation} />
                </View>
                {/* <HorizontalLine /> */}
                {/* <View style={{ paddingTop: 35 }}>
                    <HorizontalProductCard text={"Top Trending"} value={data} />
                </View> */}
            </SafeAreaView>
        </ScrollView>

    )
}

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Color.white,
        paddingBottom: 40
    }
    , navigationBar: {
        width: '100%',
        paddingTop: 3,
        paddingBottom: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 13,
        alignItems: 'center'
    },
    topIconCont: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    bellBagRow: {
        flexDirection: 'row',
        gap: 4,
    }, searchBarCont: {
        width: '100%',
        paddingHorizontal: 13,
        paddingTop: 10,
        paddingBottom: 18,
        paddingVertical: 11
    },
    searchBar: {
        width: '100%',
        flexDirection: 'row',
        borderWidth: 2,
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 20,
        borderColor: Gray.gray200,
        paddingVertical: 11,
        borderRadius: 14,
        borderCurve: 'continuous'
    },
    searchText: {
        fontSize: 15,
        fontWeight: '500',
        color: Gray.gray400
    }
})

export default Home