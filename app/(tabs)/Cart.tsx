import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const isMobile = width < 768; // Punto de quiebre para pantallas pequeñas

const Carrito = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Botella para Proteina con mezclador',
      description: 'Copa de coctelera de proteínas sin BPA y sin ftalatos, 100% material de grado alimenticio',
      price: 1456,
      quantity: 1,
      image: require('../../assets/images/botella2.jpg'),
    },
    {
      id: 2,
      name: 'Banda de Resistencia de Látex',
      description: 'Bandas elásticas para ejercicios de fuerza, pilates y yoga. Incluye 5 niveles de resistencia.',
      price: 250,
      quantity: 1,
      image: require('../../assets/images/botellas.jpg'),
    },
  ]);
  const navigation = useNavigation();

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const HeaderCart = ({ totalItems }) => {
    const formatCartCount = (count) => {
      return count > 9 ? '9+' : count.toString();
    };

    return (
      <View style={headerStyles.headerContainer}>
        <View style={headerStyles.logoContainer}>
          <Text style={headerStyles.logoText}>Gym-PowerZone</Text>
        </View>
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
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={headerStyles.cartButton}>
          <Icon name="cart-outline" size={24} color="#FFF" />
          {totalItems > 0 && (
            <View style={headerStyles.badge}>
              <Text style={headerStyles.badgeText}>
                {formatCartCount(totalItems)}
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Menú presionado')} style={headerStyles.menuButton}>
          <Icon name="menu-outline" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    );
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <View style={styles.container}>
      <HeaderCart totalItems={totalItems} />

      <ScrollView contentContainerStyle={styles.mainContent}>
        <View style={styles.contentWrapper}>
          <View style={styles.productsSection}>
            <Text style={styles.cartTitle}>Carrito</Text>
            
            {cartItems.map(item => (
              <View key={item.id} style={styles.cartItem}>
                <View style={styles.itemImageContainer}>
                  <Image
                    source={item.image}
                    style={styles.productImage}
                  />
                </View>
                <View style={styles.itemDetails}>
                  <Text style={styles.itemTitle}>{item.name}</Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                  <Text style={styles.availability}>Disponible</Text>
                  <View style={styles.itemControls}>
                    <View style={styles.quantityControls}>
                      <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <Text style={styles.quantityButtonText}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantity}>{item.quantity}</Text>
                      <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Text style={styles.quantityButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.actions}>
                      <TouchableOpacity>
                        <Text style={styles.actionButtonText}>Eliminar</Text>
                      </TouchableOpacity>
                      <Text style={styles.actionSeparator}>|</Text>
                      <TouchableOpacity>
                        <Text style={styles.actionButtonText}>Guardar para más tarde</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <Text style={styles.itemPrice}>${(item.price * item.quantity).toLocaleString('es-MX')}</Text>
              </View>
            ))}
          </View>

          <View style={styles.summarySection}>
            <View style={styles.summaryContainer}>
              <View style={styles.shippingInfo}>
<<<<<<< HEAD
                <View style={styles.shippingIconContainer}>
                  <Icon name="checkmark-circle" size={24} color="#ff0000" />
                </View>
=======
                <Image 
                  source={require('../../assets/images/CheckRed.png')} 
                  style={styles.shippingIcon}
                />
>>>>>>> ae1c34b169e5ff96da186c545fbc5831ad70dc9d
                <View style={styles.shippingTextContainer}>
                  <Text style={styles.shippingTitle}>Una parte de tu primer pedido califica para envío</Text>
                  <Text style={styles.shippingText}>
                    <Text style={styles.shippingTextBold}>GRATIS</Text> Selecciona esta opción al finalizar tu compra <Text style={styles.shippingTextLink}>Detalles</Text>
                  </Text>
                </View>
              </View>
              
              <View style={styles.subtotalContainer}>
                <Text style={styles.subtotalText}>Subtotal ({totalItems} producto{totalItems !== 1 ? 's' : ''}):</Text>
                <Text style={styles.subtotalPrice}>${calculateSubtotal().toLocaleString('es-MX')}</Text>
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

const headerStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: isMobile ? 10 : 15,
    paddingVertical: 10,
  },
  logoContainer: {
    paddingRight: isMobile ? 5 : 10,
  },
  logoText: {
    color: '#FFF',
    fontSize: isMobile ? 16 : 18,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 4,
    marginHorizontal: isMobile ? 5 : 15,
  },
  searchInput: {
    flex: 1,
    paddingVertical: isMobile ? 6 : 8,
    paddingHorizontal: 10,
    color: '#333',
    fontSize: isMobile ? 12 : 14,
  },
  searchIcon: {
    padding: isMobile ? 6 : 8,
    backgroundColor: '#FFF',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  cartButton: {
    marginLeft: 'auto',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: -8,
    top: -8,
    backgroundColor: '#ff0000',
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
  menuButton: {
    marginLeft: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  mainContent: {
    flexGrow: 1,
    padding: 20,
  },
  cartHeader: {
    marginBottom: 20,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#333',
    marginBottom: 20,
  },
  contentWrapper: {
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
<<<<<<< HEAD
    flex: 1,
=======
    paddingHorizontal: 20, // Padding a los lados del contenedor principal
    paddingTop: 20, // Padding arriba del contenedor principal
>>>>>>> ae1c34b169e5ff96da186c545fbc5831ad70dc9d
  },
  productsSection: {
    flex: isMobile ? 1 : 2,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    marginRight: isMobile ? 0 : 20,
    marginBottom: isMobile ? 20 : 0,
  },
  summarySection: {
    flex: 1,
    paddingTop: 20, // Padding arriba para la sección de resumen
  },
  summaryContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    position: 'relative',
    marginBottom: 20,
  },
  itemImageContainer: {
    width: isMobile ? 80 : 100,
    height: isMobile ? 80 : 100,
    marginRight: 20,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: isMobile ? 14 : 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: isMobile ? 12 : 14,
    color: '#666',
    marginBottom: 5,
  },
  availability: {
    fontSize: isMobile ? 12 : 14,
    color: '#388e3c',
    marginBottom: 10,
  },
  itemControls: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginBottom: 10,
  },
  quantityButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#333',
  },
  quantity: {
    paddingHorizontal: 12,
    fontSize: 16,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
  },
  actionButtonText: {
    color: '#ff0000',
    fontSize: isMobile ? 12 : 14,
  },
  actionSeparator: {
    color: '#ccc',
    marginHorizontal: 10,
  },
  itemPrice: {
    fontSize: isMobile ? 16 : 18,
    fontWeight: 'bold',
    color: '#333',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  shippingInfo: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  shippingIconContainer: {
    marginRight: 10,
    alignSelf: 'flex-start',
  },
  shippingTextContainer: {
    flex: 1,
  },
  shippingTitle: {
    fontSize: 14,
    color: '#333',
  },
  shippingText: {
    fontSize: 12,
    color: '#333',
    lineHeight: 18,
  },
  shippingTextBold: {
    fontWeight: 'bold',
    color: '#ff0000',
  },
  shippingTextLink: {
    color: '#0066cc',
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  subtotalText: {
    fontSize: 16,
    color: '#333',
  },
  subtotalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#ff0000',
<<<<<<< HEAD
    padding: 12,
    borderRadius: 50,
=======
    padding: 15,
    borderRadius: 4,
>>>>>>> ae1c34b169e5ff96da186c545fbc5831ad70dc9d
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Carrito;