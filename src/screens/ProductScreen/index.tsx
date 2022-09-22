import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import product from '../../data/product'
import {Picker} from '@react-native-picker/picker';
import {useRoute} from '@react-navigation/native'
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import QuantitySelector from '../../components/QuantitySelector';

const ProductScreen = () => {
  const [selectedOption, setslectedOption] = useState(product.options ? product.options[0]: null,);
  const [quantity, setQuantity] = useState(1);
  const route = useRoute();
  console.log(selectedOption);
  return(
    <ScrollView style={styles.root}>
       <Text style={styles.title}>{product.title}</Text>
       <ImageCarousel images={product.images}/>
       <Picker>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
       </Picker>
       <Text style={styles.price}>
          from ${product.price}
          {product.oldPrice && (
            <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
          )}
       </Text>
       <Text style={styles.description}>{product.description}</Text>
       <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
       <Button text={'Add to cart'}
        onPress={() => {
          console.warn('Add to cart')
          }}
          containerStyles={{ backgroundColor: 'e3c9005' }}
           />
       <Button text={'Buy Now'} onPress={() => {console.warn('Buy')}} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
   padding: 10,
   backgroundColor: 'white',
  },

  title: { },

  price:{
   fontSize: 18,
   fontWeight: 'bold',
  },

  oldPrice:{
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  description:{
    marginVertical: 10,
    lineHeight: 20,
    
  }
});
export default ProductScreen;