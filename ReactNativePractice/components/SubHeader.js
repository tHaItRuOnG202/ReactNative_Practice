import { View, TextInput, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import CameraRoll from '../images/cameraroll.png';
import { Colors } from '../utils/Colors';
import * as ImagePicker from 'expo-image-picker';
import { useContext } from 'react';
import { MyUserContext } from "../App";
import axios from 'axios';

const SubHeader = () => {
    const [user, dispatch] = useContext(MyUserContext);
    const [userInfo, setUserInfo] = useState();

    const getCurrentUser = async () => {
        try {
            let res = await axios.get(`http://192.168.1.134:8000/users/${user.id}/account/`)
            setUserInfo(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCurrentUser();
    }, [])
    // const openImagePicker = async () => {
    //     let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsMultipleSelection: true,
    //     });

    //     if (status !== 'granted') {
    //         console.log('Permission not granted');
    //         return;
    //     }

    //     const options = {
    //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //         allowsMultipleSelection: true,
    //     };

    //     const result = await ImagePicker.launchImageLibraryAsync(options);

    //     if (result.cancelled) {
    //         console.log('User cancelled image picker');
    //     } else {
    //         const selectedImages = result.selected;
    //         // Xử lý các ảnh đã chọn ở đây
    //     }
    // };

    const openImagePicker = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            console.log('Permission not granted');
            return;
        }

        const options = {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
        };

        const result = await ImagePicker.launchImageLibraryAsync(options);

        if (result.cancelled) {
            console.log('User cancelled image picker');
        } else {
            const selectedImages = result.assets;
            // Xử lý các ảnh đã chọn ở đây
        }
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: userInfo?.avatar }} style={styles.profileStyle} />
            <View style={styles.inputBox}>
                <Text style={styles.inputStyle}>What's on your mind, {user.first_name}?</Text>
            </View>
            <TouchableOpacity onPress={openImagePicker}>
                <Image source={CameraRoll} style={styles.cameraRoll} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 18,
        backgroundColor: Colors.white,
        alignItems: 'center',
    },
    profileStyle: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    inputBox: {
        borderWidth: 1,
        borderColor: Colors.borderGrey,
        borderRadius: 30,
        paddingHorizontal: 20,
        width: '70%',
        paddingVertical: 8,
    },
    inputStyle: {
        fontSize: 16,
        color: Colors.grey,
    },
});

export default SubHeader;