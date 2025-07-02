import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/SecciónHorario.styles';

type DiaClave = 'lunes' | 'martes' | 'miercoles' | 'jueves' | 'viernes' | 'sabado';

interface HorarioFila {
  hora: string;
  lunes?: string;
  martes?: string;
  miercoles?: string;
  jueves?: string;
  viernes?: string;
  sabado?: string;
}

const dias: { etiqueta: string; clave: DiaClave }[] = [
  { etiqueta: 'LUN', clave: 'lunes' },
  { etiqueta: 'MAR', clave: 'martes' },
  { etiqueta: 'MIÉ', clave: 'miercoles' },
  { etiqueta: 'JUE', clave: 'jueves' },
  { etiqueta: 'VIE', clave: 'viernes' },
  { etiqueta: 'SÁB', clave: 'sabado' },
];

const horario: HorarioFila[] = [
  { hora: '7:00 AM', lunes: 'Cardio\n7:00 AM - 9:00 AM', viernes: 'Yoga\n7:00 AM - 9:00 AM' },
  { hora: '8:00 AM', jueves: 'Aerobic\n8:00 AM - 9:00 AM', sabado: 'Cardio\n8:00 AM - 9:00 AM' },
  { hora: '9:00 AM', martes: 'Zumba\n9:00 AM - 10:00 AM', miercoles: 'Pilates\n9:00 AM - 10:00 AM' },
  { hora: '11:30 AM', miercoles: 'Aerobic\n11:30 AM - 3:30 PM' },
  { hora: '6:00 PM', jueves: 'Cardio\n6:00 PM - 9:00 PM' },
  { hora: '5:00 PM', sabado: 'Crossfit\n5:00 PM - 7:00 PM' },
];

const SeccionHorario: React.FC = () => {
  return (
    <ScrollView horizontal style={styles.container}>
      <View>
        {/* Encabezado */}
        <View style={styles.headerRow}>
          <View style={styles.headerCellTime}>
            <Text style={styles.headerText}>🗓</Text>
          </View>
          {dias.map((dia) => (
            <View key={dia.clave} style={styles.headerCell}>
              <Text style={styles.headerText}>{dia.etiqueta}</Text>
            </View>
          ))}
        </View>

        {/* Cuerpo */}
        {horario.map((fila, index) => (
          <View key={index} style={styles.row}>
            <View style={styles.timeCell}>
              <Text style={styles.timeText}>{fila.hora}</Text>
            </View>
            {dias.map((dia) => {
              const actividad = fila[dia.clave];
              return (
                <View key={dia.clave} style={styles.cell}>
                  {actividad && (
                    <>
                      <Text style={styles.activityText}>{actividad.split('\n')[0]}</Text>
                      <Text style={styles.timeRangeText}>{actividad.split('\n')[1]}</Text>
                    </>
                  )}
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default SeccionHorario;
