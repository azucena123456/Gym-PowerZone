import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  headerRow: ViewStyle;
  headerCell: ViewStyle;
  headerCellTime: ViewStyle;
  headerText: TextStyle;
  row: ViewStyle;
  timeCell: ViewStyle;
  timeText: TextStyle;
  cell: ViewStyle;
  activityText: TextStyle;
  timeRangeText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: '#111111',
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
  },
  headerCell: {
    backgroundColor: '#ff3c00',
    padding: 12,
    width: 100,
    alignItems: 'center',
    borderColor: '#111',
    borderWidth: 1,
  },
  headerCellTime: {
    backgroundColor: '#ff3c00',
    padding: 12,
    width: 80,
    alignItems: 'center',
    borderColor: '#111',
    borderWidth: 1,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  timeCell: {
    width: 80,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#222',
    borderWidth: 1,
    padding: 8,
  },
  timeText: {
    color: '#ff3c00',
    fontWeight: 'bold',
    fontSize: 12,
  },
  cell: {
    width: 100,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderColor: '#222',
    borderWidth: 1,
    padding: 5,
  },
  activityText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  timeRangeText: {
    color: '#aaa',
    fontSize: 11,
    textAlign: 'center',
  },
});

export default styles;
