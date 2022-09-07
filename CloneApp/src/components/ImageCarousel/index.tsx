import { FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'

const ImageCarousel = ({ images }) => {
   const [activeIndex, setActiveIndex] = useState(0);
    const windowWidth = useWindowDimensions().width;
    return (
        <View style={styles.root}>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <Image
                        style={[styles.image, {width: windowWidth -20 }]}
                        source={{ uri: item }}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{viewAreaoveragePercentThreshold:50,
            }}
                onViewableItemsChanged={({
                    viewableItems }) => {
                        console.log(viewableItems)
                    }}
            />
       
            <View style={styles.dots}>
               {images.map((image, index) => (
                  <View
                   style={[
                    styles.dot,
                     {
                        backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'
                     }
                    ]} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {

    },
    image: {
        margin: 10,
        height: 250,
        backgroundColor: 'red',
        resizeMode: 'contain',
    },
    dots:{
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    dot:{
        width: 25,
        height: 25,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#c9c9c9'
    }
})

export default ImageCarousel

