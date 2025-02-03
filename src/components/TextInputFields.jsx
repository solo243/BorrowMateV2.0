import { View, Text } from 'react-native'
import React from 'react'
import { Gray } from '../constants/Colors'

const TextInputFields = ({ Label, value }) => {
    return (
        <View style={{ width: '100%', paddingHorizontal: 12, }}>
            <View style={{
                borderRadius: 12,
                borderWidth: 2,
                borderColor: Gray.gray300, borderCurve: 'continuous',
                paddingHorizontal: 15,
                // minHeight: 60,
                paddingVertical: 10,
            }}>
                {value ? (
                    <Text style={{
                        color: Gray.gray500,
                        paddingBottom: 2,
                        fontSize: 13
                    }}>
                        {Label}
                    </Text>
                ) : null}

                <Text style={{
                    fontSize: 17,
                    lineHeight: 25,
                    color: 'black'
                }}>
                    {value ? value : Label}
                </Text>
            </View>
        </View>
    )
}

export default TextInputFields 