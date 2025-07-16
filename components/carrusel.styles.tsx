import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CARD_WIDTH = width * 0.25;
const CARD_HEIGHT = 450;

export const styles = StyleSheet.create({
  fullWidthContainer: {
    width: '100%',
    backgroundColor: '#EEEEEE',
    paddingVertical: 80,
    paddingHorizontal: 50,
  },
  nombreEntrenador: {
    color: '#333333',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: Platform.select({ ios: 20, android: 20, default: 20 }),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#818181',
  },
  headerTitle1: {
    fontSize: Platform.select({ ios: 20, android: 20, default: 28 }),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: -15,
    color: '#121212',
  },
  carouselContent: {
    paddingHorizontal: Platform.select({
      ios: 40,
      android: 40,
      default: 100,
    }),
    alignItems: 'center',
  },
  slide: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginHorizontal: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 0,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.31,
    shadowRadius: 8,
    elevation: 6,
  },
  image: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  textContainer: {
    padding: Platform.select({ ios: 12, android: 12, default: 15 }),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#0000',
    borderTopWidth: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  mobileTextContainer: {
    padding: 10,
  },
  titleContainer: {
    width: '100%',
    marginBottom: 8,
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 1,
  },
  textContent: {
    flex: 1,
    marginRight: 10,
  },
  slideTitle: {
    fontSize: Platform.select({ ios: 16, android: 16, default: 25 }),
    fontWeight: 'bold',
    color: '#333',
  },
  mobileSlideTitle: {
    fontSize: 14,
  },
  entrenadoraText: {
    fontSize: Platform.select({ ios: 14, android: 14, default: 15 }),
    color: '#555',
    fontWeight: '500',
    marginBottom: 4,
  },
  mobileEntrenadoraText: {
    fontSize: 13,
  },
  slideDescription: {
    fontSize: Platform.select({ ios: 13, android: 13, default: 14 }),
    color: '#666',
    lineHeight: 18,
  },
  mobileSlideDescription: {
    fontSize: 12,
  },
  ctaCircle: {
    backgroundColor: '#F13a11',
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -100,
  },
  mobileCtaCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  ctaText: {
    color: 'white',
    fontWeight: '600',
    fontSize: Platform.select({ ios: 12, android: 12, default: 14 }),
  },
});