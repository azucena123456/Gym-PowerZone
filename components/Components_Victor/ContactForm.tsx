import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  Image // Importa el componente Image
  ,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import MapComponent from './MapComponent';

import { contactFormStyles } from './styles/ContactForm.styles';

const ContactForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSendMessage = () => {
    if (!nombre || !email || !mensaje) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Por favor, introduce un correo electrónico válido.');
      return;
    }

    console.log('Mensaje enviado:', { nombre, email, mensaje });
    Alert.alert('Mensaje Enviado', '¡Tu mensaje ha sido enviado con éxito!');

    setNombre('');
    setEmail('');
    setMensaje('');
  };

  const gymCoordinates = {
    latitude: 20.2806,
    longitude: -98.0569,
  };

  const gymAddress = "C. de Olivo, Centro, 43200 Zacualtipán, Hgo.";
  const gymName = "Gimnasio \"Power Up\"";

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
            <TouchableOpacity style={contactFormStyles.sendButton} onPress={handleSendMessage}>
              <Text style={contactFormStyles.sendButtonText}>Enviar Mensaje</Text>
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
