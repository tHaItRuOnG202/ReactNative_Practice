import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView } from 'react-native';
import VectorIcon from '../utils/VectorIcon';
import { TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { MyUserContext } from "../App";
import { Colors } from '../utils/Colors';
import { Image } from 'react-native';

const Setting = ({ navigation }) => {
    const [user, dispatch] = useContext(MyUserContext);
    const logout = () => {
        dispatch({
            "type": "logout"
        })
        navigation.navigate('Đăng nhập')
    }

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Menu</Text>
                    <View style={styles.headerIcons}>
                        <View style={styles.searchBg}>
                            <VectorIcon
                                name="settings"
                                type="MaterialIcons"
                                size={18}
                            />
                        </View>
                        <View style={styles.searchBg}>
                            <VectorIcon
                                name="search"
                                type="FontAwesome5"
                                size={18}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.profileContainer}>
                    <Image source={{ uri: user.avatar }} style={styles.profileStyle} />
                    <View style={styles.inputBox}>
                        <Text style={styles.inputStyle}>{user.lastname} {user.firstname}</Text>
                    </View>
                    <TouchableOpacity style={styles.profileExpandIcon}>
                        <VectorIcon
                            name="expand-more"
                            type="MaterialIcons"
                            size={19}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.profileContainer}>
                    <TouchableOpacity onPress={logout}>
                        <Text style={styles.inputStyle}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    searchBg: {
        height: 35,
        width: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    profileExpandIcon: {
        height: 35,
        width: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        backgroundColor: '#EBECF0'
    },
    container: {
        padding: 8,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerIcons: {
        flexDirection: 'row',
    },
    profileStyle: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    inputStyle: {
        fontSize: 16,
        color: Colors.grey,
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 18,
        backgroundColor: Colors.white,
        alignItems: 'center',
    },
    logoutContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 18,
        marginTop: 10,
        backgroundColor: '#EBECF0',
        alignItems: 'center',
    },
});

export default Setting;