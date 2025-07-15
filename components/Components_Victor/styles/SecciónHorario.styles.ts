import { StyleSheet } from 'react-native';

const createStyles = (screenWidth: number) => {
  const totalDias = 6;
  const marginVertical = 6;
  
  const usableWidth = screenWidth * 0.75;
  const horaWidth = usableWidth * 0.08;
  const diaWidth = ((usableWidth - horaWidth) / totalDias) - 4;
  const totalWidth = horaWidth + (diaWidth * totalDias) + (3 * totalDias);

  const horizontalPadding = (screenWidth - totalWidth) / 2;

  const baseCellHeight = 85; 
  const headerHeight = 50; 

  return {
    horaWidth,
    diaWidth,
    totalWidth,
    ...StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingVertical: 100,
      },
      tableContainer: {
        marginHorizontal: horizontalPadding,
        marginVertical: marginVertical,
        backgroundColor: '#121212',
        minHeight: (baseCellHeight * Object.keys({
          '7:00 AM': {}, '9:00 AM': {}, '11:00 AM': {}, '2:00 PM': {},
        }).length) + headerHeight + (marginVertical * 2),
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
        borderColor: '#181818',
        borderWidth: 1,
        height: headerHeight,
      },
      headerCell: {
        backgroundColor: '#ff3c00',
        width: diaWidth,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#181818',
        borderWidth: 1,
        height: headerHeight,
      },
      headerText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
      },
      row: {
        flexDirection: 'row',
        width: totalWidth,
      },
      timeCell: {
        width: horaWidth,
        height: baseCellHeight,
        backgroundColor: '#ff3c00',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#181818',
        borderWidth: 1,
        padding: 2,
      },
      timeText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'center',
      },
      cell: {
        width: diaWidth,
        height: baseCellHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        borderColor: '#181818',
        borderWidth: 1,
        padding: 4,
      },
      activityText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'center',
        marginBottom: 4,
        lineHeight: 18,
      },
      timeRangeText: {
        color: '#aaaaaa',
        fontSize: 11,
        textAlign: 'center',
        lineHeight: 14,
        marginTop: 6,
      },
      titleContainer: {
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#121212',
      },
      subtitle: {
        color: '#cccccc',
        fontSize: 15,
        marginBottom: 10,
        textTransform: 'uppercase',
      },
      title: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
      },
      calendarIcon: {
        color: '#ffffff',
        fontSize: 28,
      },
    }),
  };
};

export default createStyles;