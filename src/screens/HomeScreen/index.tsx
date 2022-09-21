import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, View, useColorScheme, SafeAreaView, StatusBar, Image, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem'
import products from '../../data/products';

console.warn(products);
// console.warn(ProductItem);

// const HomeScreen = () => {
//   return (
//       <View  style={styles.page}>
//          {/* <ProductItem item={products[4]} /> */}

//          <FlatList 
//          data={products}
//          renderItem={({item}) => <ProductItem item={item} />}
//          //  keyExtractor={({ id }) => id }
//          showsVerticalScrollIndicator={false}
//          />
//       </View>
//   );
// }

// const styles = StyleSheet.create({
//   page: {
//     // flex: 1,
//     padding: 10,
//     // backgroundColor: 'red',
//   },
//   root: {

//   },
//   image: {

//   }
//   });
// export default HomeScreen;

                // -----------------------Working Code-----------------------------------------
const HomeScreen = ({searchValue}: {searchValue: string}) => {
  console.log(searchValue);
  return (
    <View style={styles.page}>
         <FlatList 
            data={products}
            renderItem={({item}) => <ProductItem item={item} />}
            showsVerticalScrollIndicator={false}
         />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
padding: 10,
  },
//   root: {
// flexDirection: 'row',
// borderWidth: 1,
// borderColor: '#d1d1d1',
// borderRadius: 10,
// backgroundColor: '#fff',
//   },
//   image: {
// flex: 2,
// height: 150,
// resizeMode: 'contain',
//   },
//   rightContainer: {
// padding: 10,
// flex: 3,
//   },
//   title: {
// fontSize: 18,
//   },
//   ratingsContainer: {
// flexDirection: 'row',
// alignItems: 'center',
//   },
//   price: {
// fontSize: 18,
// fontWeight: 'bold',
//   },

  });
export default HomeScreen;