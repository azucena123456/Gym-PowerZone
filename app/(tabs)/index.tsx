import { useFonts } from 'expo-font';
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { View, StyleSheet, ScrollView } from 'react-native';
import { Navbar } from '@/components/Navbar';
import SeccionMembresia from '@/components/Components_Victor/SeccionMembresia';
import SeccionHorario from '@/components/Components_Victor/SeccionHorario';
=======
import { ScrollView, StyleSheet, View } from 'react-native';
=======
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
>>>>>>> patricia

import SeccionMembresia from '@/components/Components_Victor/SeccionMembresia';
import { Navbar } from '@/components/Navbar';
import WeAreGymso from '@/components/ui/PresentacionGymso';
import HeroVideo from '@/components/ui/PresentacionVideo';
>>>>>>> patricia

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <ScrollView contentContainerStyle={styles.content}>
        <SeccionMembresia />
        <View style={styles.separator} />
        <SeccionHorario />
        <View style={styles.separator} />
=======
=======

>>>>>>> patricia
=======
>>>>>>> patricia
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HeroVideo />

        <View style={styles.content}>
          <SeccionMembresia />
        </View>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* ✅ Sección 'prentacion Gymso' sin contenedor con padding */}
        <WeAreGymso />
>>>>>>> patricia
=======
        {/* Sección "We Are Gymso" */}
=======
>>>>>>> patricia
        <View style={styles.weAreContainer}>
          <WeAreGymso />
        </View>
>>>>>>> patricia
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
<<<<<<< HEAD
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  separator: {
    height: 30,
    backgroundColor: 'transparent',
  },
});
=======
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
<<<<<<< HEAD
});
>>>>>>> patricia
=======
});
>>>>>>> patricia
