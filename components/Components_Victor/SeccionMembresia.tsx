import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles/SecciónMembresía.styles'; // Asegúrate de que la ruta sea correcta

const SeccionMembresia: React.FC = () => {
  const handleRegister = () => console.log('Registro iniciado');

  return (
    <View style={styles.membershipSection}>
      <View style={styles.rowContainer}>
        {/* Izquierda: Membresía */}
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

        {/* Línea divisoria */}
        <View style={styles.divider} />

        {/* Derecha: Horarios */}
        <View style={styles.columnRight}>
          <Text style={styles.scheduleTitle}>Horario de atención</Text>

          <View style={styles.scheduleGroup}>
            <Text style={styles.scheduleDay}>Domingo: Cerrado</Text>
            <Text style={styles.scheduleTime}></Text> {/* Este Text está vacío, puedes añadir un valor o eliminarlo si no es necesario */}
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