import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const IS_DESKTOP = width >= 1024;
const IS_TABLET = width >= 768 && width < 1024;
const IS_MOBILE = width < 768;

export const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: IS_DESKTOP ? 32 : 16,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    alignItems: 'center',
    justifyContent: IS_DESKTOP ? 'space-between' : 'center',
    borderTopWidth: 1,
    borderColor: '#e2e8f0',
    gap: 16,
  },
  copyrightText: {
    color: '#334155',
    fontSize: IS_DESKTOP ? 14 : 13,
    textAlign: IS_DESKTOP ? 'left' : 'center',
    flexBasis: IS_DESKTOP ? 'auto' : '100%', 
    flexShrink: 0,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',  
    gap: 16,
    justifyContent: IS_DESKTOP ? 'flex-end' : 'center',
    flexBasis: IS_DESKTOP ? 'auto' : '100%',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexBasis: IS_DESKTOP ? 'auto' : '30%', 
  },
  contactText: {
    color: '#334155',
    fontSize: IS_DESKTOP ? 14 : 13,
  },
  icon: {
    color: '#f97316',
    fontSize: IS_DESKTOP ? 16 : 14,
  },
});
