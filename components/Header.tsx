
import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router'; 
import { HeaderProps } from '@/types'; 
import { useSafeAreaInsets } from 'react-native-safe-area-context'; 

interface HeaderPropsWithoutCartPress extends Omit<HeaderProps, 'onCartPress'> {}

const Header: React.FC<HeaderPropsWithoutCartPress> = ({ onMenuPress, onSearchChange, searchTerm }) => {
  const router = useRouter(); 
  const insets = useSafeAreaInsets(); 

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

        
        <TouchableOpacity onPress={() => router.push('/store')} style={styles.iconButton}>
          <Icon name="cart-outline" size={28} color="#FFF" />
        </TouchableOpacity>
        

 
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000',
    
    paddingHorizontal: 100,
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
  iconButton: {
    marginLeft: 10,
  },
});

export default Header;
