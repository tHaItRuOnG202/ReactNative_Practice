import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Register from './components/register';
import { NativeBaseProvider } from 'native-base';
import Login from './components/login';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Linda coffee to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App() {
  return (
    <NativeRouter>
      <NativeBaseProvider>
        <View style={styles.container}>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </View>
      </NativeBaseProvider>
    </NativeRouter>
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
