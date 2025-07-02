import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles/SecciónMembresía.styles';

const SeccionMembresia: React.FC = () => {
  const handleRegister = () => console.log('Registro iniciado');

  return (
    <View style={styles.membershipSection}>
      <Text style={styles.membershipTitle}>¿Nuevo en Gym-PowerZone?</Text>
      
      <View style={styles.offerContainer}>
        <Text style={styles.offerText}>Tu membresía incluye hasta 3 meses GRATIS</Text>
        <Text style={styles.membershipPrice}>($400 por mes)</Text>
      </View>

      <Text style={styles.membershipDescription}>
        ¡Entrena con los mejores! Acceso a pesas, cardio, HIIT, zona funcional y más.
      </Text>
      
      <Pressable 
        style={({ pressed }) => [
          styles.membershipCta,
          { opacity: pressed ? 0.8 : 1 }
        ]}
        onPress={handleRegister}
      >
        <Text style={styles.ctaText}>¡HAZTE MIEMBRO HOY!</Text>
      </Pressable>

      <Text style={styles.scheduleTitle}>Horario de atención</Text>
      <Text style={styles.scheduleItem}>Domingo: Cerrado</Text>
      <Text style={styles.scheduleItem}>Lunes - Viernes: 6:00 AM - 10:00 PM</Text>
      <Text style={styles.scheduleItem}>Sábado: 8:00 AM - 4:00 PM</Text>
    </View>
  );
};

export default SeccionMembresia;