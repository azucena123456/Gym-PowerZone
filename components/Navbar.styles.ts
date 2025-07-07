import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    position: 'relative',
    
    
  },
  navbar: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,//80
    paddingVertical: 15,
    backgroundColor: '#1a1a1a',
    zIndex: 1000,
    borderBottomWidth: 0,
    elevation: 85, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
  },
  logoContainer: {
    flex: 1,
    
  },
  logoText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: ' sans-serif',
    
    
  },
  menuButton: {
    padding: 8,
    zIndex: 1001,
  },
  desktopMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItem: {
    paddingHorizontal: 15,
     paddingVertical: 5,
     
  },
  menuText: {
       color: 'white',
    fontSize: 15,
    fontWeight: '500',
      marginLeft: 3, 
      paddingRight: 1,
      fontFamily: ' sans-serif'
    
  },
  menuTextPressed: {
    color: '#F13a11',
  },
  menuTextHover: {
    color: '#F13a11',
  },
  socialIcons: {
    flexDirection: 'row',
    marginLeft: 20,
    gap: 15,
  },
  mobileMenu: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#2a2a2a',
    overflow: 'hidden',
    zIndex: 999,
  },
  menuContent: {
    padding: 20,
  },
  mobileMenuItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  mobileMenuText: {
    color: 'white',
    fontSize: 16,
  },
  mobileMenuTextPressed: {
    color: '#F13a11',
  },
  mobileSocialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#333',
   
  },
  xIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  xText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});



