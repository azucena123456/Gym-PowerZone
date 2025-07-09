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
        {/* Texto a la izquierda */}
        <View style={styles.textSection}>
          <Text style={styles.title}>Hola, somos Gym-PowerZone</Text>
          <Text style={styles.paragraph}>
            Tu centro de transformación física y mental.
            Ofrecemos entrenadores certificados, programas especializados y atención personalizada.
          </Text>
          <Text style={styles.paragraph}>
           Estamos listos para ayudarte a alcanzar tus objetivos.
          </Text>
        </View>

        {/* Tarjetas a la derecha */}
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
                <Icon name="instagram" size={12} color="#999" style={styles.iconRightOfText} />
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
                <Icon name="facebook" size={12} color="#999" style={styles.iconRightOfText} />
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
    backgroundColor: '#f8f8f8',
    paddingVertical: 50,
    alignItems: 'center',
  },
  contentBox: {
    backgroundColor: 'rgba(242, 241, 241, 0.01)',
    width: '100%',
    maxWidth: 1200,
    borderRadius: 12,
    flexDirection: width > 768 ? 'row' : 'column',
    padding: 30,
    gap: 20,
    shadowColor: 'rgba(17, 16, 16, 0.02)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  textSection: {
    flex: 1,
    paddingRight: width > 768 ? 30 : 0,
    marginBottom: width > 768 ? 0 : 20,
    paddingLeft: 150, 
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 10,
    textAlign: 'justify',
  },
  cardsSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: width > 768 ? 'flex-start' : 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: 210, // ← Más ancho
    borderRadius: 0,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 20,
  },
  cardImage: {
    width: '100%', // ← Se adapta automáticamente al nuevo ancho
    height: 250,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 18,
    alignItems: 'center',
  },
  textIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  iconRightOfText: {
    marginLeft: 80, // ← Más separación del texto
  },
  cardName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111',
  },
  cardRole: {
    fontSize: 12,
    color: '#777',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginTop: 10,
  },
});
