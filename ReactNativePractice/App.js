import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Register from './components/register';
import { NativeBaseProvider } from 'native-base';
import Login from './components/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Linda coffee to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NativeRouter>
//       <NativeBaseProvider>
//         <NavigationContainer>
//           <View style={styles.container}>
//             <Routes>
//               <Route exact path='/' element={<Login />} />
//               <Route path='/register' element={<Register />} />
//             </Routes>
//           </View>
//         </NavigationContainer>
//       </NativeBaseProvider>
//     </NativeRouter>
//   );
// }

export default function App() {
  return (
    <NativeBaseProvider>
      <NativeRouter>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Đăng nhập" component={Login} />
            <Stack.Screen name="Đăng ký" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeRouter>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
