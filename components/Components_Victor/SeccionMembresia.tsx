import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles/SecciónMembresía.styles';

const SeccionMembresia: React.FC = () => {
  const handleRegister = () => console.log('Registro iniciado');

  return (
    <View style={styles.membershipSection}>
      <View style={styles.rowContainer}>
        {/* Izquierda: Membresía */}
        <View style={styles.columnLeft}>
          <Text style={styles.membershipTitle}>¿Nuevo en Gym-PowerZone?</Text>

          <Text style={styles.offerText}>
            Tu membresía es hasta 2 meses GRATIS
          </Text>
          <Text style={styles.membershipPrice}>($52.50 por mes)</Text>

          <Text style={styles.membershipDescription}>
            Gymso es una plantilla HTML gratuita creada por TemplateMo para tu sitio web comercial.
            Bootstrap v4.3.1 Layout. ¡Siéntete libre de usarla!
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

        {/* Derecha: Horarios */}
        <View style={styles.columnRight}>
          <Text style={styles.scheduleTitle}>Horario de atención</Text>
          <Text style={styles.scheduleItem}>Domingo: Cerrado</Text>
          <Text style={styles.scheduleItem}>Lunes - Viernes: 7:00 AM - 11:00 PM</Text>
          <Text style={styles.scheduleItem}>Sábado: 9:00 AM - 4:00 PM</Text>
        </View>
      </View>
    </View>
  );
};

export default SeccionMembresia;
