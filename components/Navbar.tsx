import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Linking,  Animated, useWindowDimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './Navbar.styles';

interface NavbarProps {
  onPressMenu?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPressMenu }) => {
  const [pressedItem, setPressedItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const slideAnim = useState(new Animated.Value(0))[0];
  
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const menuItems = ['Inicio', 'Clases', 'Contacto', 'Horarios'];

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
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Gymso Fitness</Text>
        </View>

        {isMobile ? (
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

                  <TouchableOpacity onPress={() => Linking.openURL('https://www.whatsapp.com')}>
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
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Text style={[
                  styles.menuText,
                  pressedItem === item && styles.menuTextPressed,
                  hoveredItem === item && styles.menuTextHover,
                ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}

            <View style={styles.socialIcons}>
              <TouchableOpacity 
                onPress={() => Linking.openURL('https://www.facebook.com')}
                onMouseEnter={() => setHoveredItem('facebook')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <FontAwesome 
                  name="facebook" 
                  size={20} 
                  color={hoveredItem === 'facebook' ? '#F13a11' : 'white'} 
                />
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => Linking.openURL('https://x.com')}
                onMouseEnter={() => setHoveredItem('twitter')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <View style={styles.xIcon}>
                  <Text style={[
                    styles.xText,
                    hoveredItem === 'twitter' && { color: '#F13a11' }
                  ]}>
                    X
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => Linking.openURL('https://www.whatsapp.com')}
                onMouseEnter={() => setHoveredItem('whatsapp')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <FontAwesome 
                  name="whatsapp" 
                  size={20} 
                  color={hoveredItem === 'whatsapp' ? '#F13a11' : 'white'} 
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
                  color={hoveredItem === 'instagram' ? '#F13a11' : 'white'} 
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};