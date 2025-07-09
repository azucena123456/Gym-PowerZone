import React from 'react';
import { View, Text, ScrollView, useWindowDimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import createStyles from './styles/SecciónHorario.styles';

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
  { hora: '5:00 PM', sabado: 'Crossfit\n5:00 PM - 7:00 PM' },
  { hora: '6:00 PM', jueves: 'Cardio\n6:00 PM - 9:00 PM' },
 
];

const SeccionHorario: React.FC = () => {
  const { width } = useWindowDimensions();
  const styles = createStyles(width);

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.tableContainer}>
        <View style={styles.table}>
          {/* Fila de encabezado */}
          <View style={styles.headerRow}>
            <View style={styles.headerCellTime}>
              <Svg width={20} height={20} viewBox="0 0 16 16" fill="white">
                <Path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
                <Path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
              </Svg>
            </View>
            {dias.map((dia) => (
              <View key={dia.clave} style={styles.headerCell}>
                <Text style={styles.headerText}>{dia.etiqueta}</Text>
              </View>
            ))}
          </View>

          {/* Filas de horario */}
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
      </View>
    </ScrollView>
  );
};

export default SeccionHorario;