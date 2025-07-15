// components/Components_Victor/MapComponent.web.tsx
import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MapComponentProps {
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  height?: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ address, name, height = 280 }) => {
  // URL para el iframe de Google Maps. Usamos embed directamente aquí.
  // Puedes obtener un iframe de Google Maps haciendo clic en "Compartir" -> "Insertar un mapa" en Google Maps.
  // Reemplaza con una dirección más precisa si la tienes.
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_Maps_EMBED_API_KEY&q=${encodeURIComponent(address)}&output=embed&z=15`;

  return (
    <View style={[styles.mapLiveContainer, { height }]}>
      {/* Renderizar un iframe directamente para la web */}
      <iframe
        src={googleMapsEmbedUrl}
        style={{ border: 0, width: '100%', height: '100%' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
      <View style={styles.mapOverlayText}>
        <Text style={styles.mapOverlayAddress}>{name}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(`http://googleusercontent.com/maps.google.com/5{encodeURIComponent(address)}`)}>
          <Text style={styles.mapOverlayLink}>Ver en Google Maps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapLiveContainer: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  // Los estilos para el iframe se aplican directamente en la prop 'style' del iframe.
  // mapLive: { // Este estilo ya no se aplicaría directamente a un View o WebView
  //   width: '100%',
  //   height: '100%',
  // },
  mapOverlayText: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 10,
    borderRadius: 5,
  },
  mapOverlayAddress: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  mapOverlayLink: {
    fontSize: 12,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default MapComponent;