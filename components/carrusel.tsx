import React, { useRef, useState } from 'react';
import { ScrollView, View, Text, Image,   Dimensions,  } from 'react-native';
import { styles } from './carrusel.styles';

interface CaruselItem {
  id: number;
  title: string;
  image: any;
  entrenadora?: string;
  description?: string;
  ctaText?: string;
}

const Carusel: React.FC = () => {
  const { width: screenWidth } = Dimensions.get('window');
  const isMobile = screenWidth < 768; 
  const itemWidth = isMobile ? screenWidth * 0.75 : screenWidth * 0.27;
  const imageHeight = isMobile ? 120 : 245;
  

  
  const scrollViewRef = useRef<ScrollView>(null);
  const [data] = useState<CaruselItem[]>([
    {
      id: 1,
      title: 'Aerobic',
      image: require('../assets/images/Aerobic.png'),
      entrenadora: 'Entrenador ~ Luis',
      description: 'Sesiones dinámicas que combinan música y movimiento para fortalecer el sistema cardiovascular y aumentar la energía.',
      ctaText: '$90'
    },
    {
      id: 2,
      title: 'Cardio',
      image: require('../assets/images/cardio.jpg'),
      entrenadora: 'Entrenadora ~ Sofia',
      description: 'Entrenamientos intensos por intervalos diseñados para quemar calorías rápidamente y mejorar la resistencia física..',
      ctaText: '$90'
    },
    {
      id: 3,
      title: 'Crossfit',
      image: require('../assets/images/Crossfit.png'),
      entrenadora: 'Entrenador ~ Javier',
      description:'Programa de alta intensidad que trabaja fuerza, velocidad y técnica. Ideal para quienes buscan un reto físico completo.',
      ctaText: '$90'
    },
    {
      id: 4,
      title: 'Yoga',
      image: require('../assets/images/yoga.jpg'),
      entrenadora: 'Entrenadora ~ Emma',
      description:'Relajación profunda, mejora de la flexibilidad y control de la respiración. Ideal para equilibrar cuerpo y mente',
      ctaText: '$ 90'
    },
    {
      id: 5,
      title: 'Pilates',
      image: require('../assets/images/pilates.jpg'),
      entrenadora: 'Entrenadora ~ Emma',
      description:'Fortalece el core, mejora la postura y aumenta el tono muscular mediante ejercicios suaves y controlados.',
      ctaText: '$ 90'
    },
    {
      id: 6,
      title: 'Zumba',
      image: require('../assets/images/Zumba.jpg'),
      entrenadora: 'Entrenador ~ Diego',
      description:'Clases llenas de ritmo y energía con movimientos de baile que ayudan a tonificar el cuerpo y eliminar el estrés.',
      ctaText: '$ 90'
    },
  ]);

  const infiniteData = [...data, ...data, ...data];
  const dataLength = data.length;
  const infiniteDataLength = infiniteData.length;

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const centerOffset = contentOffset + screenWidth / 2;
    const activeIndex = Math.floor(centerOffset / itemWidth);

    if (activeIndex >= infiniteDataLength - dataLength) {
      const newIndex = activeIndex % dataLength;
      const newOffset = newIndex * itemWidth + (dataLength * itemWidth);
      scrollViewRef.current?.scrollTo({ x: newOffset, animated: false });
    } else if (activeIndex <= dataLength - 1) {
      const newIndex = activeIndex % dataLength;
      const newOffset = newIndex * itemWidth + (dataLength * itemWidth);
      scrollViewRef.current?.scrollTo({ x: newOffset, animated: false });
    }
  };

  const getItemLayout = (data: any, index: number) => ({
    length: itemWidth,
    offset: itemWidth * index,
    index,
  });

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
  pagingEnabled={false}
  snapToInterval={itemWidth + (isMobile ? 15 : 25)} 
  snapToAlignment="start" 
  decelerationRate="fast"
  disableIntervalMomentum={true} 
  getItemLayout={getItemLayout}
  initialScrollIndex={dataLength}
>
        {infiniteData.map((item, index) => (
          <View key={`${item.id}-${index}`} style={[styles.slide, { width: itemWidth }]}>
            <Image 
              source={item.image} 
              style={[styles.image, { height: imageHeight }]}
              resizeMode="cover"
            />
            
            <View style={[styles.textContainer, isMobile && styles.mobileTextContainer]}>
              <View style={styles.titleContainer}>
                <Text style={[styles.slideTitle, isMobile && styles.mobileSlideTitle]}>
                  {item.title}
                  
                </Text>
              </View>
              
              <View style={styles.contentWrapper}>
                <View style={styles.textContent}>
                  {item.entrenadora && (
                    <Text style={[styles.entrenadoraText, isMobile && styles.mobileEntrenadoraText]}>
                      {item.entrenadora.split('~')[0]}~{' '}
                      <Text style={styles.nombreEntrenador}>
                        {item.entrenadora.split('~')[1].trim()}
                      </Text>
                    </Text>
                  )}
                  
                  {item.description && (
                    <Text style={[styles.slideDescription, isMobile && styles.mobileSlideDescription]}>
                      {item.description}
                      
                    </Text>
                  )}
                </View>
                
                {item.ctaText && (
                <View style={[styles.ctaCircle, isMobile && styles.mobileCtaCircle]} selectable={false}>
                <Text style={styles.ctaText}>{item.ctaText}</Text>
                
                </View>
                  )}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


export default Carusel;