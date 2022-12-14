import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const QuantitySelector = (quantity, setQuantity) => {

   const onMinus = () => {
      setQuantity(Math.max(0, quantity - 1));
   }; 

   const onPlus = () => {
      setQuantity(quantity + 1);
  }

  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    width: 100,
  },

  button:{
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c2c2c2',
  },

  buttonText:{
     fontSize: 18,

  },
  quantity:{
    
  }
});

export default QuantitySelector;