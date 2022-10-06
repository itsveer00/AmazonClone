import React from 'react';
import { StyleSheet, Text, View, useColorScheme, SafeAreaView, StatusBar, Image, FlatList, ScrollView } from 'react-native';
import ProductItem from '../../components/ProductItem';
import CartProductItem from '../../components/CartProductItem';
import products from '../../data/cart';
import product from '../../data/product';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';


const ShoppingCartScreen = () => {
    const navigation = useNavigation();
    console.warn(products);
    const totalPrice = products.reduce(
        (summedPrice, product) => summedPrice + product.item.price * product.quantity,
        0,
    );
    const onCheckout = () => {
        navigation.navigate('Address');
    }
    return (
        <ScrollView style={styles.page}>
            <FlatList
                data={products}
                renderItem={({ item }) => <CartProductItem cartItem={item} />}
                //    keyExtractor={({ id }) => id }
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View>
                        <Text style={{ fontSize: 18 }}>
                            Subtotal ({products.length} items): {' '}
                            <Text style={{ color: '#e47911', fontWeight: 'bold' }}>
                                ${totalPrice.toFixed(2)}
                            </Text>
                        </Text>
                        <Button text='Proceed to checkout'
                            onPress={onCheckout}
                            containerStyles={{ backgroundColor: '#f7e300', borderColor: '#c7b702' }}
                        />
                    </View>
                )}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        padding: 10,
    }
});
export default ShoppingCartScreen;