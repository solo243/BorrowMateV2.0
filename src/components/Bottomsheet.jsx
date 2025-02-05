import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import { Color, Gray } from '../constants/Colors';

import Entypo from '@expo/vector-icons/Entypo';

const durations = [
    { label: 'Hour', value: 'hour' },
    { label: 'Day', value: 'day' },
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' },
];

const BottomSheetPicker = ({ selectedValue, setSelectedValue }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsVisible(false);
    };

    return (
        <View style={styles.container}>
            {/* Dropdown Trigger */}
            <TouchableOpacity style={styles.dropdown} onPress={() => setIsVisible(true)}>
                <Text style={styles.dropdownText}>
                    {durations.find((item) => item.value === selectedValue)?.label || 'Select Duration'}
                </Text>
                <Entypo name="chevron-thin-down" size={15} color="black" />
            </TouchableOpacity>

            {/* Bottom Sheet Modal */}
            <Modal visible={isVisible} transparent animationType="slide">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Duration</Text>

                        <FlatList
                            data={durations}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.option} onPress={() => handleSelect(item.value)}>
                                    <Text style={styles.optionText}>{item.label}</Text>
                                </TouchableOpacity>
                            )}
                        />

                        <TouchableOpacity onPress={() => setIsVisible(false)} style={styles.closeButton}>
                            <Text style={styles.closeText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    dropdown: {
        borderWidth: 1,
        paddingHorizontal: 13,
        fontSize: 15,
        borderRadius: 8,
        borderColor: Gray.gray300,
        paddingVertical: 13,
        fontWeight: '600',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },
    dropdownText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    option: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: Gray.gray200,
    },
    optionText: {
        fontSize: 16,
        fontWeight: '600',
    },
    closeButton: {
        marginTop: 10,
        alignItems: 'center',
        paddingVertical: 10,
    },
    closeText: {
        fontSize: 16,
        backgroundColor: 'red',
        width: '100%',
        alignSelf: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
});

export default BottomSheetPicker;
