import { FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState, useCallback } from 'react'

const ImageCarousel = ({ images }: { images: [string] }) => {
   const [activeIndex, setActiveIndex] = useState(0);
    const windowWidth = useWindowDimensions().width;

    const onFlatlistUpdate = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0);
        }
            console.log(viewableItems)
        }, []);

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
                viewabilityConfig={{viewAreaoveragePercentThreshold: 50,
            }}
                onViewableItemsChanged={onFlatlistUpdate}
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
        resizeMode: 'contain',
    },
    dots:{
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    dot:{
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderColor: '#c9c9c9'
    }
})

export default ImageCarousel

