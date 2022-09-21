import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme, SafeAreaView, Image } from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';
import CartProductItem from './src/components/CartProductItem';
import ImageCarousel from './src/components/ImageCarousel';
import AddressScreen from './src/screens/AddressScreen';
import Router from './src/router';
import ProductItem from './src/components/ProductItem';
// import SearchBar from './src/screens/SearchBar';

export default function App() {
  return (

  // <SafeAreaView>
  //   <StatusBar />
  //   <ProductScreen />
  // </SafeAreaView>

    <View style={styles.container}>
      {/* <SearchBar /> */}
      {/* <HomeScreen /> //working// */}
      {/* <ProductScreen /> //working// */}
      {/* <ShoppingCartScreen /> //working//  */}
      {/* <AddressScreen />   //working// */}
      <Router />
      {/* <ImageCarousel /> //working// */}
      {/* <CartProductItem /> //working// */}
      {/* <StatusBar style="auto" /> */}
      {/* <ProductItem /> //working// */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    backgroundColor: 'orange',
    flex: 1,
  },
});
