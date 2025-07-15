import { useFonts } from 'expo-font';
import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';

import Carusel from '@/components/carrusel';
import ContactForm from '@/components/Components_Victor/ContactForm';
import SeccionHorario from '@/components/Components_Victor/SeccionHorario';
import SeccionMembresia from '@/components/Components_Victor/SeccionMembresia';
import { Navbar } from '@/components/Navbar';
import WeAreGymso from '@/components/ui/PresentacionGymso';
import HeroVideo from '@/components/ui/PresentacionVideo';

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
        </View>

        <View style={styles.weAreContainer}>
          <WeAreGymso />
        </View>

        <Carusel/>

        <View style={styles.horarioContainer}>
          <SeccionHorario />
        </View>

        <View style={styles.contactFormContainer}>
          <ContactForm />
        </View>

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
    flexGrow: 1,
  },
  content: {
    padding: 20,
    backgroundColor: '#121212',
  },
  weAreContainer: {
    paddingTop: 40,
    backgroundColor: '#ffffffff',
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  horarioContainer: {
    paddingVertical: 20,
    backgroundColor: '#121212',
  },
  contactFormContainer: {
    paddingVertical: 30,
    backgroundColor: '#fffefeff',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
});
