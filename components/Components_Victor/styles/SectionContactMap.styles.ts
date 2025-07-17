import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

const ResponsiveForm = () => {
  const { width } = useWindowDimensions();

  // Define los breakpoints
  const isDesktop = width >= 1024;
  const isTablet = width >= 768 && width < 1024;
  const isMobile = width < 768;

  // Función para escalar tamaño de fuente y paddings
  const scaleSize = (desktopSize, tabletSize, mobileSize) => {
    if (isDesktop) return desktopSize;
    if (isTablet) return tabletSize;
    return mobileSize;
  };

  // Genera los estilos según el ancho actual
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      padding: scaleSize(40, 30, 20),
      marginHorizontal: scaleSize(100, 50, 20),
    },
    title: {
      fontSize: scaleSize(32, 28, 24),
      fontWeight: 'bold',
      color: '#333',
      marginBottom: scaleSize(35, 25, 20),
      textAlign: 'center',
    },
    input: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      padding: scaleSize(18, 14, 12),
      marginBottom: 15,
      fontSize: scaleSize(18, 16, 14),
      color: '#333',
    },
    messageInput: {
      height: 120,
      textAlignVertical: 'top',
    },
    sendButton: {
      backgroundColor: '#007bff',
      padding: scaleSize(20, 18, 15),
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    sendButtonText: {
      color: '#fff',
      fontSize: scaleSize(20, 18, 16),
      fontWeight: 'bold',
    },
  });
export default ResponsiveForm;
