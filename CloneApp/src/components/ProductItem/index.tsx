import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'

interface ProductItemProps{
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

const ProductItem = ({ item }: ProductItemProps) => {
  return (
    // <View style={styles.root}>
    //   <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }} />
    //   <View style={styles.rightContainer}>
    //     <Text style={styles.title} numberOfLines={3}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste!</Text>
    //     <Text style={styles.price}> from $25.22</Text>
    //   </View>
    // </View>
     <View style={styles.root}>
     <Image style={styles.image} source={{ uri: item.image }} />
     <View style={styles.rightContainer}>
       <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
       <Text style={styles.price}>${item.price}</Text>
     </View>
   </View>
  )
}
const styles = StyleSheet.create({
    page:{
     padding: 10,
    },
    root:{
       flexDirection: 'row',
       borderWidth: 1,
       borderColor: '#d1d1d1',
       borderRadius: 10,
       backgroundColor: '#fff',
       width: '95%',
       marginVertical: 5,
    },
    image:{
        flex: 1,
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

    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    }
  });

export default ProductItem;