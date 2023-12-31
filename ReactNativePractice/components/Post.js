import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MyUserContext } from '../App';
import { Colors } from '../utils/Colors';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import VectorIcon from '../utils/VectorIcon';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';

const Post = ({ navigation }) => {
    const [user, dispatch] = useContext(MyUserContext);
    const [text, setText] = useState('');
    const [userInfo, setUserInfo] = useState();
    const [isPosting, setIsPosting] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);

    const getCurrentUser = async () => {
        try {
            let res = await axios.get(`http://192.168.1.134:8000/users/${user.id}/account/`)
            setUserInfo(res.data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCurrentUser();
    }, [])

    const createPost = async () => {
        try {
            let res = await axios.post("http://192.168.1.134:8000/posts/", {
                "post_content": text,
                "account": userInfo?.id
            })
            console.log(res.data, "Đăng bài thành công!")
            navigation.goBack();
        } catch (error) {
            console.log(error)

        }
    }

    const openImagePicker = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            console.log('Permission not granted');
            return;
        }

        const options = {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1
        };

        const result = await ImagePicker.launchImageLibraryAsync(options);

        if (result.canceled) {
            console.log('User canceled image picker');
        } else {
            const newSelectedImages = result.assets;
            setSelectedImages(prevSelectedImages => [...prevSelectedImages, ...newSelectedImages]);
        }
    };

    const handleDeleteImage = (index) => {
        setSelectedImages((prevSelectedImages) => {
            const updatedSelectedImages = [...prevSelectedImages];
            updatedSelectedImages.splice(index, 1);
            return updatedSelectedImages;
        });
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Image source={{ uri: userInfo?.avatar }} style={styles.profileStyle} />
                    <View style={styles.inputBox}>
                        <Text style={styles.inputStyle}>{user.first_name}</Text>
                    </View>
                </View>
                <View>
                    <TextInput
                        multiline
                        numberOfLines={10}
                        value={text}
                        onChangeText={setText}
                        placeholder="Bạn đang nghĩ gì..."
                        style={styles.textInputStyle}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.postOption} onPress={openImagePicker}>
                        <VectorIcon
                            name="images"
                            type="Ionicons"
                            size={22}>
                        </VectorIcon>
                        <Text style={styles.inputStyle}>Photo</Text>
                    </TouchableOpacity>
                    {selectedImages.length > 0 && (
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ flexDirection: 'row' }}>
                                {selectedImages.map((image, index) => (
                                    <View>
                                        <Image
                                            key={index}
                                            source={{ uri: image.uri }}
                                            style={styles.selectedImageStyle}
                                        />
                                        <TouchableOpacity style={styles.deleteBg} onPress={() => handleDeleteImage(index)}>
                                            <VectorIcon
                                                name="delete"
                                                type="AntDesign"
                                                color="white"
                                                size={18}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </View>
                        </ScrollView>
                    )}
                </View>
                <View style={styles.postContainer}>
                    <TouchableOpacity onPress={() => createPost()} disabled={!text}>
                        <Text style={styles.postStyle}>Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        marginTop: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontSize: 18
    },
    profileStyle: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    inputStyle: {
        fontSize: 18,
        color: Colors.black,
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 8,
        borderRadius: 10
    },
    inputBox: {
        marginLeft: 5
    },
    postContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 16,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    tabItemText: {
        fontSize: 20
    },
    postStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    postOption: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        textAlignVertical: 'top',
        fontSize: 18,
        borderRadius: 10
    },
    selectedImageStyle: {
        width: 110,
        height: 110,
        marginRight: 5,
    },
    deleteBg: {
        backgroundColor: 'rgb(58 59 60)',
        height: 30,
        width: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        position: 'absolute',
        top: 3,
        right: 3
    }
});

export default Post;