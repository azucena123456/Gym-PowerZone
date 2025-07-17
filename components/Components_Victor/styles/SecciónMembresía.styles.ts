import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');
const isSmallDevice = width < 360;
const isTablet = width > 768;

const styles = StyleSheet.create({
  membershipSection: {
    backgroundColor: 'transparent',
    paddingVertical: 50,
    paddingHorizontal: isSmallDevice ? 15 : 30,
    borderRadius: 10,
    marginHorizontal: isSmallDevice ? 10 : 20,
    marginVertical: 40,
    alignSelf: 'center',
    maxWidth: 1000,
    width: '100%',
  },
  rowContainer: {
    flexDirection: isTablet ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: isTablet ? 'flex-start' : 'center',
  },
  columnLeft: {
    flex: 1,
    paddingLeft: isTablet ? 120 : 20,
    paddingRight: isTablet ? 90 : 20,
    marginLeft: isTablet ? -90 : 0,
    marginBottom: isTablet ? 0 : 20,
    width: '100%',
  },
  columnRight: {
    flex: 1,
    paddingLeft: isTablet ? 70 : 20,
    alignItems: 'flex-start',
    marginTop: 0,
    width: '100%',
  },
  divider: {
    width: isTablet ? 1 : '90%',
    backgroundColor: '#2a2a2a',
    marginHorizontal: 10,
    height: isTablet ? 180 : 1,
    alignSelf: 'center',
    marginTop: isTablet ? 80 : 30,
    marginBottom: isTablet ? 20 : 0,
  },
  membershipTitle: {
    color: '#FFFFFF',
    fontSize: isSmallDevice ? 24 : 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'left',
    lineHeight: isSmallDevice ? 30 : 38,
  },
  offerText: {
    color: '#d4d9d0',
    fontSize: isSmallDevice ? 16 : 20,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'left',
  },
  membershipPrice: {
    color: '#FFFFFF',
    fontSize: isSmallDevice ? 16 : 20,
    marginBottom: 12,
    textAlign: 'left',
  },
  membershipDescription: {
    color: '#4a4e4f',
    fontSize: isSmallDevice ? 15 : 18,
    lineHeight: isSmallDevice ? 22 : 25,
    marginBottom: 20,
    textAlign: 'left',
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  scheduleTitle: {
    color: '#FFFFFF',
    fontSize: isSmallDevice ? 26 : 32,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -5,
    textAlign: 'left',
  },
  scheduleItem: {
    color: '#4a4e4f',
    fontSize: isSmallDevice ? 16 : 18,
    marginBottom: 8,
    textAlign: 'left',
  },
  scheduleGroup: {
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  scheduleDay: {
    color: '#FFFFFF',
    fontSize: isSmallDevice ? 18 : 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  scheduleTime: {
    color: '#4a4e4f',
    fontSize: isSmallDevice ? 16 : 18,
    marginTop: 6,
    textAlign: 'left',
  },
});

export default styles;
