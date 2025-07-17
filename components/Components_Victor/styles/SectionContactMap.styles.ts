import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const formStyles = StyleSheet.create({
  container: {
    padding: width * 0.05, // 5% del ancho de la pantalla
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginHorizontal: width * 0.05, // 5% de margen lateral
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%', // hace que se mantenga proporcional
    alignSelf: 'center', // centra el contenedor
  },
  title: {
    fontSize: width < 380 ? 20 : 24, // más pequeño en pantallas pequeñas
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: width * 0.03,
    marginBottom: 15,
    fontSize: width < 380 ? 14 : 16,
    color: '#333',
    width: '100%',
  },
  messageInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: width < 380 ? 16 : 18,
    fontWeight: 'bold',
  },
});
