<<<<<<< Updated upstream
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    findNodeHandle
=======
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
>>>>>>> Stashed changes
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

<<<<<<< Updated upstream
const { width, height } = Dimensions.get('window');

const maryImage = require('../../assets/images/tarjeta1.png');
const catherineImage = require('../../assets/images/tarjeta2.jpg');

const WeAreGymso = forwardRef((props, ref) => {
  const { onSectionVisibilityChange } = props;
  const scrollViewRef = useRef(null);
  const aboutUsSectionRef = useRef(null);
  const [aboutUsHeight, setAboutUsHeight] = useState(0);

  React.useEffect(() => {
    if (aboutUsSectionRef.current) {
      aboutUsSectionRef.current.measure((x, y, width, height, pageX, pageY) => {
        setAboutUsHeight(height);
      });
    }
  }, []);

  useImperativeHandle(ref, () => ({
    scrollToAboutUs: () => {
      if (scrollViewRef.current && aboutUsSectionRef.current) {
        const node = findNodeHandle(aboutUsSectionRef.current);
        if (node) {
          aboutUsSectionRef.current.measureLayout(
            findNodeHandle(scrollViewRef.current),
            (x, y) => {
              scrollViewRef.current.scrollTo({ y: y, animated: true });
            },
            (error) => console.error("Measure layout error:", error)
          );
        }
      } else {
        console.warn("Refs not available for scrolling.");
      }
    },
  }));

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;

    if (aboutUsSectionRef.current && onSectionVisibilityChange && aboutUsHeight > 0 && scrollViewRef.current) {
      aboutUsSectionRef.current.measureLayout(
        findNodeHandle(scrollViewRef.current),
        (x, y) => {
          const sectionTopInScrollView = y;
          const sectionBottomInScrollView = y + aboutUsHeight;

          const isVisible = (sectionTopInScrollView < scrollY + height) && (sectionBottomInScrollView > scrollY);

          onSectionVisibilityChange('aboutUs', isVisible);
        },
        (error) => console.log("Measure layout error:", error)
      );
    }
  };

  return (
    <ScrollView ref={scrollViewRef} style={styles.fullScreenScroll} onScroll={handleScroll} scrollEventThrottle={16}>
      <View style={styles.outerContainer} ref={aboutUsSectionRef} onLayout={(event) => setAboutUsHeight(event.nativeEvent.layout.height)}>
        <View style={styles.contentBox}>
          <View style={styles.textSection}>
            <Text style={styles.title}>Hola, somos Gym-PowerZone</Text>
            <Text style={styles.paragraph}>
              Tu centro de transformación física y mental integral. En Gym-PowerZone, no solo entrenamos tu cuerpo,
              sino que fortalecemos tu mente para enfrentar cualquier desafío.
            </Text>
            <Text style={styles.paragraph}>
              Contamos con un equipo de entrenadores certificados y altamente experimentados que diseñan programas
              personalizados para tus objetivos. Estamos listos para guiarte en cada paso de tu camino.
            </Text>
          </View>

          <View style={styles.cardsSection}>
            <View style={styles.card}>
              <Image source={maryImage} style={styles.cardImage} />
              <View style={styles.cardBody}>
                <View style={styles.textIconRow}>
                  <Text style={styles.cardName}>Emma Torres</Text>
                  <Icon name="x-twitter" size={18} color="#666" style={styles.iconInRow} />
                </View>
                <View style={styles.textIconRow}>
                  <Text style={styles.cardRole}>Instructora de Pilates</Text>
                  <Icon name="instagram" size={18} color="#666" style={styles.iconInRow} />
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Image source={catherineImage} style={styles.cardImage} />
              <View style={styles.cardBody}>
                <View style={styles.textIconRow}>
                  <Text style={styles.cardName}>Carla Méndez</Text>
                  <Icon name="instagram" size={18} color="#666" style={styles.iconInRow} />
                </View>
                <View style={styles.textIconRow}>
                  <Text style={styles.cardRole}>Entrenador Personal</Text>
                  <Icon name="facebook" size={18} color="#666" style={styles.iconInRow} />
                </View>
              </View>
            </View>
=======
const maryImage = require('../../assets/images/tarjeta1.png');
const catherineImage = require('../../assets/images/tarjeta2.jpg');

export default function WeAreGymso(): JSX.Element {
  const [isLargeScreen, setIsLargeScreen] = useState(Dimensions.get('window').width > 768);

  useEffect(() => {
    const updateLayout = () => {
      setIsLargeScreen(Dimensions.get('window').width > 768);
    };

    const subscription = Dimensions.addEventListener('change', updateLayout);
    return () => subscription.remove();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.outerContainer}>
        <View style={[styles.contentBox, { flexDirection: isLargeScreen ? 'row' : 'column' }]}>
          <View style={[styles.textSection, { marginBottom: isLargeScreen ? 0 : 20 }]}>
            <Text style={styles.title}>Hola, somos Gym-PowerZone</Text>
            <Text style={styles.paragraph}>
              Tu centro de transformación física y mental.{"\n"}
              Ofrecemos entrenadores certificados, programas especializados y atención personalizada.
            </Text>
            <Text style={styles.paragraph}>
              Estamos listos para ayudarte a alcanzar tus objetivos.
            </Text>
          </View>

          <View style={[styles.cardsSection, { justifyContent: isLargeScreen ? 'flex-start' : 'center' }]}>
            {[{
              img: maryImage,
              name: "Emma Torres",
              role: "Instructora de Pilates",
              icons: ["twitter", "instagram"]
            }, {
              img: catherineImage,
              name: "Carla Méndez",
              role: "Entrenador Personal",
              icons: ["instagram", "facebook"]
            }].map((card, i) => (
              <View key={i} style={styles.card}>
                <Image source={card.img} style={styles.cardImage} />
                <View style={styles.cardBody}>
                  <View style={styles.textIconRow}>
                    <Text style={styles.cardName}>{card.name}</Text>
                    <Icon name={card.icons[0]} size={14} color="#666" style={styles.iconRightOfText} />
                  </View>
                  <View style={styles.textIconRow}>
                    <Text style={styles.cardRole}>{card.role}</Text>
                    <Icon name={card.icons[1]} size={14} color="#666" style={styles.iconRightOfText} />
                  </View>
                </View>
              </View>
            ))}
>>>>>>> Stashed changes
          </View>
        </View>
      </View>
    </ScrollView>
  );
});

export default WeAreGymso;

const styles = StyleSheet.create({
<<<<<<< Updated upstream
  fullScreenScroll: {
=======
  scrollContainer: {
    paddingBottom: 50,
  },
  outerContainer: {
    backgroundColor: 'rgba(250, 250, 250, 0)',
    paddingVertical: 50,
    alignItems: 'center',
>>>>>>> Stashed changes
    flex: 1,
    width: '100%',
  },
  outerContainer: {
    backgroundColor: '#F8F8F8',
    paddingVertical: 65,
    alignItems: 'center',
    width: '100%',
  },
  contentBox: {
    width: '100%',
<<<<<<< Updated upstream
    maxWidth: 1200,
    flexDirection: width > 768 ? 'row' : 'column',
    justifyContent: width > 768 ? 'flex-end' : 'center',
=======
    maxWidth: 1000,
    justifyContent: 'space-between',
>>>>>>> Stashed changes
    alignItems: 'flex-start',
    paddingHorizontal: 30,
    gap: 30,
    paddingVertical: width <= 768 ? 30 : 0,
  },
  textSection: {
    flex: 1,
<<<<<<< Updated upstream
    paddingRight: width > 768 ? 40 : 0,
    marginBottom: width > 768 ? 0 : 30,
    maxWidth: 550,
    justifyContent: 'center',
=======
    paddingRight: 30,
    maxWidth: 500,
>>>>>>> Stashed changes
  },
  title: {
    fontSize: 32,
    color: '#111',
    fontWeight: '700',
    fontFamily: 'sans-serif',
    marginBottom: 20,
    letterSpacing: -0.7,
  },
  paragraph: {
    fontSize: 17,
    color: '#555',
    lineHeight: 26,
    marginBottom: 15,
    fontFamily: 'sans-serif',
  },
  cardsSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
<<<<<<< Updated upstream
    gap: 25,
    justifyContent: 'flex-end',
=======
    gap: 20,
>>>>>>> Stashed changes
  },
  card: {
    backgroundColor: '#fff',
    width: 280,
    borderRadius: 0,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    marginLeft: 10,
    alignItems: 'flex-start',
  },
  cardImage: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 20,
    width: '100%',
    alignItems: 'flex-start',
  },
  textIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 0,
    paddingVertical: 2,
  },
  iconInRow: {},
  cardName: {
    fontSize: 20,
    color: '#222',
    fontWeight: '700',
    fontFamily: 'sans-serif',
    flexShrink: 1,
  },
  cardRole: {
    fontSize: 15,
    color: '#777',
    fontFamily: 'sans-serif',
    flexShrink: 1,
  },
});
