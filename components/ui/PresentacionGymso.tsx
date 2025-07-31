import axios from 'axios'; 
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
  findNodeHandle,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const API_URL = 'http://localhost:3000/api/entrenadores';

const maryImage = require('../../assets/images/tarjeta1.png');
const catherineImage = require('../../assets/images/tarjeta2.jpg');

interface Entrenador {
  nombre_entrenador: string;
  especialidad: string;
  foto_url?: string;
}

const WeAreGymso = forwardRef((props, ref) => {
  const { onSectionVisibilityChange } = props;
  const { width, height } = useWindowDimensions();
  const scrollViewRef = useRef<ScrollView>(null);
  const aboutUsSectionRef = useRef<View>(null); 
  const [aboutUsHeight, setAboutUsHeight] = useState(0);
  const [entrenadores, setEntrenadores] = useState<Entrenador[]>([]);

  const isDesktop = width >= 1024;
  const isTablet = width >= 600 && width < 1024;
  const isPhone = width < 600;

  useImperativeHandle(ref, () => ({
    scrollToAboutUs: () => {
      if (scrollViewRef.current && aboutUsSectionRef.current) {
        const node = findNodeHandle(scrollViewRef.current);
        if (node) { 
          aboutUsSectionRef.current.measureLayout(
            node,
            (x, y) => {
              scrollViewRef.current?.scrollTo({ y, animated: true });
            },
            (err) => console.error("scroll error:", err)
          );
        }
      }
    },
  }));

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;

    if (aboutUsSectionRef.current && aboutUsHeight > 0 && scrollViewRef.current) {
      const node = findNodeHandle(scrollViewRef.current);
      if (node) { 
        aboutUsSectionRef.current.measureLayout(
          node,
          (x, y) => {
            const isVisible = y < scrollY + height && y + aboutUsHeight > scrollY;
            onSectionVisibilityChange?.('aboutUs', isVisible);
          },
          () => {
            console.warn('Error midiendo la sección aboutUs');
          }
        );
      }
    }
  };

  useEffect(() => {
    axios
      .get<Entrenador[]>(API_URL) 
      .then((res) => {
        setEntrenadores(res.data);
      })
      .catch((error: unknown) => {
        console.error('Error al cargar entrenadores:', error);
      });
  }, []);

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.scrollView}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      <View
        style={[
          styles.outerContainer,
          {
            paddingVertical: isPhone ? 12 : isTablet ? 20 : 32,
            justifyContent: isDesktop ? 'flex-start' : 'center',
          },
        ]}
        ref={aboutUsSectionRef}
        onLayout={(e) => setAboutUsHeight(e.nativeEvent.layout.height)}
      >
        <View
          style={[
            styles.contentBox,
            {
              flexDirection: isDesktop ? 'row' : 'column',
              alignItems: 'center',
              paddingVertical: isPhone ? 4 : 20,
            },
          ]}
        >
          <View
            style={[
              styles.textSection,
              {
                paddingRight: isDesktop ? 48 : 0,
                marginBottom: isDesktop ? 0 : 32,
                alignItems: isDesktop ? 'flex-start' : 'center',
              },
            ]}
          >
            <Text style={[styles.title, { fontSize: isPhone ? 28 : 36, textAlign: isDesktop ? 'left' : 'center' }]}>
              Hola, somos Gym-PowerZone
            </Text>
            <Text
              style={[
                styles.paragraph,
                {
                  fontSize: isPhone ? 15 : 18,
                  lineHeight: isPhone ? 24 : 30,
                  textAlign: isDesktop ? 'left' : 'center',
                  marginBottom: 16,
                  color: '#444',
                },
              ]}
            >
              Tu centro de transformación física y mental integral. En Gym-PowerZone, no solo entrenamos tu cuerpo, sino que fortalecemos tu mente para enfrentar cualquier desafío.
            </Text>
            <Text
              style={[
                styles.paragraph,
                {
                  fontSize: isPhone ? 15 : 18,
                  lineHeight: isPhone ? 24 : 30,
                  textAlign: isDesktop ? 'left' : 'center',
                  color: '#444',
                },
              ]}
            >
              Contamos con un equipo de entrenadores certificados y altamente experimentados que diseñan programas personalizados para tus objetivos. Estamos listos para guiarte en cada paso de tu camino.
            </Text>
          </View>

          <View
            style={[
              styles.cardsSection,
              {
                flexDirection: (isDesktop || isTablet) ? 'row' : 'column',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}
          >
            {entrenadores.map((entrenador, index) => (
              <View
                key={index}
                style={[
                  styles.card,
                  {
                    width: 280,
                    marginBottom: isPhone ? 24 : 0,
                    marginRight: (isDesktop && index === 0) ? 20 : 0,
                    marginLeft: (isDesktop && index === 1) ? 20 : 0,
                  },
                ]}
              >
                <Image
                  source={{ uri: entrenador.foto_url || '' }}
                  style={[styles.cardImage, { height: isPhone ? 200 : 280 }]}
                  defaultSource={fallbackImage}
                />
                <View style={styles.cardBody}>
                  <View style={styles.textIconRow}>
                    <Text style={[styles.cardName, { fontSize: isPhone ? 17 : 22 }]}>
                      {entrenador.nombre_entrenador}
                    </Text>
                    <Icon name="instagram" size={20} color="#666" />
                  </View>
                  <View style={styles.textIconRow}>
                    <Text style={[styles.cardRole, { fontSize: isPhone ? 13 : 16 }]}>
                      {entrenador.especialidad}
                    </Text>
                    <Icon name="facebook" size={20} color="#666" />
                  </View>
                </View>
              </View>
            ))}
            {entrenadores.length === 0 && (
                <>
                {[{
                  img: maryImage,
                  name: "Emma Torres",
                  role: "Instructora de Pilates",
                  icons: ['x-twitter', 'instagram'],
                }, {
                  img: catherineImage,
                  name: "Carla Méndez",
                  role: "Entrenador Personal",
                  icons: ['instagram', 'facebook'],
                }].map(({ img, name, role, icons }, i) => (
                  <View
                    key={`hardcoded-${i}`}
                    style={[
                      styles.card,
                      {
                        width: 280,
                        marginBottom: isPhone ? 24 : 0,
                        marginRight: (isDesktop && i === 0) ? 20 : 0,
                        marginLeft: (isDesktop && i === 1) ? 20 : 0,
                      },
                    ]}
                  >
                    <Image source={img} style={[styles.cardImage, { height: isPhone ? 200 : 280 }]} />
                    <View style={styles.cardBody}>
                      <View style={styles.textIconRow}>
                        <Text style={[styles.cardName, { fontSize: isPhone ? 17 : 22 }]}>{name}</Text>
                        <Icon name={icons[0]} size={20} color="#666" />
                      </View>
                      <View style={styles.textIconRow}>
                        <Text style={[styles.cardRole, { fontSize: isPhone ? 13 : 16 }]}>{role}</Text>
                        <Icon name={icons[1]} size={20} color="#666" />
                      </View>
                    </View>
                  </View>
                ))}
                </>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
});

export default WeAreGymso;

const styles = StyleSheet.create({
  scrollView: {
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
    maxWidth: 1200,
    paddingHorizontal: 30,
  },
  textSection: {
    flex: 1,
    maxWidth: 550,
    justifyContent: 'center',
  },
  title: {
    color: '#111',
    fontWeight: '700',
    fontFamily: 'sans-serif',
    marginBottom: 20,
    letterSpacing: -0.7,
  },
  paragraph: {
    color: '#555',
    marginBottom: 15,
    fontFamily: 'sans-serif',
  },
  cardsSection: {
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 0,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'flex-start',
  },
  cardImage: {
    width: '100%',
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
    paddingVertical: 2,
    marginBottom: 0,
  },
  cardName: {
    color: '#222',
    fontWeight: '700',
    fontFamily: 'sans-serif',
    flexShrink: 1,
  },
  cardRole: {
    color: '#777',
    fontFamily: 'sans-serif',
    flexShrink: 1,
  },
});