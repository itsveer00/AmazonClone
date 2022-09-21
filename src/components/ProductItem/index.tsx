import { StyleSheet, View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

interface ProductItemProps {
  item: {
    id: string,
    title: string,
    image: string,
    avgRatings: number,
    price: number,
    ratings: number,
    oldPrice: number,

  }
}

// const ProductItem = ({ item }: ProductItemProps) => {
//   const navigation = useNavigation();

//   const onPress = () => {
//     console.warn('Item pressed')
//     navigation.navigate('ProductDetails', {id: item.id})
//   }
//   return (
//     // <View style={styles.root}>
//     //   <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }} />
//     //   <View style={styles.rightContainer}>
//     //     <Text style={styles.title} numberOfLines={3}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste!</Text>
//     //     <Text style={styles.price}> from $25.22</Text>
//     //   </View>
//     // </View>
//      <Pressable onPress={onPress} style={styles.root}>
//      <Image style={styles.image} source={{ uri: item.image }} />
//      <View style={styles.rightContainer}>
//        <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
//        <Text style={styles.price}>${item.price}</Text>
//      </View>
//    </Pressable>
//   )
// }
// const styles = StyleSheet.create({
//     page:{
//      padding: 10,
//     },
//     root:{
//        flexDirection: 'row',
//        borderWidth: 1,
//        borderColor: '#d1d1d1',
//        borderRadius: 10,
//        backgroundColor: '#fff',
//        width: '95%',
//        marginVertical: 5,
//     },
//     image:{
//         flex: 1,
//         height: 150,
//         resizeMode: 'contain', 
//     }, 
//     rightContainer: {
//          padding: 10,
//          flex: 3,
//     },
//     title: {
//         fontSize: 18,
//     },
//     ratingsContainer: {

//     },
//     price: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     }
//   });

// export default ProductItem;




// -----------------------Working Code-----------------------------------------
const ProductItem = ({ item }: ProductItemProps) => {

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('ProductDetails', {id: item.id});
  };
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
        {/* <View style={styles.ratingsContainer}>
                              <FontAwesomeIcon name="star" size={18} color={'#e47911'} />
                              <FontAwesomeIcon name="star" size={18} color={'#e47911'} />
                              <FontAwesomeIcon name="star" size={18} color={'#e47911'} />
                              <FontAwesomeIcon name="star" size={18} color={'#e47911'} />
                              <FontAwesomeIcon name="star" size={18} color={'#e47911'} />
                            </View> */}
        <Text style={styles.price}>from ${item.price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },

});
export default ProductItem;