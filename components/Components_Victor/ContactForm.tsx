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

  const CALENDLY_TOKEN = "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzUyNzgyMTcxLCJqdGkiOiI5YTEzOGMzOS1kMTNmLTQ5YzgtOGQ0OS00YzI0MjA0NDQ2MDAiLCJ1c2VyX3V1aWQiOiJkOTM1NmY4NS1hNDdhLTQzMGMtOTFlMS0wY2RlODk5YjA2OWIifQ.mFnWFi-90INsi5XS9h9Ihz3QpOP2QaPMha7ZurXz738Kf5FLt37t8xoTCAyX5UHfd2s7QltdE-xxvnCADxBZ6g";

  const CALENDLY_URL = "https://calendly.com/2022034-utsh/gym-powerzone-consultas";

  const handleSendMessage = async () => {
    if (!nombre || !email || !mensaje) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Por favor, introduce un correo electrónico válido.');
      return;
    }

    setIsSending(true);

    try {
      const userResponse = await fetch('https://api.calendly.com/users/me', {
        headers: {
          'Authorization': `Bearer ${CALENDLY_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });

      if (!userResponse.ok) {
        throw new Error('Token de Calendly inválido o sin permisos');
      }

      console.log('Mensaje enviado a Calendly:', { nombre, email, mensaje });
      
      const calendlyUrlWithParams = `${CALENDLY_URL}?name=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&a1=${encodeURIComponent(mensaje)}`;
      
      const canOpen = await Linking.canOpenURL(calendlyUrlWithParams);
      if (!canOpen) {
        throw new Error('No se puede abrir el enlace de Calendly');
      }

      await Linking.openURL(calendlyUrlWithParams);

      Alert.alert(
        '¡Mensaje Enviado!', 
        'Tu consulta ha sido recibida y hemos abierto el calendario para que agendes una cita.',
        [
          {
            text: 'OK',
            onPress: () => {
              setNombre('');
              setEmail('');
              setMensaje('');
            }
          }
        ]
      );

    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      Alert.alert(
        'Error', 
        'Tu mensaje fue recibido, pero hubo un problema al redirigirte a Calendly. Por favor visita el enlace manualmente.'
      );
    } finally {
      setIsSending(false);
    }
  };

  const gymCoordinates = {
    latitude: 20.2806,
    longitude: -98.0569,
  };

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
              style={contactFormStyles.input}
              placeholder="Nombre"
              placeholderTextColor="#555"
              value={nombre}
              onChangeText={setNombre}
            />
            <TextInput
              style={contactFormStyles.input}
              placeholder="Email"
              placeholderTextColor="#555"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={[contactFormStyles.input, contactFormStyles.messageInput]}
              placeholder="Mensaje"
              placeholderTextColor="#555"
              multiline={true}
              numberOfLines={4}
              value={mensaje}
              onChangeText={setMensaje}
            />
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