import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@/components/Header';
import ImageCarousel from '@/components/ImageCarousel';
import ProductCard from '@/components/ProductoCart';
import { products } from '@/data/products';
import { Product } from '@/types';

const { width } = Dimensions.get('window');

const numColumns = width > 1200 ? 5 : width > 900 ? 4 : width > 600 ? 3 : width > 400 ? 2 : 2;
const listPaddingHorizontal = 52; 
const cardMarginHorizontal = 15; 

export default function StoreScreen() {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredProducts: Product[] = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleProductPress = (product: Product) => {
        console.log('Producto presionado:', product.name);
    };


    const renderRows = () => {
        const rows: React.JSX.Element[] = [];
        let row: Product[] = [];

        filteredProducts.forEach((product, index) => {
            row.push(product);
            
            if (row.length === numColumns || index === filteredProducts.length - 1) {
                
                const isLastRow = index === filteredProducts.length - 1;
                const isPartialRow = row.length < numColumns;

                
                const rowStyle = [
                    styles.productRow,
                    (isLastRow && isPartialRow) && styles.centeredRow 
                ];
                
                rows.push(
                    <View key={`row-${rows.length}`} style={rowStyle}>
                        {row.map(p => (
                            <ProductCard
                                key={p.id}
                                product={p}
                                onPress={handleProductPress}
                                numColumns={numColumns}
                                listPaddingHorizontal={listPaddingHorizontal}
                            />
                        ))}
                    </View>
                );
                row = []; 
            }
        });
        return rows;
    };
  

    return (
        <SafeAreaView style={styles.safeAreaContainer} edges={['bottom']}>
            <Header
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onMenuPress={() => console.log('Menú Presionado')}
            />

            <ScrollView contentContainerStyle={styles.scrollContent}>
              

              

                {searchTerm.length === 0 && <ImageCarousel />}

                {filteredProducts.length === 0 && (
                    <View style={styles.noResultsContainer}>
                        <Text style={styles.noResultsText}>No se encontraron resultados de<Text style = {{ fontWeight: 'bold'}}> {searchTerm}</Text>

                        </Text>
                    </View>
                )}



                <View style={styles.productListContainer}>
                    {renderRows()}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#EDEDED',
    },
    scrollContent: {
        paddingBottom: 20,
    },
    noResultsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        paddingHorizontal: 20,
    },
    noResultsText: {
        fontSize: 20,
        color: '#e91818ff',
        textAlign: 'center',
    },
    productListContainer: {
        paddingHorizontal: listPaddingHorizontal,
    },
    productRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    centeredRow: {
        justifyContent: 'center', 
    },
});