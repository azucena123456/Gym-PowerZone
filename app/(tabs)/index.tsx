import { useFonts } from 'expo-font';
import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import { Navbar } from '@/components/Navbar';
import SeccionMembresia from '@/components/Components_Victor/SeccionMembresia';
import SeccionHorario from '@/components/Components_Victor/SeccionHorario';
import ContactMapSection from '@/components/Components_Victor/ContactMapSection';
import WeAreGymso from '@/components/ui/PresentacionGymso';
import HeroVideo from '@/components/ui/PresentacionVideo';
import Carusel from '@/components/carrusel';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-ExtraBold': require('@/assets/fonts/Poppins-ExtraBold.ttf'),
    'Montserrat-Regular': require('@/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-ExtraBold': require('@/assets/fonts/Montserrat-ExtraBold.ttf'),
  });

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
        <HeroVideo />
        
        <View style={styles.content}>
          <SeccionMembresia />
          <View style={styles.separator} />
          
          <SeccionHorario />
          <View style={styles.separator} />
          
          <ContactMapSection />
          <View style={styles.separator} />
        </View>

        <WeAreGymso />
        
        <Carusel />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  content: {
    padding: 20,
    backgroundColor: '#121212',
  },
  separator: {
    height: 30,
    backgroundColor: 'transparent',
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