import { Video } from 'expo-av';
import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HeroVideo() {
  const handleGetStarted = () => {
    Alert.alert('GET STARTED', 'Funcionalidad iniciada.');
  };

  const handleLearnMore = () => {
    Alert.alert('LEARN MORE', 'Más información disponible.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.heroSection}>
        <Video
          source={require('@/assets/videos/presentación.mp4')}
          rate={1.0}
          volume={1.0}
          isMuted
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
        />

        <View style={styles.overlayBackground} />

        <View style={styles.overlay}>
          <Text style={styles.title}>¡Nueva forma de construir un estilo de vida saludable!</Text>
          <Text style={styles.subtitle}>MEJORA TU CUERPO EN</Text>
          <Text style={styles.subtitle2}>GYMSO FITNESS</Text>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={handleGetStarted} style={styles.button}>
              <Text style={styles.buttonText}>COMENZAR</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLearnMore} style={styles.buttonOutline}>
              <Text style={styles.buttonTextOutline}>MÁS INFORMACIÓN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroSection: {
    width: '100%',
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    zIndex: -2,
  },
  overlayBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: -1,
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
  },
  title: {
    color: '#575759',
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'none', // en minúsculas
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase', // en MAYÚSCULAS
    textAlign: 'center',
  },
  subtitle2: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase', // en MAYÚSCULAS
    textAlign: 'center',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: '',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 0, // cuadrado
  },
  buttonText: {
    color: '#fff',
    fontWeight: '',
    fontSize: 14,
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: '#ff4500',
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 0, // cuadrado
  },
  buttonTextOutline: {
    color: '#ff4500',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
