import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles/SecciónMembresía.styles';

const SeccionMembresia: React.FC = () => {
  const handleRegister = () => console.log('Registro iniciado');

  return (
    <View style={styles.membershipSection}>
      <View style={styles.rowContainer}>
        <View style={styles.columnLeft}>
          <Text style={styles.membershipTitle}>¿Nuevo en Gym-PowerZone?</Text>
          <Text style={styles.offerText}>
            Tu membresía incluye hasta 3 meses GRATIS
          </Text>
          <Text style={styles.membershipPrice}>($400 por mes)</Text>
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
        </View>

        <View style={styles.divider} />

        <View style={styles.columnRight}>
          <Text style={styles.scheduleTitle}>Horario de atención</Text>
          <View style={styles.scheduleGroup}>
            <Text style={styles.scheduleDay}>Domingo: Cerrado</Text>
          </View>
          <View style={styles.scheduleGroup}>
            <Text style={styles.scheduleDay}>Lunes - Viernes</Text>
            <Text style={styles.scheduleTime}>6:00 AM - 10:00 PM</Text>
          </View>
          <View style={styles.scheduleGroup}>
            <Text style={styles.scheduleDay}>Sábado</Text>
            <Text style={styles.scheduleTime}>8:00 AM - 4:00 PM</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SeccionMembresia;