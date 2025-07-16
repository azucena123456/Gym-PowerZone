import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    backgroundColor: '#ffffff', 
    paddingVertical: 70,
    paddingHorizontal: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: -1, 
    },
    shadowOpacity: 0.1, 
    shadowRadius: 2, 
    elevation: 3, 
  },
  copyrightText: {
    fontSize: 16,
    color: '#999999',
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
  },
  icon: {
    marginRight: 5,
    color: '#ed563b',
  },
  contactText: {
    fontSize: 18,
    color: '#999999',
    textDecorationLine: 'none',
  },
});
