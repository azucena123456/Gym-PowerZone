import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import createStyles from './styles/SecciónHorario.styles';

const WorkoutTimetable: React.FC = () => {
  const { width: screenWidth } = useWindowDimensions();
  const styles = createStyles(screenWidth);

  const dias = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
  const schedule = {
    '7:00 AM': {
      LUN: { activity: 'Cardio', time: '7:00 AM - 9:00 AM' },
      MAR: { activity: 'Power Fitness', time: '7:00 AM - 9:00 AM' },
      MIÉ: null,
      JUE: null,
      VIE: { activity: 'Sección de Yoga', time: '7:00 AM - 9:00 AM' },
      SÁB: { activity: 'Cardio', time: '8:00 AM - 9:00 AM' },
    },
    '9:00 AM': {
      LUN: null,
      MAR: null,
      MIÉ: { activity: 'Boxeo', time: '8:00 AM - 9:00 AM' },
      JUE: { activity: 'Aeróbicos', time: '8:00 AM - 9:00 AM' },
      VIE: null,
      SÁB: null,
    },
    '11:00 AM': {
      LUN: null,
      MAR: { activity: 'Boxeo', time: '11:00 AM - 2:00 PM' },
      MIÉ: { activity: 'Aeróbicos', time: '11:30 AM - 3:30 PM' },
      JUE: null,
      VIE: { activity: 'Trabajo Corporal', time: '11:50 AM - 5:20 PM' },
      SÁB: null,
    },
    '2:00 PM': {
      LUN: { activity: 'Boxeo', time: '2:00 PM - 4:00 PM' },
      MAR: { activity: 'Levantamiento de Pesas', time: '3:00 PM - 6:00 PM' },
      MIÉ: null,
      JUE: { activity: 'Cardio', time: '6:00 PM - 9:00 PM' },
      VIE: null,
      SÁB: { activity: 'Crossfit', time: '5:00 PM - 7:00 PM' },
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.subtitle}>nuestro horario semanal de gimnasio</Text>
        <Text style={styles.title}>Horario de Entrenamiento</Text>
      </View>

      <ScrollView horizontal contentContainerStyle={styles.tableContainer}>
        <View style={styles.table}>
          <View style={styles.headerRow}>
            <View style={styles.headerCellTime}>
              <MaterialCommunityIcons name="calendar" style={styles.calendarIcon} />
            </View>
            {dias.map((dia) => (
              <View key={dia} style={styles.headerCell}>
                <Text style={styles.headerText}>{dia}</Text>
              </View>
            ))}
          </View>

          {Object.keys(schedule).map((timeSlot) => (
            <View key={timeSlot} style={styles.row}>
              <View style={styles.timeCell}>
                <Text style={styles.timeText}>{timeSlot}</Text>
              </View>
              {dias.map((dia) => {
                const activity = schedule[timeSlot][dia];
                return (
                  <View key={dia} style={styles.cell}>
                    {activity && (
                      <>
                        <Text style={styles.activityText}>{activity.activity}</Text>
                        <Text style={styles.timeRangeText}>{activity.time}</Text>
                      </>
                    )}
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WorkoutTimetable;
