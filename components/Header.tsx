import { HeaderProps } from '@/types';
import { useRouter } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

interface HeaderPropsWithoutCartPress extends Omit<HeaderProps, 'onCartPress'> {}

const Header: React.FC<HeaderPropsWithoutCartPress> = ({ onMenuPress, onSearchChange, searchTerm }) => {
  const router = useRouter(); 
  const insets = useSafeAreaInsets(); 
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  const handleLogout = () => {
  
    router.replace('/Login'); 
  };

  return (
    <View style={[
      styles.headerContainer,
      { paddingTop: Platform.OS === 'ios' ? insets.top : 10 } 
    ]}>

      
      <View style={styles.topRow}>
        <TouchableOpacity onPress={()=> router.push('/')}>
        <Text style={styles.logoText}>Gym-PowerZone</Text>
        </TouchableOpacity>
        
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar"
            placeholderTextColor="#888"
            value={searchTerm}
            onChangeText={onSearchChange} 
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Icon name="search-outline" size={20} color="#333" />
          </TouchableOpacity>
        </View>

        
        <View style={styles.iconButtonsContainer}>
          <TouchableOpacity onPress={() => router.push('/Cart')} style={styles.iconButton}>
            <Icon name="cart-outline" size={28} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogout}
            style={[styles.menuItem, styles.logoutButtonMargin]} 
            onMouseEnter={() => setHoveredItem('CerrarSesion')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Text style={[
              styles.menuText, 
              hoveredItem === 'CerrarSesion' && styles.menuTextHover, 
            ]}>
              CERRAR SESIÓN
            </Text>
          </TouchableOpacity>
        </View>
        
        

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000',
    paddingHorizontal: 90,
    
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 100,
    flexShrink: 0,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    flex: 1,
    marginRight: 109,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: '#333',
    fontSize: 14,
  },
  searchIcon: {
    padding: 8,
  },
  iconButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10,
  },
  menuItem: {
    marginLeft: 10,
    paddingVertical: 10,
  },
  menuText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  menuTextHover: {
    color: '#E44D26', 
  },
  logoutButtonMargin: {
    marginLeft: 55, 
  }
});

export default Header;