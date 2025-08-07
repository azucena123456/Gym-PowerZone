import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Carrito = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cartItemCount, setCartItemCount] = useState(1);
  const navigation = useNavigation();

  const HeaderCart = () => {
    const formatCartCount = (count: number) => {
      return count > 9 ? '9+' : count.toString();
    };

    return (
      <View style={headerStyles.headerContainer}>
        <View style={headerStyles.topRow}>
          <Text style={headerStyles.logoText}>Gym-PowerZone</Text>
          
          <View style={headerStyles.searchBar}>
            <TextInput
              style={headerStyles.searchInput}
              placeholder="Buscar"
              placeholderTextColor="#888"
              value={searchTerm}
              onChangeText={setSearchTerm} 
            />
            <TouchableOpacity style={headerStyles.searchIcon}>
              <Icon name="search-outline" size={20} color="#333" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            onPress={() => navigation.navigate('Cart')} 
            style={headerStyles.cartButton}
          >
            <Icon name="cart-outline" size={24} color="#FFF" />
            {cartItemCount > 0 && (
              <View style={headerStyles.badge}>
                <Text style={headerStyles.badgeText}>
                  {formatCartCount(cartItemCount)}
                </Text>
              </View>
            )}
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => console.log('Menú presionado')} style={headerStyles.iconButton}>
            <Icon name="menu-outline" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      setCartItemCount(newQuantity > 9 ? 10 : newQuantity);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderCart />
      
      <ScrollView contentContainerStyle={styles.mainContent}>
        <View style={styles.cartContainer}>
          {/* Sección de productos del carrito */}
          <View style={styles.productsSection}>
            <Text style={styles.sectionTitle}>Tu Carrito</Text>

            <View style={styles.cartItem}>
              <Text style={styles.itemTitle}>Botella para Proteina con mezclador</Text>
              <Text style={styles.itemDescription}>
                Copa de cocteína de proteínas sin BPA y sin ftalatos, 100% material de grado alimenticio
              </Text>
              <Text style={styles.availability}>Disponible</Text>

              <View style={styles.itemControls}>
                <View style={styles.quantityControls}>
                  <TouchableOpacity 
                    style={styles.quantityButton} 
                    onPress={() => handleQuantityChange(quantity - 1)}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{quantity}</Text>
                  <TouchableOpacity 
                    style={styles.quantityButton} 
                    onPress={() => handleQuantityChange(quantity + 1)}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>Eliminar</Text>
                  </TouchableOpacity>
                  <Text style={styles.actionSeparator}>|</Text>
                  <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>Guardar</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.itemPrice}>${(1456 * quantity).toLocaleString('es-MX')}</Text>
            </View>
          </View>

          {/* Sección de resumen (derecha) */}
          <View style={styles.summarySection}>
            <View style={styles.summaryContainer}>
              <Text style={styles.summaryText}>
                Subtotal ({quantity} producto{quantity !== 1 ? 's' : ''}): 
              </Text>
              <Text style={styles.summaryTotal}>${(1456 * quantity).toLocaleString('es-MX')}</Text>
              
              <View style={styles.shippingInfo}>
                <Image 
                  source={require('../../assets/images/checkOrange.png')} 
                  style={styles.shippingIcon}
                />
                <View style={styles.shippingTextContainer}>
                  <Text style={styles.shippingText}>Una parte de tu primer pedido califica para envío</Text>
                  <Text style={[styles.shippingText, styles.shippingOption]}>
                    GRATIS Selecciona esta opción al finalizar tu compra Detalles
                  </Text>
                </View>
              </View>

              <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>Proceder al pago</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Estilos para el Header
const headerStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000',
    padding: 15,
    paddingTop: Platform.OS === 'android' ? 25 : 10,
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
    marginRight: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 15,
    maxWidth: '50%',
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
  cartButton: {
    position: 'relative',
    marginLeft: 10,
  },
  badge: {
    position: 'absolute',
    right: -8,
    top: -8,
    backgroundColor: '#FF6B00',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  iconButton: {
    marginLeft: 10,
  },
});

// Estilos para el contenido del carrito
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  mainContent: {
    flexGrow: 1,
    padding: 20,
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productsSection: {
    flex: 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginRight: 15,
  },
  summarySection: {
    flex: 1,
  },
  summaryContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  cartItem: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  availability: {
    fontSize: 14,
    color: '#28a745',
    marginBottom: 10,
  },
  itemControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 16,
    color: '#333',
  },
  quantity: {
    fontWeight: 'bold',
    marginHorizontal: 10,
    fontSize: 16,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginHorizontal: 5,
  },
  actionSeparator: {
    color: '#ccc',
    marginHorizontal: 5,
  },
  actionButtonText: {
    color: '#0066cc',
    fontSize: 14,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'right',
    marginTop: 10,
  },
  shippingInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 20,
  },
  shippingIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 3,
  },
  shippingTextContainer: {
    flex: 1,
  },
  shippingText: {
    fontSize: 14,
    color: '#666',
  },
  shippingOption: {
    color: '#0066cc',
    fontWeight: 'bold',
    marginTop: 5,
  },
  summaryText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  summaryTotal: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  checkoutButton: {
    backgroundColor: '#ff6b00',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Carrito;