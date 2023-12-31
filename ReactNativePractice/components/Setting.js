import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView } from 'react-native';
import VectorIcon from '../utils/VectorIcon';
import { TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { MyUserContext } from "../App";
import { Colors } from '../utils/Colors';
import { Image } from 'react-native';
import { windowWidth } from '../utils/Dimensions';
import Collapsible from 'react-native-collapsible';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

const Setting = ({ navigation }) => {
    const [user, dispatch] = useContext(MyUserContext);
    const logout = () => {
        dispatch({
            "type": "logout"
        })
        navigation.navigate('Đăng nhập')
    }

    const [helpExpanded, setHelpExpanded] = useState(false);
    const [settingExpanded, setSettingExpanded] = useState(false);

    const toggleHelp = () => {
        setHelpExpanded(!helpExpanded);
    };

    const toggleSetting = () => {
        setSettingExpanded(!settingExpanded);
    };
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
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Trang cá nhân')} style={styles.profileContainer}>
                        <Image source={{ uri: userInfo?.avatar }} style={styles.profileStyle} />
                        <View style={styles.inputBox}>
                            <Text style={styles.inputStyle}>{user.last_name} {user.first_name}</Text>
                        </View>
                        <TouchableOpacity style={styles.profileExpandIcon}>
                            <VectorIcon
                                name="expand-more"
                                type="MaterialIcons"
                                size={19}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
                <View style={styles.utilTab}>
                    <View style={styles.utilTabRow}>
                        <TouchableOpacity style={styles.tabItemContainer}>
                            <View style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 10 }}>
                                <VectorIcon
                                    name="newspaper"
                                    type="FontAwesome5"
                                    size={21}>
                                </VectorIcon>
                                <Text style={styles.tabItemText}>Bảng feed</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabItemContainer}>
                            <View style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 10 }}>
                                <VectorIcon
                                    name="account-group"
                                    type="MaterialCommunityIcons"
                                    size={21}>
                                </VectorIcon>
                                <Text style={styles.tabItemText}>Nhóm</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.utilTabRow}>
                        <TouchableOpacity style={styles.tabItemContainer}>
                            <View style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 10 }}>
                                <VectorIcon
                                    name="shop"
                                    type="Entypo"
                                    size={21}>
                                </VectorIcon>
                                <Text style={styles.tabItemText}>MarketPlace</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabItemContainer}>
                            <View style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 10 }}>
                                <VectorIcon
                                    name="youtube-tv"
                                    type="MaterialCommunityIcons"
                                    size={21}>
                                </VectorIcon>
                                <Text style={styles.tabItemText}>Video</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.utilTabRow}>
                        <TouchableOpacity style={styles.tabItemContainer}>
                            <View style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 10 }}>
                                <VectorIcon
                                    name="event"
                                    type="MaterialIcons"
                                    size={21}>
                                </VectorIcon>
                                <Text style={styles.tabItemText}>Sự kiện</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabItemContainer}>
                            <View style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 10 }}>
                                <VectorIcon
                                    name="poll"
                                    type="FontAwesome5"
                                    size={21}>
                                </VectorIcon>
                                <Text style={styles.tabItemText}>Khảo sát</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View>
                        <TouchableOpacity onPress={toggleHelp}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <VectorIcon
                                    name="question-circle"
                                    type="FontAwesome5"
                                    size={20}
                                />
                                <Text style={{ marginRight: 8 }}>Trợ giúp & hỗ trợ</Text>
                                <AntDesign
                                    name={helpExpanded ? 'up' : 'down'}
                                    size={18}
                                    color="black"
                                />
                            </View>
                        </TouchableOpacity>
                        <Collapsible collapsed={!helpExpanded}>
                            <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
                                <Text>Trợ giúp & hỗ trợ</Text>
                            </View>
                        </Collapsible>
                    </View>
                    <View>
                        <TouchableOpacity onPress={toggleSetting}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <VectorIcon
                                    name="cog"
                                    type="FontAwesome5"
                                    size={20}
                                />
                                <Text style={{ marginRight: 8 }}>Cài đặt & quyền riêng tư</Text>
                                <AntDesign
                                    name={settingExpanded ? 'up' : 'down'}
                                    size={18}
                                    color="black"
                                />
                            </View>
                        </TouchableOpacity>
                        <Collapsible collapsed={!settingExpanded}>
                            <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
                                <Text>Cài đặt & quyền riêng tư</Text>
                            </View>
                        </Collapsible>
                    </View>
                </View>
                <View style={styles.logoutContainer}>
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
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 10
    },
    logoutContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 18,
        marginTop: 10,
        backgroundColor: '#EBECF0',
        alignItems: 'center',
    },
    utilTab: {
        display: 'flex',
        marginTop: 10,
        marginLeft: 8,
        marginRight: 8
    },
    utilTabRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    tabItemContainer: {
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOffset: {
            width: 8,
            height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        width: windowWidth / 2.12
    },
    tabItemText: {
        fontSize: 20
    }
});

export default Setting;