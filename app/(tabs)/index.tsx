import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import SeccionMembresia from '@/components/Components_Victor/SeccionMembresia';
import { Navbar } from '@/components/Navbar';
import WeAreGymso from '@/components/ui/PresentacionGymso';
import HeroVideo from '@/components/ui/PresentacionVideo';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* ✅ Sección de video al inicio */}
        <HeroVideo />

        {/* ✅ Sección de membresía */}
        <View style={styles.content}>
          <SeccionMembresia />
        </View>

        {/* ✅ Sección 'prentacion Gymso' sin contenedor con padding */}
        <WeAreGymso />
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
    padding: 20, // Esto se aplica solo a secciones como SeccionMembresia, no a la caja blanca
  },
});
