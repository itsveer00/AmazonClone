import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import product from '../../data/product'
import QuantitySelector from '../../components/QuantitySelector';
import {Picker} from '@react-native-picker/picker';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
  const [selectedOption, setslectedOption] = useState(product.options ? product.options[0]: null);
  const [quantity, setQuantity] = useState(1);
  console.log(selectedOption);
  console.log(product.images);

  return(
    <View style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
       <ImageCarousel images={product.images[0]}/>

       <Picker
       selectedValue={selectedOption}
       onValueChange={(itemValue) =>
        setslectedOption(itemValue)
      }
       >
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
   
      <Button text={'Add To Cart'} onPress={() => {
        console.warn('Add to cart');
       }}
        containerStyles={{ backgroundColor: 'e3c9005' }}
      />
       
       <Button text={'Buy Now'} onPress={() =>  {console.warn('Buy now')}} />
    </View>
  )
}

// const[selectedOption, setslectedOption] = useState(product.options ? product.options[0]: null)
// console.log(selectedOption);
// const ProductScreen = () => {
//   return (
//     <View>
//       <Text style={styles.title}>{product.title}</Text>
     
//       <Picker 
//         selectedValue={selectedOption}
//         onValueChange={(itemValue, itemIndex) => setslectedOption(itemValue) }>
            
//         {product.options.map(option => (
//         <Picker.Item label={option} value={option} />
//         ))}
//       </Picker>

//       <Text style={styles.price}>
//         from ${product.price}
//         {product.oldPrice && (
//           <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
//         )}
//       </Text>
//       <Text style={styles.description}>{product.description}</Text>
//     </View>
//   )
// }


const styles = StyleSheet.create({
  root: {
   padding: 10,
   backgroundColor: 'white',

  },

  title: {

  },

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