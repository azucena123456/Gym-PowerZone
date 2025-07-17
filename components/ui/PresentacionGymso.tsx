import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  findNodeHandle,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const maryImage = require('../../assets/images/tarjeta1.png');
const catherineImage = require('../../assets/images/tarjeta2.jpg');

const WeAreGymso = forwardRef((props, ref) => {
  const { onSectionVisibilityChange } = props;
  const { width, height } = useWindowDimensions();
  const scrollViewRef = useRef(null);
  const aboutUsSectionRef = useRef(null);
  const [aboutUsHeight, setAboutUsHeight] = useState(0);

  const isDesktop = width >= 1024;
  const isTablet = width >= 600 && width < 1024;
  const isPhone = width < 600;

  useImperativeHandle(ref, () => ({
    scrollToAboutUs: () => {
      if (scrollViewRef.current && aboutUsSectionRef.current) {
        const node = findNodeHandle(scrollViewRef.current);
        aboutUsSectionRef.current.measureLayout(
          node,
          (x, y) => {
            scrollViewRef.current.scrollTo({ y, animated: true });
          },
          (err) => console.error("scroll error:", err)
        );
      }
    },
  }));

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;

    if (aboutUsSectionRef.current && aboutUsHeight > 0) {
      aboutUsSectionRef.current.measureLayout(
        findNodeHandle(scrollViewRef.current),
        (x, y) => {
          const isVisible = y < scrollY + height && y + aboutUsHeight > scrollY;
          onSectionVisibilityChange?.('aboutUs', isVisible);
        },
        (err) => console.log("layout error", err)
      );
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.scrollView}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      <View
        style={styles.outerContainer}
        ref={aboutUsSectionRef}
        onLayout={(e) => setAboutUsHeight(e.nativeEvent.layout.height)}
      >
        <View
          style={[
            styles.contentBox,
            {
              flexDirection: isDesktop ? 'row' : 'column',
              justifyContent: isDesktop ? 'flex-end' : 'center',
              paddingVertical: isDesktop ? 0 : 30,
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
            <Text style={[styles.paragraph, { fontSize: isPhone ? 14 : 17, lineHeight: isPhone ? 20 : 26 }]}>
              Tu centro de transformación física y mental integral. En Gym-PowerZone, no solo entrenamos tu cuerpo, sino que fortalecemos tu mente para enfrentar cualquier desafío.
            </Text>
            <Text style={[styles.paragraph, { fontSize: isPhone ? 14 : 17, lineHeight: isPhone ? 20 : 26 }]}>
              Contamos con un equipo de entrenadores certificados y altamente experimentados que diseñan programas personalizados para tus objetivos. Estamos listos para guiarte en cada paso de tu camino.
            </Text>
          </View>

          <View
            style={[
              styles.cardsSection,
              {
                flexDirection: (isDesktop || isTablet) ? 'row' : 'column',
                justifyContent: (isDesktop || isTablet) ? 'flex-end' : 'center',
                alignItems: (isDesktop || isTablet) ? 'flex-start' : 'center',
              },
            ]}
          >
            <View
              style={[
                styles.card,
                {
                  width: 280,
                  marginBottom: isPhone ? 20 : 0,
                  marginRight: (isDesktop || isTablet) ? 15 : 0,
                },
              ]}
            >
              <Image source={maryImage} style={[styles.cardImage, { height: isPhone ? 200 : 280 }]} />
              <View style={styles.cardBody}>
                <View style={styles.textIconRow}>
                  <Text style={[styles.cardName, { fontSize: isPhone ? 16 : 20 }]}>Emma Torres</Text>
                  <Icon name="x-twitter" size={18} color="#666" />
                </View>
                <View style={styles.textIconRow}>
                  <Text style={[styles.cardRole, { fontSize: isPhone ? 12 : 15 }]}>Instructora de Pilates</Text>
                  <Icon name="instagram" size={18} color="#666" />
                </View>
              </View>
            </View>

            <View
              style={[
                styles.card,
                {
                  width: 280,
                  marginBottom: isPhone ? 20 : 0,
                  marginLeft: (isDesktop || isTablet) ? 15 : 0,
                },
              ]}
            >
              <Image source={catherineImage} style={[styles.cardImage, { height: isPhone ? 200 : 280 }]} />
              <View style={styles.cardBody}>
                <View style={styles.textIconRow}>
                  <Text style={[styles.cardName, { fontSize: isPhone ? 16 : 20 }]}>Carla Méndez</Text>
                  <Icon name="instagram" size={18} color="#666" />
                </View>
                <View style={styles.textIconRow}>
                  <Text style={[styles.cardRole, { fontSize: isPhone ? 12 : 15 }]}>Entrenador Personal</Text>
                  <Icon name="facebook" size={18} color="#666" />
                </View>
              </View>
            </View>
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
