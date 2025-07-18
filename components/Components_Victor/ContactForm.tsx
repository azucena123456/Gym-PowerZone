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
  const CALENDLY_TOKEN = "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzUyNzgyMTcxLCJqdGkiOiI5YTEzOGMzOS1kMTNmLTQ5YzgtOGQ0OS00YzI0MjA0NDQ2MDAiLCJ1c2VyX3V1aWQiOiJkOTM1NmY4NS1hNDdhLTQzMGMtOTFlMS0wY2RlODk5YjA2OWIifQ.mFnWFi-90INsi5XS9h9Ihz3QpOP2QaPMha7ZurXz738Kf5FLt37t8xoTCAyX5UHfd2s7QltdE-xxvnCADxBZ6g";

  const CALENDLY_URL = "https://calendly.com/2022034-utsh/gym-powerzone-consultas";

=======
>>>>>>> fb2435a (Cambios corregidos y listos para subir)
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

<<<<<<< HEAD
      console.log('Mensaje enviado a Calendly:', { nombre, email, mensaje });
      
      const calendlyUrlWithParams = `${CALENDLY_URL}?name=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&a1=${encodeURIComponent(mensaje)}`;
      
=======
>>>>>>> fb2435a (Cambios corregidos y listos para subir)
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
    } finally {
      setIsSending(false);
    }
  };

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
              placeholder="Nombre"
              placeholderTextColor="#555"
              value={nombre}
              onChangeText={setNombre}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#555"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="Mensaje"
              placeholderTextColor="#555"
              multiline
              value={mensaje}
              onChangeText={setMensaje}
            />
            <TouchableOpacity
              style={styles.sendButton}
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
