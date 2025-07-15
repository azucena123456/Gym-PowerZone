import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const maryImage = require('../../assets/images/tarjeta1.png');
const catherineImage = require('../../assets/images/tarjeta2.jpg');

export default function WeAreGymso(): JSX.Element {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.contentBox}>
        <View style={styles.textSection}>
          <Text style={styles.title}>Hola, somos Gym-PowerZone</Text>
          <Text style={styles.paragraph}>
            Tu centro de transformación física y mental.{"\n"}
            Ofrecemos entrenadores certificados, programas especializados y atención personalizada.
          </Text>
          <Text style={styles.paragraph}>
            Estamos listos para ayudarte a alcanzar tus objetivos.
          </Text>
        </View>

        <View style={styles.cardsSection}>
          <View style={styles.card}>
            <Image source={maryImage} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <View style={styles.textIconRow}>
                <Text style={styles.cardName}>Emma Torres</Text>
                <Icon name="twitter" size={14} color="#666" style={styles.iconRightOfText} />
              </View>
              <View style={styles.textIconRow}>
                <Text style={styles.cardRole}>Instructora de Pilates</Text>
                <Icon name="instagram" size={14} color="#666" style={styles.iconRightOfText} />
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <Image source={catherineImage} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <View style={styles.textIconRow}>
                <Text style={styles.cardName}>Carla Méndez</Text>
                <Icon name="instagram" size={14} color="#666" style={styles.iconRightOfText} />
              </View>
              <View style={styles.textIconRow}>
                <Text style={styles.cardRole}>Entrenador Personal</Text>
                <Icon name="facebook" size={14} color="#666" style={styles.iconRightOfText} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: 'rgba(250, 250, 250, 0)',
    paddingVertical: 50,
    alignItems: 'center',
    flex: 1,
  },
  contentBox: {
    width: '100%',
    maxWidth: 1000,
    flexDirection: width > 768 ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 30,
    gap: 20,
  },
  textSection: {
    flex: 1,
    paddingRight: width > 768 ? 30 : 0,
    marginBottom: width > 768 ? 0 : 20,
    maxWidth: 500,
  },
  title: {
    fontSize: 28,
    color: '#111',
    fontWeight: '800',
    fontFamily: 'Poppins-ExtraBold',
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 12,
    fontFamily: 'Poppins-Regular',
  },
  cardsSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: width > 768 ? 'flex-start' : 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: 210,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 16,
    width: '100%',
    alignItems: 'flex-start',
  },
  textIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 7,
  },
  iconRightOfText: {
    marginLeft: 35,
  },
  cardName: {
    fontSize: 16,
    color: '#111',
    fontWeight: '700',
    fontFamily: 'Montserrat-ExtraBold',
  },
  cardRole: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'Montserrat-Regular',
  },
});