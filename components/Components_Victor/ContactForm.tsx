import { send } from '@emailjs/browser';
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
} from 'react-native';
import { send } from '@emailjs/browser'; // Cambio recomendado por ESLint
import MapComponent from './MapComponent';

const CALENDLY_TOKEN = 'TU_TOKEN_AQUI'; // usar variable de entorno real
const CALENDLY_URL = 'https://calendly.com/2022034-utsh/gym-powerzone-consultas';

const ContactForm = () => {
  const { width } = useWindowDimensions();

  // Definir rangos para dispositivo
  const IS_DESKTOP = width >= 1024;
  const IS_TABLET = width >= 600 && width < 1024;
  const IS_MOBILE = width < 600;

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [isSending, setIsSending] = useState(false);

<<<<<<< HEAD
  const [nombreError, setNombreError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const SERVICE_ID = 'service_f4nam56';
  const TEMPLATE_ID = 'template_58bdplq';
  const PUBLIC_KEY = '61Z51srJVskv93TN3';

  const CALENDLY_BASE_URL = "https://calendly.com/2022034-utsh/gym-powerzone-consultas";
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

    const templateParams = {
      name: nombre,
      email: email,
      message: mensaje,
    };

    try {
      await send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY); // Usando la importación directa

      const url = `${CALENDLY_URL}?name=${encodeURIComponent(formData.nombre)}&email=${encodeURIComponent(formData.email)}&a1=${encodeURIComponent(formData.mensaje)}`;
      
      if (await Linking.canOpenURL(url)) {
        await Linking.openURL(url);
      }

      Alert.alert('¡Mensaje enviado!', 'Tu mensaje ha sido enviado con éxito y hemos abierto el calendario para agendar tu cita.');
      setNombre('');
      setEmail('');
      setMensaje('');

    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      Alert.alert('Error', 'No se pudo enviar el mensaje. Intenta más tarde.');
    } finally {
      setIsSending(false);
    }
  };

<<<<<<< HEAD
  const gymCoordinates = { latitude: 20.2806, longitude: -98.0569 };
  const gymAddress = "C. de Olivo, Centro, 43200 Zacualtipán, Hgo.";
  const gymName = "Gym \"PowerZone\"";
  const isLargeScreen = Dimensions.get('window').width > 768;

  return (
    <ScrollView contentContainerStyle={contactFormStyles.scrollViewContent}>
      <View style={contactFormStyles.sectionContainer}>
        <View style={[
          contactFormStyles.contentWrapper,
          isLargeScreen && contactFormStyles.contentWrapperLargeScreen
        ]}>
          <View style={[
            contactFormStyles.formColumn,
            isLargeScreen && contactFormStyles.formColumnLargeScreen
          ]}>
            <Text style={contactFormStyles.formTitle}>Siéntete libre de preguntar cualquier cosa</Text>

            <TextInput
              style={[
                contactFormStyles.input,
                nombreError && contactFormStyles.inputError
              ]}
=======
  const gymInfo = {
    latitude: 20.2806,
    longitude: -98.0569,
    address: 'C. de Olivo, Centro, 43200 Zacualtipán, Hgo.',
    name: 'Gym "PowerZone"',
  };

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
              styles.formColumn,
              {
                padding: IS_DESKTOP ? 30 : IS_TABLET ? 25 : 20,
                marginBottom: IS_DESKTOP ? 0 : 40,
                marginRight: IS_DESKTOP ? 40 : 0,
                maxWidth: IS_DESKTOP ? 500 : '100%',
                width: IS_TABLET ? '100%' : undefined,
              },
            ]}
          >
            <Text
              style={[
                styles.formTitle,
                {
                  fontSize: IS_DESKTOP ? 32 : IS_TABLET ? 28 : 22,
                  lineHeight: IS_DESKTOP ? 40 : 30,
                  textAlign: IS_DESKTOP ? 'left' : 'center',
                },
              ]}
            >
              Siéntete libre de preguntar cualquier cosa
            </Text>
            <TextInput
              style={styles.input}
>>>>>>> patricia
              placeholder="Nombre"
              value={nombre}
              onChangeText={text => {
                setNombre(text);
                if (text.trim()) setNombreError('');
              }}
            />
            {nombreError ? <Text style={contactFormStyles.errorText}>{nombreError}</Text> : null}

            <TextInput
<<<<<<< HEAD
              style={[
                contactFormStyles.input,
                emailError && contactFormStyles.inputError
              ]}
=======
              style={styles.input}
>>>>>>> patricia
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={text => {
                setEmail(text);
                if (emailRegex.test(text)) setEmailError('');
              }}
            />
            {emailError ? <Text style={contactFormStyles.errorText}>{emailError}</Text> : null}

            <TextInput
<<<<<<< HEAD
              style={[
                contactFormStyles.input,
                contactFormStyles.messageInput,
                mensajeError && contactFormStyles.inputError
              ]}
              placeholder="Mensaje"
              multiline={true}
              numberOfLines={4}
=======
              style={[styles.input, styles.messageInput]}
              placeholder="Mensaje"
              placeholderTextColor="#555"
              multiline
>>>>>>> patricia
              value={mensaje}
              onChangeText={text => {
                setMensaje(text);
                if (text.trim()) setMensajeError('');
              }}
            />
<<<<<<< HEAD
            {mensajeError ? <Text style={contactFormStyles.errorText}>{mensajeError}</Text> : null}

            <TouchableOpacity
              style={contactFormStyles.sendButton}
=======
            <TouchableOpacity
              style={styles.sendButton}
>>>>>>> patricia
              onPress={handleSendMessage}
              disabled={isSending}
            >
              <Text style={styles.sendButtonText}>
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