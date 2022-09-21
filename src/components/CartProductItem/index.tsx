import { StyleSheet, View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import QuantitySelector from '../QuantitySelector'

interface CartProductItemProps{
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
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
}

const CartProductItem = ({ cartItem }: CartProductItemProps) => {
  const {quantity: quantityProp, item} = cartItem;
  console.warn("products");

  const {quantity, setQuantity} = useState(quantityProp);
  

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    page:{
     padding: 10,
    },
    root:{
       borderWidth: 1,
       borderColor: '#d1d1d1',
       borderRadius: 10,
       backgroundColor: '#fff',
       marginVertical: 5,
    },
    row:{
       flexDirection: 'row',
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
    },
    quantityContainer: {
      margin: 5,
    },
  });

export default CartProductItem;