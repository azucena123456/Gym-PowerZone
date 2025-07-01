import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './Navbar.styles';

interface NavbarProps {
  onPressMenu?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPressMenu }) => {
  const [pressedItem, setPressedItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = ['Inicio', 'Clases', 'Entrenadores', 'Contacto', 'Horarios'];

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Gymso Fitness</Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.menuItem}
            onPressIn={() => setPressedItem(item)}
            onPressOut={() => setPressedItem(null)}
            onMouseEnter={() => setHoveredItem(item)}  
            onMouseLeave={() => setHoveredItem(null)}  
          >
            <Text style={[
              styles.menuText,
              pressedItem === item && styles.menuTextPressed,
              hoveredItem === item && styles.menuTextHovered,
            ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}

        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/?locale=es_LA')}>
            <FontAwesome name="facebook" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL('https://x.com/?lang=es')}>
            <View style={{
              width: 24,
              height: 24,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>X</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL('https://www.whatsapp.com/?lang=es_LA')}>
            <FontAwesome name="whatsapp" size={24} color="white" />
          </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/')}>
            <FontAwesome name="instagram" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};