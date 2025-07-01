import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: '#121212',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    elevation: 85, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logoContainer: {
    flex: 1,
    paddingLeft: 100,
    fontFamily: ''
  },
  logoText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: ' sans-serif',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItem: {
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  menuText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
      marginLeft: 30, 
      paddingRight: 10,
      fontFamily: ' sans-serif'

  },

  socialIcons: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 20,
  marginLeft: 30,
  paddingRight: 100,
  alignSelf: 'flex-start',
  fontFamily: 'Montserrat Bold'
},

  menuTextPressed: {
    color: '#FF6B6B', 
    
    textDecorationLine: 'underline',

  },
  
menuTextHovered: {
  color: '#F13a11', 
  
},

});

