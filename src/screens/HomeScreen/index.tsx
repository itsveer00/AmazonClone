import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, View, useColorScheme, SafeAreaView, StatusBar, Image, FlatList, ScrollView } from 'react-native';
import ProductItem from '../../components/ProductItem'
import products from '../../data/products';

console.warn(products);

const HomeScreen = ({ searchValue }: { searchValue: string }) => {
  console.log(searchValue);
  return (
    <ScrollView style={styles.page}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
export default HomeScreen;