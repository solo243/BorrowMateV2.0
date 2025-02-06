import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { Color, Gray } from '../constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import HorizontalLine from '../components/HorizontalLine';
import ProductCardVertical from '../components/ProductCardVertical';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

const Profile = ({ navigation }) => {


    return (
        <View style={{
            position: 'relative',
            backgroundColor: 'white',
            width: '100%',
            borderTopWidth: 1,
            height: '100%',
            borderColor: Gray.gray200
        }}>
            <FlatList
                numColumns={2}
                bounces={false}
                ListHeaderComponent={() => (
                    <SafeAreaView style={style.mainCont}>
                        <View style={style.topBar}>
                            <Text style={style.myText}>My Profile</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                                <TouchableOpacity
                                    // onPress={showTost}
                                    onPress={() => navigation.navigate("EditProfile")}
                                    style={style.editBtn}>
                                    <Text style={style.editText}>Edit Profile</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.editBtn, {borderColor: 'red', backgroundColor: 'red'}]}>
                                    <FontAwesome name="power-off" size={20} color="white"/>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View>
                            <View style={style.userProfileCont}>
                                <Image
                                    source={{uri: "https://i.pinimg.com/originals/f2/d0/ac/f2d0ac079588297a2bd818a4c061ec71.jpg"}}
                                    style={{height: 100, width: 100, borderRadius: 100, alignSelf: 'center'}}/>
                                <Text style={{paddingTop: 10, fontSize: 17, fontWeight: 'bold'}}>Harshil Rana</Text>
                            </View>
                            <View style={{gap: 1, paddingHorizontal: 10}}>
                                <Text style={{fontSize: 20, fontWeight: '700', paddingLeft: 5}}>About me</Text>
                                <Text style={{paddingLeft: 5, fontSize: 15, fontWeight: '500'}}>Lorem, ipsum dolor sit
                                    amet consectetur adipisicing elit. Iste consectetur quas velit unde aliquam
                                    voluptates porro molestiae nam quaerat possimus!
                                </Text>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '700',
                                    paddingLeft: 5,
                                    paddingTop: 15
                                }}>Email</Text>
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: '500',
                                    paddingLeft: 5
                                }}>ranaharshil2437@gmail.com</Text>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '700',
                                    paddingLeft: 5,
                                    paddingTop: 15
                                }}>Mobile</Text>
                                <Text style={{fontSize: 15, fontWeight: '500', paddingLeft: 5}}>8866453276</Text>
                            </View>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: '700',
                                paddingTop: 30,
                                paddingBottom: 20,
                                paddingStart: 13
                            }}>Post</Text>
                        </View>
                        <HorizontalLine/>
                    </SafeAreaView>
                )}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                contentContainerStyle={{width: '100%', alignSelf: 'center',}}
                data={0}
                renderItem={({item}) => (
                    <ProductCardVertical data={item} navigation={navigation}/>
                )}/>
        </View>





        // <ScrollView>
        //     <SafeAreaView style={style.mainCont}>
        //         <View style={style.topBar}>
        //             <Text style={style.myText}>My Profile</Text>
        //             <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        //                 <TouchableOpacity
        //                     // onPress={showTost}
        //                     onPress={() => navigation.navigate("EditProfile")}
        //                     style={style.editBtn}>
        //                     <Text style={style.editText}>Edit Profile</Text>
        //                 </TouchableOpacity>
        //                 <TouchableOpacity style={[style.editBtn, { borderColor: 'red', backgroundColor: 'red' }]}>
        //                     <FontAwesome name="power-off" size={20} color="white" />
        //                 </TouchableOpacity>
        //             </View>

        //         </View>
        //         <View>
        //             <View style={style.userProfileCont}>
        //                 <Image source={{ uri: "https://i.pinimg.com/originals/f2/d0/ac/f2d0ac079588297a2bd818a4c061ec71.jpg" }}
        //                     style={{ height: 100, width: 100, borderRadius: 100, alignSelf: 'center' }} />
        //                 <Text style={{ paddingTop: 10, fontSize: 17, fontWeight: 'bold' }}>Harshil Rana</Text>
        //             </View>
        //             <View style={{ gap: 1, paddingHorizontal: 10 }}>
        //                 <Text style={{ fontSize: 20, fontWeight: '700', paddingLeft: 5 }}>About me</Text>
        //                 <Text style={{ paddingLeft: 5, fontSize: 15, fontWeight: '500' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur quas velit unde aliquam voluptates porro molestiae nam quaerat possimus!
        //                 </Text>
        //                 <Text style={{ fontSize: 20, fontWeight: '700', paddingLeft: 5, paddingTop: 15 }}>Email</Text>
        //                 <Text style={{ fontSize: 15, fontWeight: '500', paddingLeft: 5 }}>ranaharshil2437@gmail.com</Text>
        //                 <Text style={{ fontSize: 20, fontWeight: '700', paddingLeft: 5, paddingTop: 15 }}>Mobile</Text>
        //                 <Text style={{ fontSize: 15, fontWeight: '500', paddingLeft: 5 }}>8866453276</Text>
        //             </View>
        //             <Text style={{ fontSize: 25, fontWeight: '700', paddingTop: 0, paddingBottom: 20, paddingStart: 13, paddingTop: 30 }}>Post</Text>


        //         </View>
        //     </SafeAreaView>
        // </ScrollView >



        // <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingTop: 50 }}>
        //     <View style={{ flex: 1, backgroundColor: 'white' }}>
        //         <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 1, borderColor: Gray.gray300 }}>
        //             <Feather name="menu" size={24} color="black" />
        //             <Text style={{ fontSize: 18, fontWeight: 500 }}>
        //                 Profile
        //             </Text>
        //             <Ionicons name="settings" size={24} color={Gray.gray500} />
        //         </View>
        //         <View style={{ flex: 1, paddingTop: 20, paddingHorizontal: 20, paddingVertical: 20 }}>
        //             <View style={{ flexDirection: 'row' }}>
        //                 <Image style={{ height: 100, width: 100, backgroundColor: 'red', borderRadius: 100 }} />
        //                 <View style={{ paddingTop: 10, paddingHorizontal: 25, maxWidth: 250 }}>
        //                     <Text style={{ fontSize: 18, fontWeight: '500' }}>
        //                         Harshil Rana
        //                     </Text>
        //                 </View>
        //             </View>
        //         </View>
        //     </View>
        // </SafeAreaView >
    )
}


const style = StyleSheet.create({
    mainCont: {
        flex: 1,
        paddingTop: 32,
        backgroundColor: 'white',
        // paddingBottom: 3
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: Gray.gray400,
        paddingHorizontal: 18,
        paddingVertical: 20
    },
    editBtn: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: Color.secondary,
        // backgroundColor: 'white',
        borderRadius: 5,

        borderCurve: 'continuous'
    },
    editText: {
        color: 'white',

        fontWeight: '600',
        fontSize: 13
    },
    myText: {
        fontSize: 20,
        fontWeight: '600',
        color: Gray.gray800
    },
    userProfileCont: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 13,
        paddingBlock: 25
    }
})
export default Profile