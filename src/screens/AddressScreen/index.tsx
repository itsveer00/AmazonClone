import { StyleSheet, Text, View, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-List';
import Button from '../../components/Button';
import { text } from '@fortawesome/fontawesome-svg-core';

const countries = countryList.getData();

const AddressScreen = () => {
    const [country, setCountry] = useState(countries[0].code);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [addressError, setAddressError] = useState('');
   

    const onCheckout = () => {
        if(!!addressError) {
          Alert.alert('Fix all field errors before submiting')
          return;
        }

        if(!fullname){
            Alert.alert('Please Enter full name')
            return;  
        }

        if(!phone) {
            Alert.alert('Please Enter phone number')
            return;  
        }
        console.warn('Success, Checkout');
    }

    const validateAddress = () => {
      if (address.length < 3) {
        setAddressError('Address is too short');
      }
      if (address.length > 10) {
        setAddressError('Address is too long');
      }
    }

  return (
    <KeyboardAvoidingView>
       
    <ScrollView style={styles.root}>
      <View style={styles.row}>
         <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map(country => (
            <Picker.Item value={country.code} label={country.name} />
            ))}
         </Picker>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Full name (First and Last name)</Text>
        <TextInput
          style={styles.input}
          placeholder='Full Name'
          value={fullname}
          onChangeText={setFullname} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Phone number</Text>
        <TextInput
         style={styles.input}
          placeholder='Phone number'
          value={phone}
          onChangeText={setPhone}
          keyboardType={'phone-pad'}
          />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Phone number</Text>
        <TextInput
         style={styles.input}
          placeholder='Phone number'
          value={phone}
          onChangeText={setPhone}
          keyboardType={'phone-pad'}
          />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Address</Text>
        <TextInput
         style={styles.input}
          placeholder='Address'
          value={address}
          onEndEditing={validateAddress}
          onChangeText={(text => {
            setAddress(text);
            setAddressError('')
          })}
          />
          {!!addressError && (
            <Text style={styles.errorLabel}>{addressError}</Text>
           )}
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>City</Text>
        <TextInput
         style={styles.input}
          placeholder='City'
          value={city}
          onChangeText={setCity}
          />
      </View>
      <Button text='Checkout' onPress={onCheckout} />
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AddressScreen

const styles = StyleSheet.create({
    root: {
     padding: 10,
    },
    row: {
      marginVertical: 5,
    },
    label: {
     fontWeight: 'bold'
    },
    input: {
     backgroundColor: 'white',
     padding: 5,
     marginVertical: 5,
     height: 30,
     borderWidth: 1,
     borderColor: 'lightgrey',
     borderRadius: 2,
    },
    errorLabel: {
      color: 'red',
    },
})