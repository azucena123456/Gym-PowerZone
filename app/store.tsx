// app/store.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 


import Header from '@/components/Header';
import ImageCarousel from '@/components/ImageCarousel';
import ProductCard from '@/components/ProductoCart'; 
import { products } from '@/data/products';
import { Product } from '@/types'; 

const { width } = Dimensions.get('window');

const numColumns = width > 1200 ? 5 : width > 900 ? 4 : width > 600 ? 3 : width > 400 ? 2 : 2;

const listPaddingHorizontal = 52; 

export default function StoreScreen() {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredProducts: Product[] = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

const handleProductPress = (product: Product) => {
    console.log('Producto presionado:', product.name);
    };

    return (
   <SafeAreaView style={styles.safeAreaContainer} edges={['bottom']}>
     <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onMenuPress={() => console.log('Menú Presionado')}
    />

        <ScrollView contentContainerStyle={styles.scrollContent}>
        <ImageCarousel />


        <FlatList
            data={filteredProducts}
            renderItem={({ item }) => (
            <ProductCard 
                product={item} 
                onPress={handleProductPress} 
                numColumns={numColumns}
                listPaddingHorizontal={listPaddingHorizontal} 
            />
        )}
        keyExtractor={(item: Product) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.productList}
        columnWrapperStyle={styles.columnWrapper}
        scrollEnabled={false} 
        />
    </ScrollView>
    </SafeAreaView> 
    );
};

const styles = StyleSheet.create({
    safeAreaContainer: { 
    flex: 1,
    backgroundColor: '#EDEDED', 
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
    paddingHorizontal: listPaddingHorizontal, 
  },
  columnWrapper: {
    justifyContent: 'space-between', 
  },
});
