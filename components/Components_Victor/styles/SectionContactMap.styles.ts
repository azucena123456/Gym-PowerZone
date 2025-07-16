// SectionContactMap.styles.ts
import { CSSProperties } from 'react';

export const formStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8', // Color de fondo del formulario
    borderRadius: 8,
    marginHorizontal: 20, // Pequeño margen para que no toque los bordes de la pantalla
    shadowColor: '#000', // Sombra para darle un poco de profundidad
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
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
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  messageInput: {
    height: 120, // Altura para el área de mensaje
    textAlignVertical: 'top', // El texto comienza desde la parte superior
  },
  sendButton: {
    backgroundColor: '#007bff', // Un color azul para el botón
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
};
