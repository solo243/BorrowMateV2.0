import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import PostItemInputRow from '../../components/PostItemInputRow';
import { Color, Gray } from '../../constants/Colors';
import axios from 'axios';
import LottieView from 'lottie-react-native';

const Screen3 = ({ route }) => {
    const { img, cate } = route.params;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('day');
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'Day', value: 'day' },
        { label: 'Month', value: 'month' },
        { label: 'Year', value: 'year' },
    ]);
    const [isLoading, setisLoading] = useState(false)
    const [uploadComplete, setUploadComplete] = useState(false); // To track upload completion



    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/product243/image/upload";
    const CLOUDINARY_UPLOAD_PRESET = "Display0505";




    const handlePress = async () => {
        if (!title || !description || !price || !duration || !img) {
            alert("Fill all input")
        } else {
            const realData = { title, description, price, duration, img };
            try {
                setisLoading(true)
                const uploadedImageUrls = [];

                for (const imageUri of img) {
                    const formData = new FormData();
                    formData.append('file', {
                        uri: imageUri,
                        type: 'image/jpeg',
                        name: `product_image_${Date.now()}.jpg`,
                    });
                    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

                    const response = await axios.post(CLOUDINARY_URL, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });

                    //  Collect the uploaded image URLs
                    const imageUrl = response.data.secure_url;
                    uploadedImageUrls.push(imageUrl);
                }

                realData.imageUrls = uploadedImageUrls;
                console.log('Final Data with Image URLs: ', { uploadedImageUrls, title, price, duration, description, cate });
                setisLoading(false)
                setUploadComplete(true);
            } catch (error) {
                setisLoading(false)
                console.error('Error uploading image to Cloudinary: ', error);
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.headerText}>Product Details</Text>
                <View style={styles.formContainer}>
                    <PostItemInputRow
                        setter={setTitle}
                        label="Product Title"
                        placeholder="Enter product title here..." />
                    <PostItemInputRow
                        setter={setDescription}
                        label="Description"
                        placeholder="Tell more about your product..." />

                    <View style={styles.rowContainer}>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.label}>Price</Text>
                            <TextInput
                                placeholder='Price'
                                keyboardType='number-pad'
                                value={price}
                                onChangeText={setPrice}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.label}>Duration</Text>
                            <DropDownPicker
                                style={styles.dropdown}
                                textStyle={styles.dropdownText}
                                value={duration}
                                open={open}
                                placeholder='Day'
                                items={items}
                                setOpen={setOpen}
                                setValue={setDuration}
                                setItems={setItems}
                            />
                        </View>
                    </View>
                    {isLoading ? (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="large" color={Color.secondary} />
                        </View>
                    ) : uploadComplete ? (
                        <View style={styles.checkContainer}>
                            <LottieView
                                source={require('../../../assets/Check.json')} // Path to your Lottie animation
                                autoPlay
                                loop={false}
                                speed={0.6}
                                onAnimationFinish={() => setUploadComplete(false)} // Reset the upload complete state
                                style={styles.checkAnimation}
                            />
                        </View>
                    ) : (
                        <TouchableOpacity onPress={handlePress} style={styles.button}>
                            <Text style={styles.buttonText}>Post Item</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        paddingTop: 10,
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        paddingBottom: 25,
    },
    formContainer: {
        flex: 1,
        gap: 22,
        position: 'relative',
    },
    rowContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputWrapper: {
        width: '48%',
        gap: 10,
    },
    label: {
        color: Gray.gray700,
        fontSize: 16,
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 13,
        fontSize: 20,
        borderRadius: 8,
        borderColor: Gray.gray300,
        paddingVertical: 20,
        fontWeight: '600',
    },
    dropdown: {
        paddingVertical: 20,
        borderColor: Gray.gray300,
        borderWidth: 1,
        borderRadius: 8,
    },
    dropdownText: {
        fontSize: 17,
        fontWeight: '600',
        color: 'black',
    },
    button: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: Color.secondary,
        paddingVertical: 20,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    checkContainer: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    checkAnimation: {
        width: 100,
        height: 100,
    },


});

export default Screen3;
