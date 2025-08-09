import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TopBar = ({ totalItems, isMobile, headerStyles, onNavigateToStore }) => {
  const formatCartCount = (count) => {
    return count > 9 ? '9+' : count.toString();
  };

  return (
    <View style={headerStyles.topBarContainer}>
      {!isMobile && (
        <View style={headerStyles.logoContainer}>
          <Text style={headerStyles.logoText}>Gym-PowerZone</Text>
        </View>
      )}
      <View style={headerStyles.searchBar}>
        <TextInput
          style={headerStyles.searchInput}
          placeholder="Buscar"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={headerStyles.searchIcon}>
          <Icon name="search-outline" size={20} color="#333" />
        </TouchableOpacity>
      </View>
      {!isMobile && (
        <>
          <TouchableOpacity style={headerStyles.cartButton}>
            <Icon name="cart-outline" size={24} color="#FFF" />
            {totalItems > 0 && (
              <View style={headerStyles.badge}>
                <Text style={headerStyles.badgeText}>
                  {formatCartCount(totalItems)}
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={headerStyles.menuButton} onPress={onNavigateToStore}>
            <Icon name="home-outline" size={24} color="#FFF" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const BottomNavBar = ({ totalItems, footerStyles, onNavigateToStore }) => {
  const formatCartCount = (count) => {
    return count > 9 ? '9+' : count.toString();
  };

  return (
    <View style={footerStyles.footerContainer}>
      <TouchableOpacity style={footerStyles.footerButton} onPress={onNavigateToStore}>
        <Icon name="home-outline" size={30} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity style={footerStyles.footerButton}>
        <Icon name="cart-outline" size={30} color="#FFF" />
        {totalItems > 0 && (
          <View style={footerStyles.badge}>
            <Text style={footerStyles.badgeText}>
              {formatCartCount(totalItems)}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const Carrito = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const navigation = useNavigation();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Botella para Proteina con mezclador',
      description: 'Botella con rejilla mezcladora, capacidad 750ml, libre de BPA.',
      price: 145,
      quantity: 1,
      image: require('../../assets/images/botellas.jpg'),
    },
    {
      id: 2,
      name: 'Proteína de suero de leche WHEY Premium',
      description: 'Suplemento de alta calidad para recuperación muscular.',
      price: 850,
      quantity: 1,
      image: require('../../assets/images/proteina.jpg'),
    },
  ]);
  
  const handleNavigateToStore = () => {
    navigation.navigate('Store');
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const renderSummarySection = () => (
    <View style={styles.summarySection}>
      <View style={styles.shippingInfo}>
        <View style={styles.shippingIconContainer}>
          <Icon name="checkmark-circle" size={24} color="#ff0000" />
        </View>
        <View style={styles.shippingTextContainer}>
          <Text style={styles.shippingTitle}>Una parte de tu primer pedido califica para envío</Text>
          <Text style={styles.shippingText}>
            <Text style={styles.shippingTextBold}>GRATIS</Text> Selecciona esta opción al finalizar tu compra <Text style={styles.shippingTextLink}>Detalles</Text>
          </Text>
        </View>
      </View>
      <View style={isMobile ? styles.subtotalContainerMobile : styles.subtotalContainer}>
        <Text style={styles.subtotalText}>Subtotal ({totalItems} producto{totalItems !== 1 ? 's' : ''}):</Text>
        <Text style={styles.subtotalPrice}>${calculateSubtotal().toLocaleString('es-MX')}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Proceder al pago</Text>
      </TouchableOpacity>
    </View>
  );

  const renderProductsSection = () => (
    <View style={styles.productsSection}>
      <View style={styles.cartHeader}>
        <Text style={styles.cartTitle}>Carrito</Text>
        {!isMobile && <Text style={styles.priceHeader}>Precio</Text>}
      </View>
      <View style={styles.headerSeparator} />
      
      {cartItems.map(item => (
        <View key={item.id} style={styles.cartItem}>
          <View style={styles.itemImageContainer}>
            <Image
              source={item.image}
              style={styles.productImage}
            />
          </View>
          <View style={styles.itemDetails}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.availability}>Disponible</Text>
              {isMobile && <Text style={styles.itemPriceMobile}>${(item.price * item.quantity).toLocaleString('es-MX')}</Text>}
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
            {!isMobile && <Text style={styles.itemPriceDesktop}>${(item.price * item.quantity).toLocaleString('es-MX')}</Text>}
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <TopBar totalItems={totalItems} isMobile={isMobile} headerStyles={headerStyles} onNavigateToStore={handleNavigateToStore} />

      <ScrollView contentContainerStyle={styles.mainContent}>
        {isMobile ? (
          <>
            {renderSummarySection()}
            {renderProductsSection()}
          </>
        ) : (
          <View style={styles.contentWrapper}>
            {renderProductsSection()}
            {renderSummarySection()}
          </View>
        )}
      </ScrollView>
      
      {isMobile && <BottomNavBar totalItems={totalItems} footerStyles={footerStyles} onNavigateToStore={handleNavigateToStore} />}
    </View>
  );
};

export default Carrito;

const headerStyles = StyleSheet.create({
  topBarContainer: {
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  logoContainer: {
    paddingRight: 10,
  },
  logoText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 4,
    marginHorizontal: 15,
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

const footerStyles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerButton: {
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
  contentWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  productsSection: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    flex: 2,
    marginRight: 20,
    marginBottom: 20,
  },
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#333',
  },
  priceHeader: {
    fontSize: 14,
    color: '#666',
  },
  headerSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 20,
  },
  itemImageContainer: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  itemDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemInfo: {
    flex: 1,
    marginRight: 20,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  availability: {
    fontSize: 14,
    color: '#388e3c',
    marginBottom: 10,
  },
  itemPriceDesktop: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    minWidth: 80,
    textAlign: 'right',
  },
  itemPriceMobile: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  itemControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginRight: 10,
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
  },
  actionButtonText: {
    color: '#ff0000',
    fontSize: 14,
    whiteSpace: 'nowrap',
  },
  actionSeparator: {
    color: '#ccc',
    marginHorizontal: 10,
  },
  summarySection: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    flex: 1,
    marginBottom: 20,
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
    color: '#ff0000',
    fontWeight: 'bold',
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
  },
  subtotalContainerMobile: {
    flexDirection: 'column',
    marginBottom: 20,
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
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});