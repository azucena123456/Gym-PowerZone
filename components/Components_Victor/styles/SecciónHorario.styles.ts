import { Dimensions, StyleSheet } from 'react-native';

const createStyles = (screenWidth: number) => {
  const horaWidth = screenWidth * (0.6 / 6.6);
  const diaWidth = screenWidth * (1 / 6.6);

  return {
    horaWidth,
    diaWidth,
    ...StyleSheet.create({
      container: {
        backgroundColor: '#111111',
        flex: 1,
        padding: 10,
      },
      table: {
        width: screenWidth,
      },
      headerRow: {
        flexDirection: 'row',
      },
      headerCellTime: {
        backgroundColor: '#ff3c00',
        width: horaWidth,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#222',
        borderWidth: 1,
        height: 50,
      },
      headerCell: {
        backgroundColor: '#ff3c00',
        width: diaWidth,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#222',
        borderWidth: 1,
        height: 50,
      },
      headerText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
      },
      row: {
        flexDirection: 'row',
      },
      timeCell: {
        width: horaWidth,
        height: 80,
        backgroundColor: '#ff3c00',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#222',
        borderWidth: 1,
        padding: 5,
      },
      timeText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'center',
      },
      cell: {
        width: diaWidth,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        borderColor: '#222',
        borderWidth: 1,
        padding: 5,
      },
      activityText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 2,
      },
      timeRangeText: {
        color: '#bbbbbb',
        fontSize: 11,
        textAlign: 'center',
      },
    }),
  };
};

export default createStyles;
