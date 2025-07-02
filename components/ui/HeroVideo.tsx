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
    // Aquí puedes navegar o hacer alguna acción
    Alert.alert('GET STARTED', 'Funcionalidad iniciada.');
  };

  const handleLearnMore = () => {
    // Aquí puedes navegar o mostrar más información
    Alert.alert('LEARN MORE', 'Más información disponible.');
  };

  return (
    <View style={styles.container}>
      {/* Hero Section con Video de fondo */}
      <View style={styles.heroSection}>
        <Video
          source={require('@/assets/videos/presentación.mp4')}
          rate={1.0}
          volume={1.0}
          isMuted={true}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
        />

        {/* Capa oscura sobre el video */}
        <View style={styles.overlayBackground} />

        {/* Texto y botones sobre el video */}
        <View style={styles.overlay}>
          <Text style={styles.title}>NEW WAY TO BUILD A HEALTHY LIFESTYLE!</Text>
          <Text style={styles.subtitle}>UPGRADE YOUR BODY AT</Text>
          <Text style={styles.subtitle2}>GYMSO FITNESS</Text>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={handleGetStarted} style={styles.button}>
              <Text style={styles.buttonText}>GET STARTED</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLearnMore} style={[styles.buttonOutline]}>
              <Text style={styles.buttonTextOutline}>LEARN MORE</Text>
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
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  subtitle2: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 25,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: '#ff4500',
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 25,
  },
  buttonTextOutline: {
    color: '#ff4500',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
