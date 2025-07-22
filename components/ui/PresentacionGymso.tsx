import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
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
                key={i}
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
    marginBottom: 26,
    letterSpacing: -0.5,
  },
  paragraph: {
    color: '#555',
    marginBottom: 12,
    fontFamily: 'sans-serif',
  },
  cardsSection: {
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
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
    paddingVertical: 4,
    marginBottom: 4,
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
