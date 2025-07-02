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
      <View style={styles.innerContainer}>
        {/* Texto descriptivo */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Hello, we are Gymso</Text>
          <Text style={styles.paragraph}>
            You are NOT allowed to redistribute this HTML template downloadable ZIP file on any template collection site.
          </Text>
          <Text style={styles.paragraph}>
            You are allowed to use this template for your personal or business websites. If you have any question, you can contact Tooplate immediately.
          </Text>
        </View>

        {/* Tarjetas */}
        <View style={styles.cardsContainer}>
          {/* Tarjeta Mary */}
          <View style={styles.card}>
            <Image source={maryImage} style={styles.image} />
            <View style={styles.rowBetween}>
              <Text style={styles.name}>Mary Yan</Text>
              <View style={styles.iconColumn}>
                <Icon name="twitter" size={14} color="#333" style={styles.icon} />
                <Icon name="instagram" size={14} color="#333" style={styles.icon} />
              </View>
            </View>
            <Text style={styles.role}>Yoga Instructor</Text>
          </View>

          {/* Tarjeta Catherine */}
          <View style={styles.card}>
            <Image source={catherineImage} style={styles.image} />
            <View style={styles.rowBetween}>
              <Text style={styles.name}>Catherine</Text>
              <View style={styles.iconColumn}>
                <Icon name="facebook" size={14} color="#333" style={styles.icon} />
                <Icon name="linkedin" size={14} color="#333" style={styles.icon} />
              </View>
            </View>
            <Text style={styles.role}>Body trainer</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#111',
    paddingVertical: 40,
  },
  innerContainer: {
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: width > 768 ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
    gap: 20,
  },
  textContainer: {
    flex: 1,
    paddingRight: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
    lineHeight: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: width > 768 ? 'flex-end' : 'center',
  },
  card: {
  width: 160,
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: 15,
  alignItems: 'flex-start', // <--- antes estaba 'center'
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 6,
  elevation: 5,
},
rowBetween: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'flex-start', // <--- más natural
  marginBottom: 6,
},
name: {
  fontSize: 16, // ligeramente más grande
  fontWeight: 'bold',
  color: '#222', // más oscuro
},
role: {
  fontSize: 13,
  color: '#999', // más claro
  marginTop: 4,
},
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 12,
  },
  iconColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  icon: {
    marginVertical: 2,
  }
});
