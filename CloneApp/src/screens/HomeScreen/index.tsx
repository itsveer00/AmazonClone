import React from 'react';
import { StyleSheet, Text, View, useColorScheme, SafeAreaView, StatusBar, Image, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem'
import products from '../../data/products';
// import products from '../../data/products';
 
const HomeScreen = () => {
    return (
        <View>
           {/* <ProductItem item={products[4]} /> */}

           <FlatList 
           data={products}
           renderItem={({item}) => <ProductItem item={item} />}
           keyExtractor={({ id }) => id }
           />
        </View>
    );
}

const styles = StyleSheet.create({
   
  });
export default HomeScreen;