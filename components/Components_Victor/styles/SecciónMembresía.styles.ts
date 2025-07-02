import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  membershipSection: ViewStyle;
  rowContainer: ViewStyle;
  columnLeft: ViewStyle;
  columnRight: ViewStyle;
  membershipTitle: TextStyle;
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
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
  membershipTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  offerText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  membershipPrice: {
    color: '#ff5722',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  membershipDescription: {
    color: '#AAAAAA',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
  },
  membershipCta: {
    backgroundColor: '#ff5722',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
  },
  ctaText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  scheduleTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scheduleItem: {
    color: '#AAAAAA',
    fontSize: 14,
    marginBottom: 6,
  },
});

export default styles;
