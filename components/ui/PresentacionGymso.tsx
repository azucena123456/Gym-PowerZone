import axios from 'axios';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  ScrollView as ScrollViewType,
  Text,
  View,
  findNodeHandle,
  useWindowDimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const fallbackImage = require('../../assets/images/tarjeta1.png');
const API_URL = 'http://192.168.0.109:3000/api/entrenadores';

export type WeAreGymsoRef = {
  scrollToAboutUs: () => void;
};

const WeAreGymso = forwardRef<WeAreGymsoRef, { onSectionVisibilityChange?: (section: string, visible: boolean) => void }>(
  (props, ref) => {
    const { onSectionVisibilityChange } = props;
    const { width, height } = useWindowDimensions();
    const scrollViewRef = useRef<ScrollViewType>(null);
    const aboutUsSectionRef = useRef<View>(null);
    const [aboutUsHeight, setAboutUsHeight] = useState(0);
    const [entrenadores, setEntrenadores] = useState<any[]>([]);

    const isDesktop = width >= 1024;
    const isTablet = width >= 600 && width < 1024;
    const isPhone = width < 600;

    useImperativeHandle(ref, () => ({
      scrollToAboutUs: () => {
        if (scrollViewRef.current && aboutUsSectionRef.current) {
          const node = findNodeHandle(scrollViewRef.current);
          aboutUsSectionRef.current.measureLayout(
            node!,
            (x, y) => {
              scrollViewRef.current?.scrollTo({ y, animated: true });
            },
            () => {
              console.error('Error al hacer scroll');
            }
          );
        }
      },
    }));

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const scrollY = event.nativeEvent.contentOffset.y;
      if (aboutUsSectionRef.current && aboutUsHeight > 0 && scrollViewRef.current) {
        const node = findNodeHandle(scrollViewRef.current);
        aboutUsSectionRef.current.measureLayout(
          node!,
          (x, y) => {
            const isVisible = y < scrollY + height && y + aboutUsHeight > scrollY;
            onSectionVisibilityChange?.('aboutUs', isVisible);
          },
          () => {
            console.warn('Error midiendo la sección aboutUs');
          }
        );
      }
    };

    useEffect(() => {
      axios
        .get(API_URL)
        .then((res) => {
          setEntrenadores(res.data);
        })
        .catch((error) => {
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
                  paddingRight: isDesktop ? 40 : 0,
                  marginBottom: isDesktop ? 0 : 30,
                },
              ]}
            >
              <Text style={[styles.title, { fontSize: isPhone ? 24 : 32 }]}>
                Hola, somos Gym-PowerZone
              </Text>
              <Text
                style={[
                  styles.paragraph,
                  { fontSize: isPhone ? 14 : 17, lineHeight: isPhone ? 20 : 26 },
                ]}
              >
                Tu centro de transformación física y mental integral. En Gym-PowerZone, no solo entrenamos tu cuerpo, sino que fortalecemos tu mente para enfrentar cualquier desafío.
              </Text>
              <Text
                style={[
                  styles.paragraph,
                  { fontSize: isPhone ? 14 : 17, lineHeight: isPhone ? 20 : 26 },
                ]}
              >
                Contamos con un equipo de entrenadores certificados y altamente experimentados que diseñan programas personalizados para tus objetivos. Estamos listos para guiarte en cada paso de tu camino.
              </Text>
            </View>

            <View
              style={[
                styles.cardsSection,
                {
                  flexDirection: isDesktop || isTablet ? 'row' : 'column',
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
                      marginHorizontal: isDesktop || isTablet ? 15 : 0,
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
                      <Text style={[styles.cardName, { fontSize: isPhone ? 16 : 20 }]}>
                        {entrenador.nombre_entrenador}
                      </Text>
                      <Icon name="instagram" size={18} color="#666" />
                    </View>
                    <View style={styles.textIconRow}>
                      <Text style={[styles.cardRole, { fontSize: isPhone ? 12 : 15 }]}>
                        {entrenador.especialidad}
                      </Text>
                      <Icon name="facebook" size={18} color="#666" />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
);

WeAreGymso.displayName = 'WeAreGymso';
export default WeAreGymso;
