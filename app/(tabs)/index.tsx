import { useFonts } from 'expo-font';
import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';

// Componentes personalizados
import SeccionMembresia from '@/components/Components_Victor/SeccionMembresia';
import { Navbar } from '@/components/Navbar';
import WeAreGymso from '@/components/ui/PresentacionGymso';
import HeroVideo from '@/components/ui/PresentacionVideo';
import Carusel from '@/components/carrusel';

export default function HomeScreen() {
  // Carga de fuentes personalizadas
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-ExtraBold': require('@/assets/fonts/Poppins-ExtraBold.ttf'),
    'Montserrat-Regular': require('@/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-ExtraBold': require('@/assets/fonts/Montserrat-ExtraBold.ttf'),
  });

  // Mientras se cargan las fuentes, mostrar indicador de carga
  if (!fontsLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Sección de video de bienvenida */}
        <HeroVideo />

        {/* Sección de membresía */}
        <View style={styles.content}>
          <SeccionMembresia />
        </View>

        {/* Sección "We Are Gymso" */}
        <View style={styles.weAreContainer}>
          <WeAreGymso />

          
        </View>
        <Carusel/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#121212', // Fondo oscuro
  },
  scrollContent: {
    paddingBottom: 40,
  },
  content: {
    padding: 20,
    backgroundColor: '#121212',
  },
  weAreContainer: {
    paddingTop: 40,
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
});