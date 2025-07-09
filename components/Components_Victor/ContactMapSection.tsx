import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './styles/SectionContactMap.styles';

const ContactMapSection = () => {
  const handleSendMessage = () => {
    console.log('Mensaje enviado');
  };

  const openMap = () => {
    const url = 'https://maps.app.goo.gl/examplelink';
    Linking.openURL(url).catch(err => console.error("Error al abrir mapa:", err));
  };

  return (
    <View style={styles.container}>
      {/* Sección de Contacto */}
      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Feel free to ask anything</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#999"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
        
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Message"
          placeholderTextColor="#999"
          multiline
        />
        
        <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>

      {/* Sección de Mapa */}
      <View style={styles.locationSection}>
        <Text style={styles.sectionTitle}>Where you can find us</Text>
        <Text style={styles.address}>120-240 Rio de Janeiro - State of Rio de Janeiro, Brazil</Text>
        
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -22.9068,
              longitude: -43.1729,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: -22.9068, longitude: -43.1729 }}
              title="Nuestra Ubicación"
              description="Barra da Tijuca"
            />
          </MapView>
        </View>
        
        <TouchableOpacity onPress={openMap}>
          <Text style={styles.mapLink}>Av. Licio Costa - View larger map</Text>
        </TouchableOpacity>
        
        <Text style={styles.areaTitle}>BARRA DA TIJUCA</Text>
        
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Casa da Reserva</Text>
          <Text style={styles.infoText}>Manipendi logico</Text>
          <Text style={styles.infoText}>A.uuecon</Text>
        </View>
        
        <Text style={styles.mapFooter}>
          Map data ©2023 Google | Terms of Use | Report a map error
        </Text>
      </View>
    </View>
  );
};

export default ContactMapSection;