import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Gray } from '../../constants/Colors'

const DealArea = () => {
    return (
        // <FlatList
        //     horizontal
        //     data={[1, 2, 3, 4, 5, 6]} renderItem={({ item, index }) => (
        <View style={style.mainWrapper}>
            <View style={{ width: '100%', height: '100%', paddingHorizontal: 10 }}>
                <Image resizeMode='center'
                    source={require('../../../assets/newCarPhoto.jpg')}
                    style={{ width: '100%', height: '100%', borderRadius: 12, borderCurve: 'continuous' }} />
            </View>
        </View>
        // )} />
    )
}

const style = StyleSheet.create({
    mainWrapper: {
        // width: '100%',
        alignItems: 'center',
        // backgroundColor: 'blue',
        // height: '100%',
    }
})
export default DealArea