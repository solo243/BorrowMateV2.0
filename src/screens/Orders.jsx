import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'

import DropDownPicker from 'react-native-dropdown-picker';
import TextInputFields from '../components/TextInputFields';
import PostItemInputRow from '../components/PostItemInputRow';
import { Color } from '../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import Screen1 from './PostItmeStackScreen/Screen1';



const Orders = () => {
    const [image, setImage] = useState()
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);


    const [pTitle, setPtitle] = useState();
    const [pPrice, setPprice] = useState(0);
    const [pDuration, setPduration] = useState(0);

    const HandlePress = () => {
        const data = {
            PTitle: pTitle,
            PPrice: pPrice,
            PDuration: pDuration, image: image
        }
        console.log(data)
    }
    return (


        <Screen1 />
        // <ScrollView>


        //     <SafeAreaView style={style.mainCont}>
        //         <View style={style.headCont}>
        //             <Text style={style.postItemText}>
        //                 Post Item
        //             </Text>
        //         </View>
        //         <View style={{ flex: 1, gap: 15, paddingTop: 30 }}>
        //             <PostItemInputRow placeholder={"Enter Product Title here.."} value={pTitle} satter={setPtitle} lable={"Prodcut Title"} />
        //             <PostItemInputRow placeholder={"Product Price..."} keyboardType={'number-pad'} value={pPrice} satter={setPprice} lable={" Price"} />
        //             <PostItemInputRow placeholder={"Duration..."} value={pDuration} satter={setPduration} lable={" Duration"} />
        //             <Button title="Pick an image from camera roll" onPress={pickImage} />
        //             {image && <Image source={{ uri: image }} style={{ height: 300, width: 300 }} />}
        //             <TouchableOpacity style={{ backgroundColor: Color.secondary, padding: 20, width: '80%', alignItems: 'center', justifyContent: 'center', borderRadius: 10, alignSelf: 'center' }} onPress={HandlePress}>
        //                 <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>
        //                     Post Item
        //                 </Text>
        //             </TouchableOpacity>
        //         </View>
        //     </SafeAreaView>
        // </ScrollView>
    )
}

const style = StyleSheet.create({
    mainCont: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'red',
        paddingTop: 40
    },
    headCont: {
        flexDirection: 'row',
        // paddingTop: 40,
        alignItems: "center",
        width: '100%',
        // backgroundColor: 'blue',
        justifyContent: 'center',

    },
    postItemText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',

    }
})


export default Orders