// components/Components_Victor/MapComponent.tsx
import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface MapComponentProps {
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  height?: number; 
}

const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude, name, address, height = 280 }) => {
  const initialRegion = {
    latitude,
    longitude,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  const openExternalMap = () => {
    const scheme = `geo:${latitude},${longitude}?q=`;
    const label = encodeURIComponent(name);
    const url = `${scheme}${encodeURIComponent(address)}`;

    Linking.openURL(url).catch(err => console.error('An error occurred opening map: ', err));
  };

  return (
    <View style={[styles.mapLiveContainer, { height }]}>
      <MapView
        style={styles.mapLive}
        initialRegion={initialRegion}
        showsUserLocation={false}
        showsMyLocationButton={false}
        showsCompass={false}
        zoomEnabled={true}
        scrollEnabled={true}
      >
        <Marker
          coordinate={{ latitude, longitude }}
          title={name}
          description={address}
        />
      </MapView>
      <View style={styles.mapOverlayText}>
        <Text style={styles.mapOverlayAddress}>{name}</Text>
        <TouchableOpacity onPress={openExternalMap}>
          <Text style={styles.mapOverlayLink}>Ver mapa más grande</Text>
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
  mapLive: {
    width: '100%',
    height: '100%',
  },
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