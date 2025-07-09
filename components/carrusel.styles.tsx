import { StyleSheet,Platform } from 'react-native';

export const styles = StyleSheet.create({
  fullWidthContainer: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal:30,
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
  headerTitle1:{
    fontSize: Platform.select({ ios: 20, android: 20, default: 28 }),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    marginTop:-15,
    color: '#121212',
  },

  carouselContent: {
    paddingLeft: Platform.select({ ios: 15, android: 15, default: 300 }),
    paddingRight: Platform.select({ ios: 5, android: 5, default: 10 }),
  },
  slide: {
    marginRight: Platform.select({ ios: 15, android: 15, default: 25 }),
    backgroundColor: '#F9F9F9',
    borderRadius: 0,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 12,

  },
  image: {
    width: '100%',
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
  ctaButton: {
    backgroundColor: '#F13a11',
    paddingVertical: Platform.select({ ios: 8, android: 8, default: 10 }),
    paddingHorizontal: Platform.select({ ios: 12, android: 12, default: 15 }),
    borderRadius: 20,
    alignSelf: 'center',
  },
  mobileCtaButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
 

  
ctaCircle: {
  backgroundColor: '#F13a11', 
  width: 50,                  
  height: 50,                 
  borderRadius: 30,           
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',   
  marginTop: -100     
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
