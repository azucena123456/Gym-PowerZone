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
<<<<<<< HEAD
  Linking,
=======
  useWindowDimensions,
>>>>>>> patricia
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

  const validateForm = () => {
    let valid = true;

    if (!nombre.trim()) {
      setNombreError('El nombre es obligatorio.');
      valid = false;
    } else {
      setNombreError('');
    }

    if (!email.trim()) {
      setEmailError('El correo es obligatorio.');
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('El correo no es válido.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!mensaje.trim()) {
      setMensajeError('El mensaje no puede estar vacío.');
      valid = false;
    } else {
      setMensajeError('');
    }

    return valid;
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

      const url = `${CALENDLY_BASE_URL}?name=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&a1=${encodeURIComponent(mensaje)}`;
      const canOpen = await Linking.canOpenURL(url);

      if (canOpen) {
        await Linking.openURL(url);
      }

      Alert.alert('¡Mensaje enviado!', 'Tu mensaje ha sido enviado con éxito y hemos abierto el calendario para agendar tu cita.');
      setNombre('');
      setEmail('');
      setMensaje('');

    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      Alert.alert('Error', 'No se pudo enviar el mensaje. Intenta más tarde.');
=======
  const handleSendMessage = async () => {
    if (!nombre || !email || !mensaje) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Introduce un correo electrónico válido.');
      return;
    }
    setIsSending(true);
    try {
      const userResponse = await fetch('https://api.calendly.com/users/me', {
        headers: {
          Authorization: `Bearer ${CALENDLY_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      if (!userResponse.ok) throw new Error('Token Calendly inválido o sin permisos.');

      const calendlyUrlWithParams = `${CALENDLY_URL}?name=${encodeURIComponent(
        nombre
      )}&email=${encodeURIComponent(email)}&a1=${encodeURIComponent(mensaje)}`;

      const canOpen = await Linking.canOpenURL(calendlyUrlWithParams);
      if (!canOpen) throw new Error('No se puede abrir el enlace de Calendly');

      await Linking.openURL(calendlyUrlWithParams);

      Alert.alert('¡Mensaje enviado!', 'Redirigiéndote al calendario de citas.');
      setNombre('');
      setEmail('');
      setMensaje('');
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'No se pudo abrir Calendly. Intenta más tarde.');
>>>>>>> patricia
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
      contentContainerStyle={[
        styles.scrollViewContent,
        {
          paddingVertical: IS_DESKTOP ? 60 : IS_TABLET ? 50 : 40,
          alignItems: 'center',
        },
      ]}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.sectionContainer}>
        <View
          style={[
            styles.contentWrapper,
            {
              flexDirection: IS_DESKTOP ? 'row' : 'column',
              width: IS_DESKTOP ? '90%' : IS_TABLET ? 700 : '95%',
              maxWidth: IS_DESKTOP ? 1200 : undefined,
              justifyContent: 'space-between',
            },
          ]}
        >
          <View
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

          <View
            style={[
              styles.mapColumn,
              {
                padding: IS_DESKTOP ? 30 : IS_TABLET ? 25 : 20,
                maxWidth: IS_DESKTOP ? '55%' : '100%',
                width: IS_TABLET ? '100%' : undefined,
                alignItems: IS_DESKTOP ? 'flex-start' : 'center',
              },
            ]}
          >
            <Text
              style={[
                styles.mapTitle,
                {
                  fontSize: IS_DESKTOP ? 32 : IS_TABLET ? 28 : 22,
                  lineHeight: IS_DESKTOP ? 40 : 30,
                  textAlign: IS_DESKTOP ? 'left' : 'center',
                },
              ]}
            >
              Dónde puedes encontrarnos
            </Text>
            <View style={styles.locationDetail}>
              <Image
                source={require('./styles/image.png')}
                style={styles.locationIcon}
              />
              <Text style={styles.locationText}>
                {gymInfo.address} ({gymInfo.name})
              </Text>
            </View>
            <View style={styles.divider} />
            <MapComponent
              latitude={gymInfo.latitude}
              longitude={gymInfo.longitude}
              name={gymInfo.name}
              address={gymInfo.address}
              height={280}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  sectionContainer: {
    width: '100%',
    alignItems: 'center',
  },
  contentWrapper: {
    justifyContent: 'space-between',
  },
  formColumn: {
    backgroundColor: '#fff',
  },
  formTitle: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    borderRadius: 6,
  },
  messageInput: {
    height: 180,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#222',
    paddingVertical: 18,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontSize: 18,
  },
  mapColumn: {
    backgroundColor: '#fff',
  },
  mapTitle: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
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
    flexShrink: 1,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 30,
    width: '100%',
  },
});

export default ContactForm;
