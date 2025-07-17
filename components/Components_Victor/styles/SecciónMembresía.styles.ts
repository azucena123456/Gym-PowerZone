import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const isSmallDevice = width < 600;

const styles = StyleSheet.create({
  membershipSection: {
    backgroundColor: 'transparent',
    paddingVertical: isSmallDevice ? 30 : 50,
    paddingHorizontal: isSmallDevice ? 20 : 30,
    borderRadius: 10,
    marginHorizontal: isSmallDevice ? 10 : 20,
    marginVertical: 40,
    alignSelf: 'center',
    maxWidth: 1000,
    width: '100%',
  },
  rowContainer: {
    flexDirection: isSmallDevice ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: isSmallDevice ? 'stretch' : 'flex-start',
  },
  columnLeft: {
    flex: 1,
    paddingLeft: isSmallDevice ? 0 : 120,
    paddingRight: isSmallDevice ? 0 : 90,
    marginLeft: isSmallDevice ? 0 : -90,
    marginBottom: isSmallDevice ? 30 : 0,
    width: '100%',
  },
  columnRight: {
    flex: 1,
    paddingLeft: isSmallDevice ? 0 : 70,
    alignItems: 'flex-start',
    marginTop: 0,
    width: '100%',
  },
  divider: {
    width: isSmallDevice ? '100%' : 1,
    height: isSmallDevice ? 1 : '50%',
    backgroundColor: '#2a2a2a',
    alignSelf: 'center',
    marginVertical: isSmallDevice ? 30 : 0,
    marginHorizontal: isSmallDevice ? 0 : 10,
  },
  membershipTitle: {
    color: '#FFFFFF',
    fontSize: isSmallDevice ? 24 : 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: isSmallDevice ? 'center' : 'left',
    lineHeight: isSmallDevice ? 30 : 38,
  },
  offerText: {
    color: '#d4d9d0',
    fontSize: isSmallDevice ? 16 : 20,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: isSmallDevice ? 'center' : 'left',
  },
  membershipPrice: {
    color: '#FFFFFF',
    fontSize: isSmallDevice ? 16 : 20,
    marginBottom: 12,
    textAlign: isSmallDevice ? 'center' : 'left',
  },
  membershipDescription: {
    color: '#4a4e4f',
    fontSize: isSmallDevice ? 14 : 18,
    lineHeight: isSmallDevice ? 20 : 25,
    marginBottom: 20,
    textAlign: isSmallDevice ? 'center' : 'left',
  },
  membershipCta: {
    backgroundColor: '#f23a11',
    paddingVertical: 16,
    borderRadius: 3,
    alignItems: 'center',
    paddingHorizontal: 30,
    width: '100%',
    marginTop: 15,
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: isSmallDevice ? 16 : 18,
    fontWeight: 'bold',
  },
  scheduleTitle: {
    color: '#FFFFFF',
    fontSize: isSmallDevice ? 24 : 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: isSmallDevice ? 'center' : 'left',
  },
  scheduleItem: {
    color: '#4a4e4f',
    fontSize: isSmallDevice ? 14 : 18,
    marginBottom: 8,
    textAlign: isSmallDevice ? 'center' : 'left',
  },
  scheduleGroup: {
    marginBottom: 20,
    alignItems: isSmallDevice ? 'center' : 'flex-start',
  },
  scheduleDay: {
    color: '#FFFFFF',
    fontSize: isSmallDevice ? 16 : 20,
    fontWeight: 'bold',
    textAlign: isSmallDevice ? 'center' : 'left',
  },
  scheduleTime: {
    color: '#4a4e4f',
    fontSize: isSmallDevice ? 14 : 18,
    marginTop: 6,
    textAlign: isSmallDevice ? 'center' : 'left',
  },
});

export default styles;
