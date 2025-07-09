import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Navbar } from '@/components/Navbar';
import SeccionMembresia from '@/components/Components_Victor/SeccionMembresia';
import SeccionHorario from '@/components/Components_Victor/SeccionHorario';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.content}>
        <SeccionMembresia />
        <View style={styles.separator} />
        <SeccionHorario />
        <View style={styles.separator} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  separator: {
    height: 30,
    backgroundColor: 'transparent',
  },
});