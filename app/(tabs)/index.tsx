import { useFonts } from 'expo-font';
import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';

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
<<<<<<< HEAD
=======
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
>>>>>>> 0ad32b6f5cae0c95b7bc52da1ec860ffb91f9574
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HeroVideo />

        <View style={styles.content}>
          <SeccionMembresia />
        </View>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
        {/* ✅ Sección 'prentacion Gymso' sin contenedor con padding */}
        <WeAreGymso />
>>>>>>> patricia
=======
>>>>>>> 0ad32b6f5cae0c95b7bc52da1ec860ffb91f9574
        {/* Sección "We Are Gymso" */}
=======
>>>>>>> patricia
        <View style={styles.weAreContainer}>
          <WeAreGymso />
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
