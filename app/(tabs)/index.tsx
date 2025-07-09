import React from 'react';
<<<<<<< HEAD
import { View, StyleSheet, ScrollView } from 'react-native';
import { Navbar } from '@/components/Navbar';
import SeccionMembresia from '@/components/Components_Victor/SeccionMembresia';
import SeccionHorario from '@/components/Components_Victor/SeccionHorario';
=======
import { ScrollView, StyleSheet, View } from 'react-native';

import SeccionMembresia from '@/components/Components_Victor/SeccionMembresia';
import { Navbar } from '@/components/Navbar';
import WeAreGymso from '@/components/ui/PresentacionGymso';
import HeroVideo from '@/components/ui/PresentacionVideo';
>>>>>>> patricia

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <Navbar />
<<<<<<< HEAD
      <ScrollView contentContainerStyle={styles.content}>
        <SeccionMembresia />
        <View style={styles.separator} />
        <SeccionHorario />
        <View style={styles.separator} />
=======
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* ✅ Sección de video al inicio */}
        <HeroVideo />

        {/* ✅ Sección de membresía */}
        <View style={styles.content}>
          <SeccionMembresia />
        </View>

        {/* ✅ Sección 'prentacion Gymso' sin contenedor con padding */}
        <WeAreGymso />
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
  },
});
>>>>>>> patricia
