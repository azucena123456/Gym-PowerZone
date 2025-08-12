import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@/components/Header';
import ImageCarousel from '@/components/ImageCarousel';
import ProductCard from '@/components/ProductoCart';
import { products } from '@/data/products';

// La lógica para definir el número de columnas ahora estará dentro del componente
const listPaddingHorizontal = 52; 

export default function StoreScreen() {
    const [searchTerm, setSearchTerm] = useState('');
    const [numColumns, setNumColumns] = useState(2); // Valor inicial
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

    // useEffect para manejar los cambios de orientación de la pantalla
    useEffect(() => {
        const updateLayout = () => {
            const newWidth = Dimensions.get('window').width;
            setWindowWidth(newWidth);

            // Ajustar numColumns basado en el nuevo ancho
            const newNumColumns = newWidth > 1200 ? 5 : newWidth > 900 ? 4 : newWidth > 600 ? 3 : newWidth > 400 ? 2 : 2;
            setNumColumns(newNumColumns);
        };

        const subscription = Dimensions.addEventListener('change', updateLayout);

        // Llamar una vez al inicio para establecer el valor inicial
        updateLayout();

        return () => subscription.remove(); // Limpiar el evento al desmontar el componente
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleProductPress = (product) => {
        console.log('Producto presionado:', product.name);
    };

    const renderRows = () => {
        const rows = [];
        let row = [];

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
                
                {filteredProducts.length === 0 ? (
                    <View style={styles.noResultsContainer}>
                        <Text style={styles.noResultsText}>
                            No se encontraron resultados de
                            <Text style={{ fontWeight: 'bold' }}> {searchTerm}</Text>
                        </Text>
                    </View>
                ) : (
                    <View style={styles.productListContainer}>
                        {renderRows()}
                    </View>
                )}
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
        marginTop: 15,
    },
    productRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    centeredRow: {
        justifyContent: 'center', 
    },
});