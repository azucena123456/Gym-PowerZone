import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, Dimensions, StyleSheet, Platform } from 'react-native';

interface CaruselItem {
  id: number;
  title: string;
  image: any;
  entrenadora?: string;
  description?: string;
  ctaText?: string;
}

const { width: screenWidth } = Dimensions.get('window');
const isMobile = screenWidth < 768;
const CARD_WIDTH = screenWidth * (isMobile ? 0.8 : 0.25);
const CARD_HEIGHT = 440 ;
const ITEM_MARGIN = 12;
const ITEM_WIDTH = CARD_WIDTH + (ITEM_MARGIN * 2);

const styles = StyleSheet.create({
  fullWidthContainer: {
    width: '100%',
    backgroundColor: '#EEEEEE',
    paddingVertical: 100,
    paddingHorizontal: isMobile ? 30: 90,
    
  },
  nombreEntrenador: {
    color: '#333333',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: Platform.select({ ios: 20, android: 20, default: 20 }),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#818181',
  },
  headerTitle1: {
    fontSize: Platform.select({ ios: 20, android: 20, default: 28 }),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: -15,
    color: '#121212',
  },
  carouselContent: {
    alignItems: 'center',
    paddingHorizontal: isMobile ? 10 : 40,
    paddingBottom: 20,
  },
  slide: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginHorizontal: ITEM_MARGIN,
    backgroundColor: '#F9F9F9',
    borderRadius: 0,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginBottom: -8,
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textContent: {
    flex: 1,
    marginRight: 0,
  },
  slideTitle: {
    fontSize: Platform.select({ ios: 16, android: 16, default: 20 }),
    fontWeight: 'bold',
    color: '#333',
     marginBottom: 15,
  
  },
  entrenadoraText: {
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
    marginBottom: 15,
  },
  slideDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
     marginBottom: 65,
  },
  ctaCircle: {
    backgroundColor: '#F13a11',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});

const Carusel: React.FC = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data] = useState<CaruselItem[]>([
    {
      id: 1,
      title: 'Aerobic',
      image: require('../assets/images/Aerobic.png'),
      entrenadora: 'Entrenador ~ Luis',
      description: 'Sesiones dinámicas que combinan música y movimiento para fortalecer el sistema cardiovascular.',
      ctaText: '$90'
    },
    {
      id: 2,
      title: 'Cardio',
      image: require('../assets/images/cardio.jpg'),
      entrenadora: 'Entrenadora ~ Sofia',
      description: 'Entrenamientos intensos por intervalos para quemar calorías rápidamente.',
      ctaText: '$90'
    },
    {
      id: 3,
      title: 'Crossfit',
      image: require('../assets/images/Crossfit.png'),
      entrenadora: 'Entrenador ~ Javier',
      description: 'Programa de alta intensidad que trabaja fuerza, velocidad y técnica.',
      ctaText: '$90'
    },
    {
      id: 4,
      title: 'Yoga',
      image: require('../assets/images/yoga.jpg'),
      entrenadora: 'Entrenadora ~ Emma',
      description: 'Relajación profunda y mejora de la flexibilidad para equilibrar cuerpo y mente.',
      ctaText: '$90'
    },
    {
      id: 5,
      title: 'Pilates',
      image: require('../assets/images/pilates.jpg'),
      entrenadora: 'Entrenadora ~ Emma',
      description: 'Fortalece el core y mejora la postura mediante ejercicios controlados.',
      ctaText: '$90'
    },
    {
      id: 6,
      title: 'Zumba',
      image: require('../assets/images/Zumba.jpg'),
      entrenadora: 'Entrenador ~ Diego',
      description: 'Clases llenas de ritmo y energía con movimientos de baile.',
      ctaText: '$90'
    },
  ]);

  const infiniteData = [...data, ...data, ...data];
  const dataLength = data.length;

  useEffect(() => {
    
    scrollViewRef.current?.scrollTo({
      x: dataLength * ITEM_WIDTH,
      animated: false
    });
  }, []);

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor((contentOffset + ITEM_WIDTH / 2) / ITEM_WIDTH);

    
    if (newIndex < currentIndex) {
      scrollViewRef.current?.scrollTo({
        x: currentIndex * ITEM_WIDTH,
        animated: true
      });
      return;
    }

    
    if (newIndex !== currentIndex) {
      scrollViewRef.current?.scrollTo({
        x: newIndex * ITEM_WIDTH,
        animated: true
      });
      setCurrentIndex(newIndex);
    }

  
    if (newIndex >= dataLength * 2) {
      const resetIndex = newIndex % dataLength;
      scrollViewRef.current?.scrollTo({
        x: (dataLength + resetIndex) * ITEM_WIDTH,
        animated: false
      });
      setCurrentIndex(dataLength + resetIndex);
    }
  };

  return (
    <View style={styles.fullWidthContainer}>
      <Text style={styles.headerTitle}>Consigue el cuerpo ideal</Text>
      <Text style={styles.headerTitle1}>Nuestras Clases de Entrenamiento</Text>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        snapToInterval={ITEM_WIDTH}
        snapToAlignment="start"
        decelerationRate="fast"
        disableIntervalMomentum={true}
      >
        {infiniteData.map((item, index) => (
          <View key={`${item.id}-${index}`} style={styles.slide}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="cover"
            />

            <View style={styles.textContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.slideTitle}>{item.title}</Text>
              </View>

              <View style={styles.contentWrapper}>
                <View style={styles.textContent}>
                  {item.entrenadora && (
                    <Text style={styles.entrenadoraText}>
                      {item.entrenadora.split('~')[0]}~{' '}
                      <Text style={styles.nombreEntrenador}>
                        {item.entrenadora.split('~')[1].trim()}
                      </Text>
                    </Text>
                  )}

                  <Text style={styles.slideDescription}>
                    {item.description}
                  </Text>
                </View>

                <View style={styles.ctaCircle}>
                  <Text style={styles.ctaText}>{item.ctaText}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Carusel;