
import React, { useRef, useState, useEffect } from 'react';
import { View, ImageBackground, StyleSheet, Dimensions, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { carouselImages } from '../data/carouselImages';
import { CarouselImage } from '@/types'; 

const { width } = Dimensions.get('window');
const CAROUSEL_HEIGHT = 350; 

const ImageCarousel: React.FC = () => {

    const flatListRef = useRef<FlatList<CarouselImage> | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);


    useEffect(() => {
    let interval = setInterval(() => {
    let nextIndex = (activeIndex + 1) % carouselImages.length;
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    }
      setActiveIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);


  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setActiveIndex(currentIndex);
  };


  return (
   <View style={styles.carouselContainer}>
    <FlatList
    ref={flatListRef}
      data={carouselImages}
       keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
         showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
        <ImageBackground source={item.uri} style={styles.carouselImage}>
            <LinearGradient 
                colors={['rgba(255, 0, 0, 0.3)', 'transparent']} 
                start={{ x: 0, y: 0.5 }} 
                end={{ x: 1, y: 0.5 }}   
                style={StyleSheet.absoluteFillObject} 
            />
        </ImageBackground>
        )}
        onScroll={handleScroll} 
        scrollEventThrottle={16} 
    />
     
    <View style={styles.paginationDots}>
      {carouselImages.map((_, index) => (
        <View
        key={index}
        style={[
        styles.dot,
        activeIndex === index ? styles.activeDot : styles.inactiveDot,
        ]}
        />
        ))}
    </View>
    </View>
    );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    height: CAROUSEL_HEIGHT,
    overflow: 'hidden',
    position: 'relative',
     },
    carouselImage: {
    width: width,
    height: CAROUSEL_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    },
    paginationDots: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    },
    dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    },  
    activeDot: {
    backgroundColor: '#E44D26',
    },
 inactiveDot: {
 backgroundColor: '#000',
 },
});

export default ImageCarousel;
