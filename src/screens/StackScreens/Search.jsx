import { View, Text, ScrollView, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Color, Gray } from '../../constants/Colors';
import VerticalProductCard from '../../components/VerticalProductCard';
import { FlatList } from 'react-native-gesture-handler';
import ProductCardVertical from '../../components/ProductCardVertical';

const Search = ({ navigation }) => {
    return (
        <>

            <FlatList data={[1, 2, 3, 4, 5, 6, 7]} ListHeaderComponent={() => (
                <SafeAreaView style={style.mainCont}>
                    <View style={style.searchBoxWrapper}>
                        <View style={style.searchBar}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <AntDesign name="arrowleft" size={24} color={'black'} />
                            </TouchableOpacity>
                            <TextInput placeholder='Search Anything...'
                                style={style.searchInput}
                                placeholderTextColor={Gray.gray400}
                            ></TextInput>
                            <TouchableOpacity style={{ paddingLeft: 10 }}>
                                <AntDesign name="closecircleo" size={24} color={Gray.gray600} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <VerticalProductCard navigation={navigation} />

                </SafeAreaView>
            )}
                numColumns={2}
                bounces={false}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{ width: '100%', alignSelf: 'center', }}
                renderItem={({ item }) => (
                    <>
                    </>
                    // <ProductCardVertical navigation={navigation} data={item} />
                )} />
            {/* <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, backgroundColor: Color.white, position: 'relative' }}>
                
            </ScrollView> */}
            {/* <View style={{ width: '100%', height: 80, backgroundColor: 'red', position: 'absolute', bottom: 0 }}>
            </View> */}
        </>

    )
}
const style = StyleSheet.create({
    mainCont: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: 'white'
    },
    searchBoxWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        // paddingTop: 20,
        // paddingBottom: 20
        paddingVertical: 23
        // backgroundColor: 'red'
    },
    searchBar: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        borderRadius: 13,
        borderCurve: 'continuous',
        borderWidth: 1.1,
        borderColor: Gray.gray300,
        // justifyContent: 'space-between',
        paddingHorizontal: 14,
        height: 52,
        // paddingVertical: 15
    },
    searchInput: {
        flex: 1,
        paddingStart: 12,
        fontSize: 17
    }
})
export default Search 