import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme, SafeAreaView, Image } from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
// import SearchBar from './src/screens/SearchBar';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SearchBar /> */}
      {/* <HomeScreen /> */}
      <ProductScreen />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    backgroundColor: 'orange',
  },
});
