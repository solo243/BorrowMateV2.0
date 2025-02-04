import {
    View, Text, Image, TouchableOpacity, ScrollView, Alert, StyleSheet
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
import { Color } from '../../constants/Colors';

const Screen2 = ({ navigation, route }) => {

    const [selectedImages, setSelectedImages] = useState([]);

    const pickImage = async () => {
        if (selectedImages.length >= 4) {
            Alert.alert("Limit Reached", "You can only select up to 4 images.");
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsMultipleSelection: true,
            quality: 1,
        });

        if (!result.canceled) {
            const newImages = result.assets.map(asset => asset.uri);
            if (selectedImages.length + newImages.length > 4) {
                Alert.alert("Limit Exceeded", "You can select up to 4 images only.");
                return;
            }
            setSelectedImages([...selectedImages, ...newImages]);
        }
    };

    const removeImage = (index) => {
        setSelectedImages(selectedImages.filter((_, i) => i !== index));
    };

    const validateAndProceed = () => {
        if (selectedImages.length === 0) {
            Alert.alert("Error", "Please add at least one image.");
            return;
        }
        navigation.navigate("screen3", { img: selectedImages, cate: route.params.cate });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Post Item</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Product Images</Text>

                {/* Hide "Add Images" button if max limit reached */}
                {selectedImages.length < 4 && (
                    <TouchableOpacity onPress={pickImage} style={styles.addImageButton}>
                        <AntDesign name="plus" size={28} color="gray" />
                        <Text style={styles.addImageText}>Add Images</Text>
                    </TouchableOpacity>
                )}

                {/* Display Selected Images */}
                <View style={styles.imageGrid}>
                    {selectedImages.map((img, index) => (
                        <View key={index} style={styles.imageWrapper}>
                            <Image source={{ uri: img }} style={styles.image} />

                            {/* Remove Image Button */}
                            <TouchableOpacity
                                style={styles.removeIcon}
                                onPress={() => removeImage(index)}
                            >
                                <AntDesign name="closecircle" size={18} color="red" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>

            {/* <View style={styles.section}>
                <Text style={styles.sectionTitle}>Select Category</Text>
                <DropDownPicker
                    open={open}
                    value={selectedCategory}
                    items={[
                        { label: 'Fashion', value: 'fashion' },
                        { label: 'Electronics', value: 'electronics' },
                        { label: 'Tools', value: 'tools' },
                        { label: 'Furniture', value: 'furniture' },
                        { label: 'Automobiles', value: 'automobiles' },
                        { label: 'Appliances', value: 'appliances' },
                        { label: 'Sports', value: 'sports' },
                    ]}
                    setOpen={setOpen}
                    setValue={setSelectedCategory}
                    placeholder="Select a category..."
                    style={styles.dropdown}
                />
            </View> */}

            {/* Next Button */}
            <TouchableOpacity
                onPress={validateAndProceed}
                style={styles.nextButton}
            >
                <Text style={styles.nextButtonText}>Next Step</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingBottom: 100,
        backgroundColor: 'white',
        flex: 1
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 50,
        textAlign: 'center',
        paddingBottom: 25,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        marginBottom: 12,
    },
    addImageButton: {
        width: '100%',
        height: 150,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'gray',
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    addImageText: {
        marginTop: 5,
        color: 'gray',
        fontSize: 14,
    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    imageWrapper: {
        width: '30%',
        aspectRatio: 1,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    removeIcon: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 2,
    },
    dropdown: {
        backgroundColor: '#f2f2f2',
    },
    nextButton: {
        width: '100%',
        backgroundColor: Color.secondary,
        paddingVertical: 20,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    nextButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
});

export default Screen2;
