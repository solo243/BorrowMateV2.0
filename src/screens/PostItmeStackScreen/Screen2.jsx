import React, { useState } from 'react';
import {
    View, Text, Image, TouchableOpacity, ScrollView, Alert, StyleSheet,
    SafeAreaView, TextInput, ActivityIndicator, Modal,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import LottieView from 'lottie-react-native';

import { Color, Gray } from '../../constants/Colors';
import PostItemInputRow from '../../components/PostItemInputRow';
import BottomSheetPicker from '../../components/Bottomsheet';

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/product243/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "Display0505";

const Screen2 = ({ navigation, route }) => {
    const MAX_IMAGES = 4;
    const [selectedImages, setSelectedImages] = useState([]);
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('day');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState(''); 
    const [loading, setLoading] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);

    const pickImage = async () => {
        if (selectedImages.length >= MAX_IMAGES) {
            return Alert.alert("Limit Reached", "You can only select up to 4 images.");
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsMultipleSelection: true,
            quality: 1,
        });

        if (!result.canceled) {
            const newImages = result.assets.map(asset => asset.uri);
            if (selectedImages.length + newImages.length > MAX_IMAGES) {
                return Alert.alert("Limit Exceeded", "You can select up to 4 images only.");
            }
            setSelectedImages(prevImages => [...prevImages, ...newImages]);
        }
    };

    const removeImage = index => {
        setSelectedImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    const handlePress = async () => {
        if (!title || !description || !price || !duration) {
            return Alert.alert("Error", "Please fill all input fields.");
        }
        if (selectedImages.length === 0) {
            return Alert.alert("Error", "Please select at least one image.");
        }

        setLoading(true);
        setUploadComplete(false);

        const uploadedImageUrls = await uploadImages(selectedImages);

        if (uploadedImageUrls) {
            const formData = {
                title,
                description,
                price,
                duration,
                imageUrls: uploadedImageUrls,
            };

            console.log('Final Data with Image URLs: ', formData);

            setLoading(false);
            setUploadComplete(true);

            setTimeout(() => {
                setUploadComplete(false);
                Alert.alert("Success", "Item Posted Successfully!");
                navigation.navigate("screen1");
            }, 2000);
        } else {
            setLoading(false);
        }
    };

    const uploadImages = async (images) => {
        try {
            const uploadedImageUrls = [];
            for (const imageUri of images) {
                const formData = new FormData();
                formData.append('file', {
                    uri: imageUri,
                    type: 'image/jpeg',
                    name: `product_image_${Date.now()}.jpg`,
                });
                formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

                const response = await axios.post(CLOUDINARY_URL, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });

                uploadedImageUrls.push(response.data.secure_url);
            }
            return uploadedImageUrls;
        } catch (error) {
            console.error('Error uploading image to Cloudinary: ', error);
            Alert.alert("Error", "Failed to upload images. Please try again.");
            return null;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                {/* Top bar */}
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                        <AntDesign name="left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Post An Item</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.icon}>
                        <Ionicons name="close-outline" size={26} color="black" />
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.headerTextWrapper}>
                        <Text style={styles.headerText}>You're almost there!</Text>
                        <Text style={styles.subHeaderText}>Include as much details and pictures as possible</Text>
                    </View>

                    <View style={styles.formContainer}>
                        {/* Product Title & Description */}
                        <PostItemInputRow label="Product Title" setter={setTitle} placeholder="Enter Product title here..." />
                        <PostItemInputRow label="Description" setter={setDescription} placeholder="Product Description here..." />

                        {/* Price and Duration */}
                        <View style={styles.rowContainer}>
                            <View style={styles.inputWrapper}>
                                <Text style={styles.label}>Price</Text>
                                <TextInput
                                    placeholder="Price"
                                    keyboardType="number-pad"
                                    value={price}
                                    onChangeText={setPrice}
                                    style={styles.input}
                                />
                            </View>
                            <View style={styles.inputWrapper}>
                                <Text style={styles.label}>Duration</Text>
                                <BottomSheetPicker selectedValue={duration} setSelectedValue={setDuration} />
                            </View>
                        </View>
                    </View>

                    {/* Image Upload */}
                    <View style={styles.imageContainer}>
                        <Text style={[styles.label, { paddingStart: 20, paddingBottom: 16 }]}>Upload Images</Text>
                        <View style={styles.imageGrid}>
                            {selectedImages.map((img, index) => (
                                <View key={index} style={styles.imageWrapper}>
                                    <Image source={{ uri: img }} style={styles.image} />
                                    <TouchableOpacity onPress={() => removeImage(index)} style={styles.removeIcon}>
                                        <AntDesign name="closecircle" size={18} color="red" />
                                    </TouchableOpacity>
                                </View>
                            ))}
                            {selectedImages.length < MAX_IMAGES && (
                                <TouchableOpacity onPress={pickImage} style={styles.addImageButton}>
                                    <AntDesign name="plus" size={28} color="gray" />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>

                    {/* Modal for Loading */}
                    <Modal visible={loading || uploadComplete} transparent>
                        <View style={styles.modalOverlay}>
                            <View style={styles.modalContent}>
                                {loading ? <ActivityIndicator size="60" color={Color.secondary} /> : <LottieView style={styles.lottieView} source={require('../../../assets/Check.json')} autoPlay loop />}
                            </View>
                        </View>
                    </Modal>
                </ScrollView>

                {/* Post Item Button */}
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={handlePress} style={styles.button}>
                        <Text style={styles.buttonText}>Post Item</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 30,
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        alignItems: 'center',
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: Gray.gray300,
    },
    icon: {
        padding: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
    },
    headerTextWrapper: {
        alignItems: 'center',
        marginVertical: 19,
    },
    subHeaderText: {
        textAlign: 'center',
        maxWidth: '93%',
        fontSize: 15,
        color: Gray.gray500,
    },
    formContainer: {
        paddingTop: 40,
        gap: 15,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
    },
    inputWrapper: {
        width: '48%',
        gap: 6,
    },
    label: {
        color: Gray.gray700,
        fontSize: 16,
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        borderColor: Gray.gray300,
        paddingHorizontal: 13,
        fontSize: 15,
        borderRadius: 8,
        paddingVertical: 13,
        fontWeight: '600',
    },
    imageContainer: {
        paddingTop: 20,
    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        paddingBottom: 40,
        gap: 10,
    },
    imageWrapper: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    addImageButton: {
        width: 80,
        height: 80,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeIcon: {
        position: 'absolute',
        top: -6,
        right: -6,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        padding: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lottieView: {
        width: 150,
        height: 150,
    },
    buttonWrapper: {
        paddingBottom: 10,
    },
    button: {
        width: '90%',
        paddingVertical: 15,
        backgroundColor: Color.secondary,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
    },
});

export default Screen2;
