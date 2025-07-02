import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  membershipSection: ViewStyle;
  membershipTitle: TextStyle;
  offerContainer: ViewStyle;
  offerText: TextStyle;
  membershipPrice: TextStyle;
  membershipDescription: TextStyle;
  membershipCta: ViewStyle;
  ctaText: TextStyle;
  scheduleTitle: TextStyle;
  scheduleItem: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  membershipSection: {
    backgroundColor: '#121212',
    padding: 25,
    borderRadius: 10,
    margin: 15,
  },
  membershipTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  offerContainer: {
    marginBottom: 10,
  },
  offerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24,
  },
  membershipPrice: {
    color: '#ff5722',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  membershipDescription: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  membershipCta: {
    backgroundColor: '#ff5722',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 40,
  },
  ctaText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  scheduleTitle: {
    color: '#ff5722',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  scheduleItem: {
    color: '#818181',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 3,
  },
});

export default styles;