import { MaterialIcons } from "@expo/vector-icons";
import { Fragment } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { Link } from "react-router-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import Apis, { djangoAuthApi, endpoints } from "../configs/Apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { MyUserContext } from "../App";

const Login = ({ navigation }) => {
    const [user, dispatch] = useContext(MyUserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const [count, setCount] = useState('');

    // const login = (evt) => {
    //     evt.preventDefault();

    //     const process = async () => {
    //         try {
    //             setLoading(true);
    //             let res = await Apis.post(endpoints['login'], {
    //                 "username": username.trim(),
    //                 "password": password
    //             });

    //             const token = res.data

    //             await AsyncStorage.setItem('token', token);

    //             console.log(res.data)
    //             // await AsyncStorage.getItem('token')

    //             let { data } = await authApi().get(endpoints['current-user']);
    //             // const user = data;
    //             await AsyncStorage.setItem('user', JSON.stringify(data));

    //             dispatch({
    //                 "type": "login",
    //                 "payload": data
    //             });
    //             if (res.status === 200) {
    //                 navigation.navigate('Trang chủ');
    //             }
    //             setLoading(false)
    //         } catch (err) {
    //             console.error(err);
    //             console.log(err.config.headers);;
    //             setLoading(false);
    //         }
    //     }
    //     process();
    // }

    // const login = (evt) => {
    //     evt.preventDefault();

    //     const process = async () => {
    //         try {
    //             setLoading(true);
    //             let res = await Apis.post(endpoints['login'], {
    //                 "username": username.trim(),
    //                 "password": password
    //             });

    //             const token = res.data;
    //             await AsyncStorage.setItem('token', res.data);

    //             console.log(res.data);

    //             const storedToken = await AsyncStorage.getItem('token');
    //             if (res.data) {
    //                 console.log("Có token:", res.data);
    //             } else {
    //                 console.log("Không có token");
    //             }

    //             let { data } = await authApi().get(endpoints['current-user']);
    //             await AsyncStorage.setItem('user', JSON.stringify(data));

    //             dispatch({
    //                 "type": "login",
    //                 "payload": data
    //             });
    //             if (res.status === 200) {
    //                 navigation.navigate('Trang chủ');
    //             }
    //             setLoading(false);
    //         } catch (err) {
    //             console.error(err);
    //             setLoading(false);
    //         }
    //     };
    //     process();
    // };

    // const login = async (evt) => {
    //     evt.preventDefault();

    //     try {
    //         setLoading(true);

    //         const response = await fetch('http://localhost:2024//IMPROOK_CARE/api/public/login/', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 username: username.trim(),
    //                 password: password,
    //             }),
    //         });

    //         const data = await response.json();

    //         if (response.status === 200) {
    //             const token = response.data;
    //             await AsyncStorage.setItem('token', token);
    //             console.log("Đăng nhập thành công");
    //         } else {
    //             console.log("Đăng nhập thất bại");
    //         }

    //         setLoading(false);
    //     } catch (error) {
    //         console.error(error);
    //         setLoading(false);
    //     }
    // };

    // const login = async (evt) => {
    //     evt.preventDefault();

    //     const process = async () => {
    //         try {
    //             setLoading(true);

    //             const response = await fetch('http://localhost:2024/IMPROOK_CARE/api/public/login/', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     username: username.trim(),
    //                     password: password,
    //                 }),
    //             });

    //             const token = await response.data; // Sử dụng response.text() để lấy dữ liệu chuỗi từ phản hồi

    //             if (response.status === 200) {
    //                 await AsyncStorage.setItem('token', token);
    //                 console.log("Đăng nhập thành công");
    //             } else {
    //                 console.log("Đăng nhập thất bại");
    //             }
    //             setLoading(false);
    //         } catch (error) {
    //             console.error(error);
    //             setLoading(false);
    //         }
    //     }
    //     process();
    // };


    // const login = async () => {
    //     try {
    //         const res = await axios.post('http://192.168.1.134:2024/IMPROOK_CARE/api/public/login/', {
    //             'username': username,
    //             'password': password
    //         })

    //         await AsyncStorage.setItem('token', res.data);
    //         const data = await axios.get('http://192.168.1.134:2024/IMPROOK_CARE/api/auth/current-user/', {
    //             headers: {
    //                 'Authorization': res.data,
    //             },
    //         });
    //         await AsyncStorage.setItem('user', JSON.stringify(data));

    //         dispatch({
    //             "type": "login",
    //             "payload": data.data
    //         });

    //         if (res.status === 200) {
    //             console.log('Đăng nhập thành công');
    //             navigation.navigate('Trang chủ');
    //             setUsername('');
    //             setPassword('');
    //         } else {
    //             console.log('Đăng nhập thất bại');
    //         }
    //     } catch (error) {
    //         console.log('Lỗi mạng', error);
    //     }
    // };

    // const login = async () => {
    //     try {
    //         const res = await axios.get('http://192.168.1.134:2024/IMPROOK_CARE/api/public/roles/');

    //         console.log(res.data);

    //         if (res.status === 200) {
    //             console.log('Đăng nhập thành công', res.data);
    //             navigation.navigate('Trang chủ')
    //         } else {
    //             console.log('Đăng nhập thất bại');
    //         }
    //     } catch (error) {
    //         console.log('Lỗi mạng', error);
    //     }
    // };

    // const test = async () => {
    //     try {
    //         const res = await axios.get(endpoints['account']);
    //         console.log(res.data.count);
    //         setCount(res.data.count);
    //         console.log("Thành công");
    //     } catch (error) {
    //         console.log('Lỗi mạng', error);
    //     }
    // };

    const login = async () => {
        try {
            let form = new FormData();
            form.append("username", 'admin')
            form.append("password", '123456')
            form.append('client_id', 'zDnklZ6ztQVU0X4DOQEymwV96MfWhW3Hk2VHq3D9')
            form.append('client_secret', 'Wo2j1Qn6UKI691i30hmc4gZ7JCTazZ18KXNne7n2IYihCYoEw3PozWTtPc0CkiKZHtMBxOFTWISj83R5cSODQbCh9uTmNb5eefA4W9TwZmzI0D0smpz6bBf8CgSNnYDj')
            //Lưu chỗ nào đó
            form.append('grant_type', 'password')

            // const res = await axios.post(endpoints['djlogin'], {
            //     'username': username,
            //     'password': password,
            //     'client_id'
            // })

            let res = await djangoAuthApi().post(endpoints['djlogin'], form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log(res.data);

            // const token = res.data.access_token

            await AsyncStorage.setItem('token', res.data.access_token);
            const data = await axios.get('http://192.168.1.134:8000/users/current-user/', {
                headers: {
                    'Authorization': res.data.token_type + " " + res.data.access_token,
                },
            });
            await AsyncStorage.setItem('user', JSON.stringify(data));

            console.log(data.data)

            dispatch({
                "type": "login",
                "payload": data.data
            });

            if (res.status === 200) {
                console.log('Đăng nhập thành công');
                navigation.navigate('Trang chủ');
                setUsername('');
                setPassword('');
            } else {
                console.log('Đăng nhập thất bại');
            }
        } catch (error) {
            console.log('Lỗi mạng', error);
        }
    };

    return (
        <Fragment>
            <View style={styles.container}>
                <Image source={require('../images/IMPROOK.png')} style={styles.logo} />
                <Text style={styles.text}>IM'PROOK SOCIAL APP</Text>
                <View>
                    <View style={styles.inputView}>
                        <MaterialIcons name="person" size={24} color="black" style={styles.icon} />
                        <TextInput style={styles.input}
                            placeholder="Tên người dùng"
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                            numberOfLines={1} />
                    </View>
                    <View style={styles.inputView}>
                        <MaterialIcons name="https" size={24} color="black" style={styles.icon} />
                        <TextInput style={styles.input}
                            placeholder="Mật khẩu"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            numberOfLines={1}
                            secureTextEntry />
                    </View>
                    <Link to="/register">
                        <TouchableOpacity style={styles.buttonContainer} onPress={login}>
                            <Text style={styles.buttonText}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </Link>
                    {/* <Link to="/register">
                        <TouchableOpacity style={styles.buttonContainer} onPress={test}>
                            <Text style={styles.buttonText}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </Link> */}
                    <TouchableOpacity style={styles.forgotButton}>
                        <Text style={styles.navButtonText}>Bạn quên mật khẩu ư?</Text>
                    </TouchableOpacity>
                    <Link to="/register">
                        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Bài đăng')}>
                            <Text style={styles.buttonRegisterText}>Đăng ký tài khoản mới</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 200,
        width: 200,
        resizeMode: 'stretch',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    inputView: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
        textAlign: 'center'
    },
    forgotButton: {
        marginVertical: 25,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        textAlign: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonRegister: {
        marginTop: 20,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#2e64e5'
    },
    buttonRegisterText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        textAlign: 'center'
    }
});

export default Login;