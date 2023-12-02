import { MaterialIcons } from "@expo/vector-icons";
import { Button, Center } from "native-base";
import { Fragment } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { Link } from "react-router-native";
import { windowHeight, windowWidth } from "../utils/dimensions";

const Login = () => {
    return (
        <Fragment>
            <View style={styles.container}>
                <Image source={require('../images/IMPROOK.png')} style={styles.logo} />
                <Text style={styles.text}>IM'PROOK SOCIAL APP</Text>
                <View>
                    <View style={styles.inputView}>
                        <MaterialIcons name="person" size={24} color="black" style={styles.icon} />
                        <TextInput style={styles.input} placeholder="Tên người dùng" numberOfLines={1} />
                    </View>
                    <View style={styles.inputView}>
                        <MaterialIcons name="https" size={24} color="black" style={styles.icon} />
                        <TextInput style={styles.input} placeholder="Mật khẩu" numberOfLines={1} />
                    </View>
                    <Link to="/register">
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </Link>
                    <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                        <Text style={styles.navButtonText}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.forgotButton}>
                        <Text style={styles.navButtonText}>
                            Bạn chưa có tài khoản? Đăng ký <Link to="/register"><Text style={styles.navButtonText}>tại đây</Text></Link>
                        </Text>
                    </TouchableOpacity>
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
});

export default Login;