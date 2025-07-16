import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const IS_LARGE_SCREEN = width > 768;

export const contactFormStyles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 50,
  },
  sectionContainer: {
    width: '100%',
    alignItems: 'center',
  },
  contentWrapper: {
    flexDirection: 'column',
    width: '90%',
    maxWidth: 1200,
    paddingHorizontal: 20,
  },
  contentWrapperLargeScreen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  formColumn: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 40,
  },
  formColumnLargeScreen: {
    marginRight: 40,
    marginBottom: 0,
    flexBasis: '45%',
    maxWidth: 500,
  },
  formTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'left',
    lineHeight: 40,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  messageInput: {
    height: 150,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#222',
    paddingVertical: 18,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  mapColumn: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  mapColumnLargeScreen: {
    marginLeft: 0,
    flexBasis: '55%',
  },
  mapTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'left',
    lineHeight: 40,
  },
  locationDetail: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 20,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  locationText: {
    fontSize: 18,
    color: '#555',
    lineHeight: 24,
    flexShrink: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 30,
    width: '100%',
  },
});
