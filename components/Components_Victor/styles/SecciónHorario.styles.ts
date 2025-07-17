import { Dimensions, StyleSheet } from 'react-native';

const createStyles = (screenWidth: number) => {
  const { width } = Dimensions.get('window');
  const isPhone = width < 600;
  const isSmallPhone = width < 375;
  const isTablet = width >= 600 && width < 1024;
  const isDesktop = width >= 1024;

  const totalDias = 6;
  const marginVertical = isPhone ? 2 : 4;

  const usableWidth = isDesktop
    ? screenWidth * 0.7
    : isTablet
    ? screenWidth * 0.85
    : screenWidth * 0.95;

  const horaWidth = isDesktop
    ? usableWidth * 0.08
    : isTablet
    ? usableWidth * 0.1
    : usableWidth * 0.15;

  const diaWidth = ((usableWidth - horaWidth) / totalDias) - (isPhone ? 2 : 4);
  const totalWidth = horaWidth + (diaWidth * totalDias) + (isPhone ? 2 : 3) * totalDias;
  const horizontalPadding = (screenWidth - totalWidth) / 2;

  const baseCellHeight = isDesktop ? 65 : isTablet ? 70 : isSmallPhone ? 60 : 65;
  const headerHeight = isDesktop ? 40 : isTablet ? 45 : isSmallPhone ? 35 : 40;

  return {
    horaWidth,
    diaWidth,
    totalWidth,
    ...StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingVertical: isDesktop ? 80 : isTablet ? 50 : 30,
        width: '100%',
      },
      tableContainer: {
        marginHorizontal: Math.max(horizontalPadding, 0),
        marginVertical: marginVertical,
        backgroundColor: '#121212',
        minHeight: (baseCellHeight * 4) + headerHeight + (marginVertical * 2),
        width: '100%',
        maxWidth: isDesktop ? undefined : 700,
      },
      table: {
        width: totalWidth,
        alignSelf: 'center',
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
        fontSize: isDesktop ? 14 : isTablet ? 15 : isSmallPhone ? 11 : 12,
        textAlign: 'center',
        paddingHorizontal: 2,
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
        padding: isPhone ? 0 : 1,
      },
      timeText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: isDesktop ? 13 : isTablet ? 14 : isSmallPhone ? 10 : 11,
        textAlign: 'center',
      },
      cell: {
        width: diaWidth,
        minHeight: baseCellHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        borderColor: '#181818',
        borderWidth: 1,
        padding: isPhone ? 1 : 2,
        flexWrap: 'wrap',
      },
      activityText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: isDesktop ? 13 : isTablet ? 14 : isSmallPhone ? 10 : 11,
        textAlign: 'center',
        marginBottom: isPhone ? 1 : 2,
        lineHeight: isDesktop ? 16 : isTablet ? 18 : isSmallPhone ? 12 : 14,
        flexWrap: 'wrap',
        flexShrink: 1,
        maxWidth: '100%',
      },
      timeRangeText: {
        color: '#aaaaaa',
        fontSize: isDesktop ? 11 : isTablet ? 12 : isSmallPhone ? 8 : 9,
        textAlign: 'center',
        lineHeight: isDesktop ? 12 : isTablet ? 14 : isSmallPhone ? 9 : 10,
        marginTop: isPhone ? 1 : 3,
      },
      titleContainer: {
        alignItems: 'center',
        marginBottom: isDesktop ? 20 : isTablet ? 15 : 10,
        backgroundColor: '#121212',
        width: '100%',
      },
      subtitle: {
        color: '#b4b3b3ff',
        fontSize: isDesktop ? 15 : isTablet ? 16 : isSmallPhone ? 12 : 13,
        marginBottom: isDesktop ? 10 : isTablet ? 8 : 5,
        textTransform: 'uppercase',
        textAlign: 'center',
      },
      title: {
        color: '#ffffff',
        fontSize: isDesktop ? 30 : isTablet ? 28 : isSmallPhone ? 22 : 24,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      calendarIcon: {
        color: '#ffffff',
        fontSize: isDesktop ? 28 : isTablet ? 26 : isSmallPhone ? 20 : 22,
      },
    }),
  };
};

export default createStyles;
