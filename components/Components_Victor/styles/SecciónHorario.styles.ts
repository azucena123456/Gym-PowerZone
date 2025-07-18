import { StyleSheet } from 'react-native';

const createStyles = (screenWidth: number) => {
  const totalDias = 6;
  const marginVertical = 6;
  
  const usableWidth = screenWidth * 0.85;
  const horaWidth = usableWidth * 0.08;
  const diaWidth = ((usableWidth - horaWidth) / totalDias) - 4;
  const totalWidth = horaWidth + (diaWidth * totalDias) + (3 * totalDias);

  const horizontalPadding = (screenWidth - totalWidth) / 2;

  return {
    horaWidth,
    diaWidth,
    totalWidth,
    ...StyleSheet.create({
      container: {
        flex: 1,
      },
      tableContainer: {
        marginHorizontal: horizontalPadding,
        marginVertical: marginVertical,
      },
      table: {
        width: totalWidth,
      },
      headerRow: {
        flexDirection: 'row',
        width: totalWidth,
      },
      headerCellTime: {
        backgroundColor: '#ff3c00',
        width: horaWidth,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#333',
        borderWidth: 1,
        height: 38,
        borderTopLeftRadius: 6,
      },
      headerCell: {
        backgroundColor: '#ff3c00',
        width: diaWidth,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#333',
        borderWidth: 1,
        height: 38,
      },
      headerText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 11,
      },
      row: {
        flexDirection: 'row',
        width: totalWidth,
      },
      timeCell: {
        width: horaWidth,
        height: 55,
        backgroundColor: '#ff3c00',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#333',
        borderWidth: 1,
        padding: 2,
      },
      timeText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center',
      },
      cell: {
        width: diaWidth,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#222',
        borderWidth: 1,
        padding: 2,
      },
      activityText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center',
        marginBottom: 1,
        lineHeight: 12,
      },
      timeRangeText: {
        color: '#bbbbbb',
        fontSize: 8,
        textAlign: 'center',
        lineHeight: 10,
        marginTop: 6, 
      },
    }),
  };
};

export default createStyles;