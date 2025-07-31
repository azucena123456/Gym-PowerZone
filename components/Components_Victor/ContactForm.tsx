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
  useWindowDimensions
} from 'react-native';
import MapComponent from './MapComponent'; // Asegúrate de que MapComponent esté en el mismo directorio o ajusta la ruta.

const SERVICE_ID = 'service_f4nam56';
const TEMPLATE_ID = 'template_58bdplq';
const PUBLIC_KEY = '61Z51srJVskv93TN3';
const CALENDLY_BASE_URL = 'https://calendly.com/2022034-utsh/gym-powerzone-consultas';

const ContactForm = () => {
  const { width } = useWindowDimensions();

  // Variables para detectar el tamaño de la pantalla
  const IS_DESKTOP = width >= 1024;
  const IS_TABLET = width >= 600 && width < 1024;
  const IS_MOBILE = width < 600; // Aunque no se usa directamente, es útil mantenerla para claridad.

  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [isSending, setIsSending] = useState(false);

  // Estados para los mensajes de error de validación
  const [nombreError, setNombreError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  // Regex para la validación de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Función para validar el formulario antes del envío
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

  // Manejador para el envío del mensaje
  const handleSendMessage = async () => {
    if (!validateForm()) return; // Si la validación falla, no continúa.

    setIsSending(true); // Activa el estado de envío

    const templateParams = {
      name: nombre,
      email: email,
      message: mensaje,
    };

    try {
      // Intenta enviar el email usando EmailJS
      await send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // Construye la URL de Calendly con los datos del formulario pre-llenados
      const url = `${CALENDLY_BASE_URL}?name=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&a1=${encodeURIComponent(mensaje)}`;
      
      // Verifica si se puede abrir la URL de Calendly
      const canOpen = await Linking.canOpenURL(url);

      if (canOpen) {
        await Linking.openURL(url); // Abre Calendly si es posible
      }

      // Muestra una alerta de éxito y limpia el formulario
      Alert.alert('¡Mensaje enviado!', 'Tu mensaje ha sido enviado con éxito y hemos abierto el calendario para agendar tu cita.');
      setNombre('');
      setEmail('');
      setMensaje('');
    } catch (error) {
      // Manejo de errores
      console.error('Error al enviar mensaje:', error);
      Alert.alert('Error', 'No se pudo enviar el mensaje. Intenta más tarde.');
    } finally {
      setIsSending(false); // Desactiva el estado de envío al finalizar
    }
  };

  // Información del gimnasio para el componente MapComponent
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
          // Ajusta el padding vertical según el tamaño de la pantalla
          paddingVertical: IS_DESKTOP ? 60 : IS_TABLET ? 50 : 40,
          alignItems: 'center',
        },
      ]}
      keyboardShouldPersistTaps="handled" // Para que el teclado no cierre al tocar fuera
    >
      <View style={styles.sectionContainer}>
        <View
          style={[
            styles.contentWrapper,
            {
              flexDirection: IS_DESKTOP ? 'row' : 'column', // Layout en fila para desktop, columna para tablet/móvil
              width: IS_DESKTOP ? '90%' : IS_TABLET ? 700 : '95%', // Ancho adaptativo
              maxWidth: IS_DESKTOP ? 1200 : undefined, // Ancho máximo para desktop
              justifyContent: 'space-between', // Espacio entre las columnas
            },
          ]}
        >
          {/* Columna del formulario de contacto */}
          <View
            style={[
              styles.formColumn,
              {
                padding: IS_DESKTOP ? 30 : IS_TABLET ? 25 : 20, // Padding adaptativo
                marginBottom: IS_DESKTOP ? 0 : 40, // Margen inferior en móvil/tablet
                marginRight: IS_DESKTOP ? 40 : 0, // Margen derecho en desktop
                maxWidth: IS_DESKTOP ? 500 : '100%', // Ancho máximo
                width: IS_TABLET ? '100%' : undefined, // Ancho en tablet
              },
            ]}
          >
            <Text
              style={[
                styles.formTitle,
                {
                  fontSize: IS_DESKTOP ? 32 : IS_TABLET ? 28 : 22, // Tamaño de fuente adaptativo
                  lineHeight: IS_DESKTOP ? 40 : 30, // Altura de línea adaptativa
                  textAlign: IS_DESKTOP ? 'left' : 'center', // Alineación de texto
                },
              ]}
            >
              Siéntete libre de preguntar cualquier cosa
            </Text>

            {/* Campos de entrada del formulario */}
            <TextInput
              style={[
                styles.input,
                nombreError && { borderColor: 'red' }, // Borde rojo si hay error
              ]}
              placeholder="Nombre"
              value={nombre}
              onChangeText={text => {
                setNombre(text);
                if (text.trim()) setNombreError(''); // Limpia el error al escribir
              }}
            />
            {nombreError ? <Text style={{ color: 'red' }}>{nombreError}</Text> : null}

            <TextInput
              style={[
                styles.input,
                emailError && { borderColor: 'red' },
              ]}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={text => {
                setEmail(text);
                if (emailRegex.test(text)) setEmailError(''); // Limpia el error si el email es válido
              }}
            />
            {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}

            <TextInput
              style={[
                styles.input,
                styles.messageInput,
                mensajeError && { borderColor: 'red' },
              ]}
              placeholder="Mensaje"
              multiline
              value={mensaje}
              onChangeText={text => {
                setMensaje(text);
                if (text.trim()) setMensajeError(''); // Limpia el error al escribir
              }}
            />
            {mensajeError ? <Text style={{ color: 'red' }}>{mensajeError}</Text> : null}

            {/* Botón de envío */}
            <TouchableOpacity
              style={styles.sendButton}
              onPress={handleSendMessage}
              disabled={isSending} // Deshabilita el botón mientras se envía
            >
              <Text style={styles.sendButtonText}>
                {isSending ? 'Enviando...' : 'Enviar Mensaje'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Columna del mapa y detalles de ubicación */}
          <View
            style={[
              styles.mapColumn,
              {
                padding: IS_DESKTOP ? 30 : IS_TABLET ? 25 : 20, // Padding adaptativo
                maxWidth: IS_DESKTOP ? '55%' : '100%', // Ancho máximo
                width: IS_TABLET ? '100%' : undefined, // Ancho en tablet
                alignItems: IS_DESKTOP ? 'flex-start' : 'center', // Alineación de contenido
              },
            ]}
          >
            <Text
              style={[
                styles.mapTitle,
                {
                  fontSize: IS_DESKTOP ? 32 : IS_TABLET ? 28 : 22, // Tamaño de fuente adaptativo
                  lineHeight: IS_DESKTOP ? 40 : 30, // Altura de línea adaptativa
                  textAlign: IS_DESKTOP ? 'left' : 'center', // Alineación de texto
                },
              ]}
            >
              Dónde puedes encontrarnos
            </Text>
            <View style={styles.locationDetail}>
              {/* Asegúrate de que la ruta a la imagen sea correcta */}
              <Image
                source={require('./styles/image.png')} 
                style={styles.locationIcon}
              />
              <Text style={styles.locationText}>
                {gymInfo.address} ({gymInfo.name})
              </Text>
            </View>
            <View style={styles.divider} />
            {/* Componente del mapa */}
            <MapComponent
              latitude={gymInfo.latitude}
              longitude={gymInfo.longitude}
              name={gymInfo.name}
              address={gymInfo.address}
              height={280} // Altura fija para el mapa
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// Estilos del componente
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
    textAlignVertical: 'top', // Para que el texto empiece arriba en Android
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
    flexShrink: 1, // Permite que el texto se ajuste si es largo
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