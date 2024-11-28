export interface Product {
    name: string;
    description: string;
    images: string[];
    price: Price
    stock: Stock
    category: Category
}

interface Price{
    price: number;                
    discountedPrice?: number;
    currency: string; 
}

interface Stock{
    stock: number;               
    stockStatus: "in stock" | "out of stock";
}

interface Category{
    category: string;  
    subCategory?: string;
    tags?: string[];   
}