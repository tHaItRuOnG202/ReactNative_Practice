import { ScrollView } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import { Image, Modal, StyleSheet, Text, View } from 'react-native';
import { MyUserContext } from '../App';
import VectorIcon from '../utils/VectorIcon';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import PostStatus from './PostStatus';
import axios from 'axios';

const Profile = ({ navigation }) => {
    const [user, dispatch] = useContext(MyUserContext);
    const [userInfo, setUserInfo] = useState();

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

    return (
        <>
            <ScrollView>
                <View>
                    <Image source={{ uri: userInfo?.avatar }} style={styles.coverPhoto} />
                    <View style={styles.avatarChange}>
                        <VectorIcon
                            name="camera"
                            type="FontAwesome5"
                            size={20}
                        ></VectorIcon>
                    </View>
                </View>
                <View style={styles.dpContainer}>
                    <View style={styles.dpBlueRound}>
                        <Image style={styles.dp} source={{ uri: userInfo?.cover_avatar }} />
                        <View style={styles.avatarChange}>
                            <VectorIcon
                                name="camera"
                                type="FontAwesome5"
                                size={20}
                            ></VectorIcon>
                        </View>
                    </View>
                </View>
                <Text style={styles.name}>{user.last_name} {user.first_name}</Text>
                <Text style={styles.shortBio}>Trưởng phòng Y Tế Nhà Bè</Text>

                <View style={styles.profileTabsContainer}>
                    <View style={styles.tabContainer}>
                        <View style={styles.tabImageContainer}>
                            <VectorIcon
                                name="plus"
                                type="FontAwesome5"
                                size={20}
                            ></VectorIcon>
                        </View>
                        <Text style={styles.tabText}>Add Story</Text>
                    </View>
                    <View style={styles.tabContainer}>
                        <View style={styles.tabImageContainer}>
                            <VectorIcon
                                name="user"
                                type="FontAwesome5"
                                size={20}
                            ></VectorIcon>
                        </View>
                        <Text style={styles.tabText}>Edit Profile</Text>
                    </View>
                    <View style={styles.tabContainer}>
                        <View style={styles.tabImageContainer}>
                            <VectorIcon
                                name="list"
                                type="FontAwesome5"
                                size={20}
                            ></VectorIcon>
                        </View>
                        <Text style={styles.tabText}>Activity Log</Text>
                    </View>
                    <View style={styles.tabContainer}>
                        <View style={styles.tabImageContainer}>
                            <VectorIcon
                                name="dots-horizontal-circle"
                                type="MaterialCommunityIcons"
                                size={20}
                            ></VectorIcon>
                        </View>
                        <Text style={styles.tabText}>More</Text>
                    </View>
                </View>
                {/* <View style={styles.divider}></View> */}
                <View style={styles.aboutheadingContainer}>
                    <Text style={styles.aboutText}>About</Text>
                    <Text style={styles.seeAllText}>See All</Text>
                </View>
                <View style={styles.workContainer}>
                    <VectorIcon></VectorIcon>
                    <Text style={{ fontSize: 18, marginLeft: 10 }}>Founder at</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 5 }}>
                        House Raft
                    </Text>
                </View>
                <View style={styles.workContainer}>
                    <VectorIcon
                    ></VectorIcon>
                    <Text style={{ fontSize: 18, marginLeft: 10 }}>Lives in</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 5 }}>
                        Binh Thanh
                    </Text>
                </View>
                <View style={styles.divider}></View>
                <PostStatus navigation={navigation} />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    coverPhoto: {
        width: windowWidth,
        height: windowHeight / 4.5,
    },
    dpContainer: {
        height: 160,
        width: 160,
        borderRadius: 200,
        backgroundColor: 'white',
        position: 'absolute',
        alignSelf: 'left',
        marginTop: windowHeight / 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    dpBlueRound: {
        height: '80%',
        width: '80%',
        borderRadius: 200,
        borderWidth: 5,
        borderColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dp: {
        height: 150,
        width: 150,
    },
    avatarChange: {
        height: 40,
        width: 40,
        backgroundColor: '#EBECF0',
        borderRadius: 30,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        bottom: -20
    },
    name: {
        alignSelf: 'flex-start',
        marginTop: 80,
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 10
    },
    shortBio: {
        alignSelf: 'flex-start',
        fontSize: 18,
        color: 'gray',
        marginLeft: 10,
        marginTop: 10
    },
    profileTabsContainer: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    tabContainer: {
        height: 90,
        width: windowWidth / 4.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabImage: {
        height: 30,
        width: 30,
    },
    tabImageContainer: {
        height: 50,
        width: 50,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    divider: {
        height: 2,
        width: '95%',
        backgroundColor: 'lightgray',
        alignSelf: 'center',
        marginTop: 10,
    },
    aboutheadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10,
    },
    aboutText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    seeAllText: {
        color: 'blue',
        fontSize: 18,
    },
    workContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 15,
    },
    workIcon: {
        height: 25,
        width: 25,
        tintColor: 'lightgray',
    },
});

export default Profile;