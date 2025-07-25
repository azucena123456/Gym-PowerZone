// app/Store.tsx
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router'; // Para la navegación de regreso o a otras secciones
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const StoreScreen: React.FC = () => {
  return (
    <LinearGradient
      colors={['#000000', '#330000', '#1a0000']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <Text style={styles.title}>¡Bienvenido a la Tienda!</Text>
        <Text style={styles.subtitle}>
          Aquí encontrarás todos nuestros productos y servicios.
        </Text>
        <Text style={styles.description}>
          Estamos trabajando para tener un catálogo increíble para ti.
          ¡Pronto podrás explorar todas nuestras ofertas!
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Comprar', 'Funcionalidad de compra en desarrollo.')}>
          <Text style={styles.buttonText}>Explorar Productos (Pronto)</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/')}>
          <Text style={styles.backToHome}>Volver al Inicio</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 30,
    width: '100%',
    maxWidth: 600,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#ff4500',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backToHome: {
    fontSize: 14,
    color: '#ff4500',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});