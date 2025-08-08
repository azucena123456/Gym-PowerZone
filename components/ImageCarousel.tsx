import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { carouselImages } from '../data/carouselImages';
import { CarouselImage } from '@/types'; 

const { width } = Dimensions.get('window');
const CAROUSEL_HEIGHT = 350; 

const ImageCarousel: React.FC = () => {

    if (!carouselImages || carouselImages.length === 0) {
        return null;
    }


    const firstImage = carouselImages[0];

    return (
        <View style={styles.imageContainer}>
            <ImageBackground 
                source={firstImage.uri} 
                style={styles.singleImage}
            >
                <LinearGradient 
                    colors={['rgba(255, 0, 0, 0.3)', 'transparent']} 
                    start={{ x: 0, y: 0.5 }} 
                    end={{ x: 1, y: 0.5 }}   
                    style={StyleSheet.absoluteFillObject} 
                />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: CAROUSEL_HEIGHT,
        overflow: 'hidden',
        position: 'relative',
    },
    singleImage: {
        width: width,
        height: CAROUSEL_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
    },
});

export default ImageCarousel;
