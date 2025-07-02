import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  membershipSection: ViewStyle;
  rowContainer: ViewStyle;
  columnLeft: ViewStyle;
  columnRight: ViewStyle;
  divider: ViewStyle;
  membershipTitle: TextStyle;
  offerText: TextStyle;
  membershipPrice: TextStyle;
  membershipDescription: TextStyle;
  membershipCta: ViewStyle;
  ctaText: TextStyle;
  scheduleTitle: TextStyle;
  scheduleItem: TextStyle;
  scheduleGroup: ViewStyle;
  scheduleDay: TextStyle;
  scheduleTime: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  membershipSection: {
    backgroundColor: '#121212',
    padding: 25,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 40,
    alignSelf: 'center',
    maxWidth: 800,
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  columnLeft: {
    flex: 1,
    paddingRight: 10,
  },
  columnRight: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: '#2a2a2a', // línea gris más oscura
    marginHorizontal: 10,
  },
  membershipTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    left: 10,
  },
  offerText: {
    color: '#d4d9d0',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  membershipPrice: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
  membershipDescription: {
    color: '#4a4e4f',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
  },
  membershipCta: {
    backgroundColor: '#f23a11',
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 30,
    width: '100%',
    marginTop: 10,
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  scheduleTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  scheduleItem: {
    color: '#4a4e4f',
    fontSize: 14,
    marginBottom: 6,
    textAlign: 'center',
  },
  scheduleGroup: {
    marginBottom: 15,
    alignItems: 'center',
  },
  scheduleDay: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scheduleTime: {
    color: '#4a4e4f',
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
});

export default styles;
