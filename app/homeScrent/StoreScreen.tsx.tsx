// screens/StoreScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions, Platform, TouchableOpacity } from 'react-native';
import Header from '@/components/Header';
import ImageCarousel from '@/components/ImageCarousel';
import ProductCard from '@/components/ProductoCart';
import { products } from '@/data/products';
import { Product } from '@/types'; 

const { width } = Dimensions.get('window');
const numColumns = width > 700 ? 4 : 2;



const StoreScreen: React.FC = () => { 
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredProducts: Product[] = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductPress = (product: Product) => {
    console.log('Producto presionado:', product.name);
    
  };

  return (
    <View style={styles.container}>
    
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onMenuPress={() => console.log('Menú Presionado')}
        onCartPress={() => console.log('Carrito Presionado')}
        
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
      
        <ImageCarousel />

       
        <Text style={styles.sectionTitle}>Productos</Text>
        
     
        <FlatList
          data={filteredProducts}
          renderItem={({ item }) => (
            <ProductCard product={item} onPress={handleProductPress} />
          )}
          keyExtractor={(item: Product) => item.id}
          numColumns={numColumns}
          contentContainerStyle={styles.productList}
          columnWrapperStyle={styles.columnWrapper}
          scrollEnabled={false} 
        />
      </ScrollView>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  productList: {
    paddingHorizontal: 8,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },

});

export default StoreScreen;