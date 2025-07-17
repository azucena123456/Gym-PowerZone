import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import createStyles from './styles/SecciónHorario.styles';

const { width: screenWidth } = Dimensions.get('window');
const dynamicStyles = createStyles(screenWidth);

const WorkoutTimetable: React.FC = () => {
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
    <View style={dynamicStyles.container}>
      <View style={dynamicStyles.titleContainer}>
        <Text style={dynamicStyles.subtitle}>nuestro horario semanal de gimnasio</Text>
        <Text style={dynamicStyles.title}>Horario de Entrenamiento</Text>
      </View>

      <View style={dynamicStyles.tableContainer}>
        <View style={dynamicStyles.headerRow}>
          <View style={dynamicStyles.headerCellTime}>
            <MaterialCommunityIcons name="calendar" style={dynamicStyles.calendarIcon} />
          </View>
          {dias.map((dia) => (
            <View key={dia} style={dynamicStyles.headerCell}>
              <Text style={dynamicStyles.headerText}>{dia}</Text>
            </View>
          ))}
        </View>

        {Object.keys(schedule).map((timeSlot) => (
          <View key={timeSlot} style={dynamicStyles.row}>
            <View style={dynamicStyles.timeCell}>
              <Text style={dynamicStyles.timeText}>{timeSlot}</Text>
            </View>
            {dias.map((dia) => {
              const activity = schedule[timeSlot][dia];
              return (
                <View key={dia} style={dynamicStyles.cell}>
                  {activity && (
                    <>
                      <Text style={dynamicStyles.activityText}>{activity.activity}</Text>
                      <Text style={dynamicStyles.timeRangeText}>{activity.time}</Text>
                    </>
                  )}
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

export default WorkoutTimetable;
