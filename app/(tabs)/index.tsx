import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from '@/components/Navbar';
import Carousel from '@/components/carrusel';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <Navbar />
      <Carousel />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});