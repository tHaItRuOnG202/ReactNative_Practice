import { View, Image, StyleSheet, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Colors } from '../utils/Colors';
import VectorIcon from '../utils/VectorIcon';
import { MyUserContext } from '../App';
import axios from 'axios';

const PostHeader = ({ data }) => {
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
        <View style={styles.postHeaderContainer}>
            <View style={styles.postTopSec}>
                <View style={styles.row}>
                    <Image source={{ uri: userInfo?.avatar }} style={styles.userProfile} />
                    <View style={styles.userSection}>
                        <Text style={styles.username}>{user.first_name}</Text>
                        <View style={styles.row}>
                            <Text style={styles.days}>2d</Text>
                            <Text style={styles.dot}>•</Text>
                            <VectorIcon
                                name="user-friends"
                                type="FontAwesome5"
                                size={13}
                                color={Colors.headerIconGrey}
                                style={styles.userIcon}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <VectorIcon
                        name="dots-three-horizontal"
                        type="Entypo"
                        size={25}
                        color={Colors.headerIconGrey}
                        style={styles.headerIcons}
                    />
                    <VectorIcon
                        name="close"
                        type="Ionicons"
                        size={25}
                        color={Colors.headerIconGrey}
                    />
                </View>
            </View>
            <Text style={styles.caption}>Ủa gì vậy?</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    postHeaderContainer: {
        padding: 16,
    },
    userProfile: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    row: {
        flexDirection: 'row',
    },
    postTopSec: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username: {
        fontSize: 16,
        color: Colors.textColor,
        marginBottom: 2,
    },
    userSection: {
        marginLeft: 12,
    },
    days: {
        fontSize: 14,
        color: Colors.textGrey,
    },
    dot: {
        fontSize: 14,
        color: Colors.textGrey,
        paddingHorizontal: 8,
    },
    userIcon: {
        marginTop: 3,
    },
    headerIcons: {
        marginRight: 20,
    },
    caption: {
        color: Colors.grey,
        fontSize: 15,
        marginTop: 10,
    },
});

export default PostHeader;