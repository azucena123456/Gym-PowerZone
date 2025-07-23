import React, { useState } from 'react';
import {
  Alert,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import { send } from '@emailjs/browser';
import MapComponent from './MapComponent';

const ContactForm = () => {
  const { width, height } = useWindowDimensions();
  
  // Definimos puntos de ruptura responsivos
  const breakpoints = {
    small: 480,
    medium: 768,
    large: 1024,
    xlarge: 1200
  };

  // Funciones para determinar el tamaño de pantalla
  const isSmallScreen = width <= breakpoints.small;
  const isMediumScreen = width > breakpoints.small && width <= breakpoints.medium;
  const isLargeScreen = width > breakpoints.medium && width <= breakpoints.large;
  const isXLargeScreen = width > breakpoints.large;

  // Configuraciones responsivas
  const responsiveConfig = {
    padding: {
      small: 16,
      medium: 20,
      large: 24,
      xlarge: 28
    },
    fontSize: {
      small: 14,
      medium: 16,
      large: 18,
      xlarge: 20
    },
    inputHeight: {
      small: 40,
      medium: 45,
      large: 50,
      xlarge: 55
    },
    messageInputHeight: {
      small: 120,
      medium: 150,
      large: 180,
      xlarge: 200
    }
  };

  // Obtener valores responsivos basados en el tamaño de pantalla
  const getResponsiveValue = (values: any) => {
    if (isSmallScreen) return values.small;
    if (isMediumScreen) return values.medium;
    if (isLargeScreen) return values.large;
    return values.xlarge;
  };

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [isSending, setIsSending] = useState(false);

  const SERVICE_ID = 'service_f4nam56';
  const TEMPLATE_ID = 'template_58bdplq';
  const PUBLIC_KEY = '61Z51srJVskv93TN3';
  const CALENDLY_URL = 'https://calendly.com/2022034-utsh/gym-powerzone-consultas';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const gymInfo = {
    latitude: 20.2806,
    longitude: -98.0569,
    address: "C. de Olivo, Centro, 43200 Zacualtipán, Hgo.",
    name: "Gym \"PowerZone\""
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { nombre: '', email: '', mensaje: '' };

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'El correo no es válido.';
      isValid = false;
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje no puede estar vacío.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpiar error cuando el usuario empieza a escribir
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSendMessage = async () => {
    if (!validateForm()) return;

    setIsSending(true);

    try {
      await send(SERVICE_ID, TEMPLATE_ID, {
        name: formData.nombre,
        email: formData.email,
        message: formData.mensaje
      }, PUBLIC_KEY);

      const url = `${CALENDLY_URL}?name=${encodeURIComponent(formData.nombre)}&email=${encodeURIComponent(formData.email)}&a1=${encodeURIComponent(formData.mensaje)}`;
      
      if (await Linking.canOpenURL(url)) {
        await Linking.openURL(url);
      }

      Alert.alert('¡Mensaje enviado!', 'Tu mensaje ha sido enviado con éxito y hemos abierto el calendario para agendar tu cita.');
      setFormData({ nombre: '', email: '', mensaje: '' });

    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      Alert.alert('Error', 'No se pudo enviar el mensaje. Intenta más tarde.');
    } finally {
      setIsSending(false);
    }
  };

  // Estilos dinámicos basados en el tamaño de pantalla
  const dynamicStyles = StyleSheet.create({
    container: {
      flexDirection: isMediumScreen || isLargeScreen || isXLargeScreen ? 'row' : 'column',
      padding: getResponsiveValue(responsiveConfig.padding),
      width: '100%',
      maxWidth: 1200,
      alignSelf: 'center'
    },
    formContainer: {
      flex: 1,
      padding: getResponsiveValue(responsiveConfig.padding),
      marginRight: isMediumScreen || isLargeScreen || isXLargeScreen ? getResponsiveValue(responsiveConfig.padding) : 0,
      marginBottom: isSmallScreen ? getResponsiveValue(responsiveConfig.padding) : 0
    },
    mapContainer: {
      flex: 1,
      padding: getResponsiveValue(responsiveConfig.padding)
    },
    title: {
      fontSize: getResponsiveValue({
        small: 20,
        medium: 24,
        large: 28,
        xlarge: 32
      }),
      fontWeight: 'bold',
      marginBottom: getResponsiveValue(responsiveConfig.padding),
      color: '#333'
    },
    input: {
      height: getResponsiveValue(responsiveConfig.inputHeight),
      borderWidth: 1,
      borderColor: errors.nombre || errors.email || errors.mensaje ? 'red' : '#ccc',
      borderRadius: 8,
      paddingHorizontal: 15,
      marginBottom: 15,
      fontSize: getResponsiveValue(responsiveConfig.fontSize),
      backgroundColor: '#fff'
    },
    messageInput: {
      height: getResponsiveValue(responsiveConfig.messageInputHeight),
      textAlignVertical: 'top'
    },
    button: {
      backgroundColor: '#222',
      paddingVertical: getResponsiveValue(responsiveConfig.padding),
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: getResponsiveValue(responsiveConfig.fontSize),
      textTransform: 'uppercase'
    },
    errorText: {
      color: 'red',
      fontSize: getResponsiveValue(responsiveConfig.fontSize) - 2,
      marginBottom: 10,
      marginLeft: 5
    }
  });

  return (
    <ScrollView 
      contentContainerStyle={{ 
        flexGrow: 1, 
        backgroundColor: '#fff',
        paddingVertical: getResponsiveValue(responsiveConfig.padding)
      }}
    >
      <View style={dynamicStyles.container}>
        {/* Columna del formulario */}
        <View style={dynamicStyles.formContainer}>
          <Text style={dynamicStyles.title}>Siéntete libre de preguntar cualquier cosa</Text>
          
          <TextInput
            style={[
              dynamicStyles.input,
              errors.nombre && { borderColor: 'red' }
            ]}
            placeholder="Nombre"
            value={formData.nombre}
            onChangeText={(text) => handleInputChange('nombre', text)}
          />
          {errors.nombre ? <Text style={dynamicStyles.errorText}>{errors.nombre}</Text> : null}

          <TextInput
            style={[
              dynamicStyles.input,
              errors.email && { borderColor: 'red' }
            ]}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          {errors.email ? <Text style={dynamicStyles.errorText}>{errors.email}</Text> : null}

          <TextInput
            style={[
              dynamicStyles.input,
              dynamicStyles.messageInput,
              errors.mensaje && { borderColor: 'red' }
            ]}
            placeholder="Mensaje"
            multiline
            value={formData.mensaje}
            onChangeText={(text) => handleInputChange('mensaje', text)}
          />
          {errors.mensaje ? <Text style={dynamicStyles.errorText}>{errors.mensaje}</Text> : null}

          <TouchableOpacity
            style={dynamicStyles.button}
            onPress={handleSendMessage}
            disabled={isSending}
          >
            <Text style={dynamicStyles.buttonText}>
              {isSending ? 'Enviando...' : 'Enviar Mensaje'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Columna del mapa */}
        <View style={dynamicStyles.mapContainer}>
          <Text style={dynamicStyles.title}>Dónde puedes encontrarnos</Text>
          
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            marginBottom: getResponsiveValue(responsiveConfig.padding) 
          }}>
            <Image
              source={require('./styles/image.png')}
              style={{ 
                width: getResponsiveValue({
                  small: 16,
                  medium: 18,
                  large: 20,
                  xlarge: 22
                }), 
                height: getResponsiveValue({
                  small: 16,
                  medium: 18,
                  large: 20,
                  xlarge: 22
                }),
                marginRight: 8 
              }}
            />
            <Text style={{ 
              fontSize: getResponsiveValue(responsiveConfig.fontSize),
              color: '#555',
              flexShrink: 1
            }}>
              {gymInfo.address} ({gymInfo.name})
            </Text>
          </View>
          
          <View style={{ 
            height: 1, 
            backgroundColor: '#ccc', 
            marginVertical: getResponsiveValue(responsiveConfig.padding),
            width: '100%' 
          }} />
          
          <MapComponent
            latitude={gymInfo.latitude}
            longitude={gymInfo.longitude}
            name={gymInfo.name}
            address={gymInfo.address}
            height={getResponsiveValue({
              small: 200,
              medium: 250,
              large: 300,
              xlarge: 350
            })}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactForm;