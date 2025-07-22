
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: any;
    rating: number;
    reviews: number;
}

export interface CarouselImage {
    id: string;
    uri: any;
}

export interface HeaderProps {
    onMenuPress: () => void;
    onSearchChange: (text: string) => void;
    searchTerm: string;
}

export interface ProductCardProps {
    product: Product;
    onPress: (product: Product) => void;
    numColumns: number; 
    listPaddingHorizontal: number; 
}
