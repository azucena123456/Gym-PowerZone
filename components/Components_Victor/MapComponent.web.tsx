
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface MapComponentProps {
  height?: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ height = 280 }) => {
  const fixedEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.6539750350025!2d-98.65475672498468!3d20.642956400918187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1252ed444d9b5%3A0x134e4b8a910c54c4!2sC.%20de%20Olivo%2C%20Zacualtip%C3%A1n%2C%20Hgo.!5e0!3m2!1sen!2smx!4v1752596194886!5m2!1sen!2smx`;

  const fixedAddress = "C. de Olivo, Centro, 43200 Zacualtipán, Hgo.";
  const gymName = "Gym \"PowerZone\"";

  const encodedName = encodeURIComponent(gymName);
  const encodedAddress = encodeURIComponent(fixedAddress);

  const externalMapsUrl = `http://googleusercontent.com/maps/search/?api=1&query=${encodedName},${encodedAddress}`;

  return (
    <View style={[styles.mapLiveContainer, { height }]}>
      <iframe
        title="Ubicación en Google Maps"
        src={fixedEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
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
});

export default MapComponent;