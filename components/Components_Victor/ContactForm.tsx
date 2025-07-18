import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking
} from 'react-native';
import MapComponent from './MapComponent';
import { contactFormStyles } from './styles/ContactForm.styles';

const ContactForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [isSending, setIsSending] = useState(false);

  const [nombreError, setNombreError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mensajeError, setMensajeError] = useState('');

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

    try {
      // Armar la URL con parámetros pre-rellenados
      const url = `${CALENDLY_BASE_URL}?name=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&a1=${encodeURIComponent(mensaje)}`;

      const canOpen = await Linking.canOpenURL(url);
      if (!canOpen) {
        throw new Error('No se puede abrir el enlace de Calendly');
      }

      await Linking.openURL(url);

      Alert.alert(
        '¡Mensaje Enviado!',
        'Tu consulta ha sido recibida y hemos abierto el calendario para que agendes una cita.',
        [{
          text: 'OK',
          onPress: () => {
            setNombre('');
            setEmail('');
            setMensaje('');
          }
        }]
      );

    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      Alert.alert('Error', 'Tu mensaje fue recibido, pero hubo un problema al redirigirte a Calendly.');
    } finally {
      setIsSending(false);
    }
  };

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
              placeholder="Nombre"
              placeholderTextColor="#555"
              value={nombre}
              onChangeText={text => {
                setNombre(text);
                if (text.trim()) setNombreError('');
              }}
            />
            {nombreError ? <Text style={contactFormStyles.errorText}>{nombreError}</Text> : null}

            <TextInput
              style={[
                contactFormStyles.input,
                emailError && contactFormStyles.inputError
              ]}
              placeholder="Email"
              placeholderTextColor="#555"
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
              style={[
                contactFormStyles.input,
                contactFormStyles.messageInput,
                mensajeError && contactFormStyles.inputError
              ]}
              placeholder="Mensaje"
              placeholderTextColor="#555"
              multiline={true}
              numberOfLines={4}
              value={mensaje}
              onChangeText={text => {
                setMensaje(text);
                if (text.trim()) setMensajeError('');
              }}
            />
            {mensajeError ? <Text style={contactFormStyles.errorText}>{mensajeError}</Text> : null}

            <TouchableOpacity 
              style={contactFormStyles.sendButton} 
              onPress={handleSendMessage}
              disabled={isSending}
            >
              <Text style={contactFormStyles.sendButtonText}>
                {isSending ? 'Enviando...' : 'Enviar Mensaje'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[
            contactFormStyles.mapColumn,
            isLargeScreen && contactFormStyles.mapColumnLargeScreen
          ]}>
            <Text style={contactFormStyles.mapTitle}>Dónde puedes encontrarnos</Text>

            <View style={contactFormStyles.locationDetail}>
              <Image
                source={require('./styles/image.png')}
                style={contactFormStyles.locationIcon}
              />
              <Text style={contactFormStyles.locationText}>
                {gymAddress} ({gymName})
              </Text>
            </View>

            <View style={contactFormStyles.divider} />

            <MapComponent
              latitude={gymCoordinates.latitude}
              longitude={gymCoordinates.longitude}
              name={gymName}
              address={gymAddress}
              height={280}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactForm;
