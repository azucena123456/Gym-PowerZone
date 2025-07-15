import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Animated, Linking, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from './Navbar.styles';

interface NavbarProps {
  onPressMenu?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPressMenu }) => {
  const [pressedItem, setPressedItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null); // Nuevo estado para el hover
  const [menuOpen, setMenuOpen] = useState(false);
  const slideAnim = useState(new Animated.Value(0))[0];

  const { width } = useWindowDimensions();
  const isMobileOrTablet = width < 1024;

  const menuItems = ['INICIO','SOBRE NOSTRO', 'CLASES','HORARIOS','CONTACTO' ];

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: menuOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [menuOpen, slideAnim]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemPress = (item: string) => {
    setPressedItem(item);
    setTimeout(() => {
      setPressedItem(null);
      setMenuOpen(false);
    }, 200);
  };

  const menuHeight = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, menuItems.length * 50 + 80]
  });

  return (
    <View style={styles.navbar} testID="main-navbar">
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Gym-PowerZone</Text>
      </View>

      {isMobileOrTablet ? (
        <>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={toggleMenu}
            activeOpacity={0.7}
          >
            <FontAwesome
              name={menuOpen ? "times" : "bars"}
              size={24}
              color="white"
            />
          </TouchableOpacity>

          <Animated.View
            style={[
              styles.mobileMenu,
              {
                height: menuHeight,
                opacity: slideAnim,
                display: menuOpen ? 'flex' : 'none',
                top: 60,
              }
            ]}
          >
            <View style={styles.menuContent}>
              {menuItems.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.mobileMenuItem}
                  onPress={() => handleMenuItemPress(item)}
                  activeOpacity={0.7}
                >
                  <Text style={[
                    styles.mobileMenuText,
                    pressedItem === item && styles.mobileMenuTextPressed,
                  ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}

              <View style={styles.mobileSocialIcons}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com')}>
                  <FontAwesome name="facebook" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://x.com')}>
                  <View style={styles.xIcon}>
                    <Text style={styles.xText}>X</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?phone=527711429286&text=chat%20bot')}>
                  <FontAwesome name="whatsapp" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com')}>
                  <FontAwesome name="instagram" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </>
      ) : (
        <View style={styles.desktopMenu}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.menuItem}
              onPressIn={() => setPressedItem(item)}
              onPressOut={() => setPressedItem(null)}
              // Lógica de hover para web
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Text style={[
                styles.menuText,
                pressedItem === item && styles.menuTextPressed,
                hoveredItem === item && styles.menuTextHover, // Aplica el estilo de hover aquí
                // Para que 'INICIO' esté marcado por defecto si no hay otro item presionado o en hover
                (item === 'INICIO' && !pressedItem && !hoveredItem) && styles.menuTextPressed,
              ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}

          <View style={styles.socialIcons}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.facebook.com')}
              onMouseEnter={() => setHoveredItem('facebook')} // Puedes usar un identificador único para los iconos
              onMouseLeave={() => setHoveredItem(null)}
            >
              <FontAwesome
                name="facebook"
                size={20}
                // Si quieres que los iconos también cambien de color al hover, aplica lógica similar
                // color={hoveredItem === 'facebook' ? styles.menuTextHover.color : 'white'}
                color={'white'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Linking.openURL('https://x.com')}
              onMouseEnter={() => setHoveredItem('twitter')} // 'X' solía ser Twitter
              onMouseLeave={() => setHoveredItem(null)}
            >
              <View style={styles.xIcon}>
                <Text
                  style={[
                    styles.xText,
                    // hoveredItem === 'twitter' && styles.menuTextHover, // Si quieres que la X cambie de color
                  ]}
                >
                  X
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Linking.openURL('whatsapp://send?phone=527711429286&text=chat%20bot')}
              onMouseEnter={() => setHoveredItem('whatsapp')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <FontAwesome
                name="whatsapp"
                size={20}
                // color={hoveredItem === 'whatsapp' ? styles.menuTextHover.color : 'white'}
                color={'white'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.instagram.com')}
              onMouseEnter={() => setHoveredItem('instagram')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <FontAwesome
                name="instagram"
                size={20}
                // color={hoveredItem === 'instagram' ? styles.menuTextHover.color : 'white'}
                color={'white'}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};