import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Gray } from '../constants/Colors';

const PostItemInputRow = ({ label, setter, value, keyboardType, placeholder }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                keyboardType={keyboardType}
                value={value}
                onChangeText={setter}
                placeholder={placeholder}
                cursorColor={Gray.gray700}
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 8,
        paddingHorizontal: 20,
    },
    label: {
        color: Gray.gray700,
        fontSize: 16,
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 13,
        fontSize: 15,
        borderRadius: 8,
        borderColor: Gray.gray300,
        paddingVertical: 20,
        fontWeight: '600',
        width: '100%',
    },
});

export default PostItemInputRow;
