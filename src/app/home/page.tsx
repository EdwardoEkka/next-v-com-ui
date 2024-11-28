"use client"
import { useEffect, useState } from "react";
import { getAllProducts, getProductByCategories } from "@/service";
import { Product } from "../types";

export default function HomePage() {
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [allProductsByCategory, setAllProductsByCategory] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getAllProducts();
            setAllProducts(products);
        };
        const fetchProductsByCategory= async () =>{
            const products = await getProductByCategories("equipment")
            setAllProductsByCategory(products);
        }
        fetchProducts();
        fetchProductsByCategory();
    }, []);

    return (
        <div className="text-base container">           
        </div>
    );
}
