import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'

import DropDownPicker from 'react-native-dropdown-picker';


const Orders = () => {



    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    return (<SafeAreaView style={style.mainCont}>
        <View style={style.headCont}>
            <Text style={style.postItemText}>
                Post Item
            </Text>
        </View>
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center' }}>
                <Text>Title</Text>
                <DropDownPicker
                    open={open}
                    placeholder="Select an item"
                    value={value}
                    showBadgeDot={true}
                    mode='SIMPLE'
                    listMode='FLATLIST'
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>
        </View>
    </SafeAreaView>)
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