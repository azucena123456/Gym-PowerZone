import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Navbar } from '@/components/Navbar';
import SeccionMembresia from '@/components/Components_Victor/SeccionMembresia';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <Navbar />
      <View style={styles.content}>
        <SeccionMembresia />
      </View>
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
    flex: 1,
    justifyContent: 'center',
  },
});
