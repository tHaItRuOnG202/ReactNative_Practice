import { TouchableOpacity } from "react-native";
import { Button, Text, View } from "react-native";
import { Link } from "react-router-native";

const Register = () => {
    return (
        <View>
            <Text>Cô Minh Hiếu</Text>
            <TouchableOpacity>
                <Link to="/">
                    <Text>Press me</Text>
                </Link>
            </TouchableOpacity>
        </View>
    )
}

export default Register;