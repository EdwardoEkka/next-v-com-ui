import { useEffect, useState } from "react";
import { getProductByCategories } from "@/service";
import { Product } from "@/app/types";
import ProductCard from "../common/product-card";
import { getProductBySubCategories } from "@/service";

const SubCategoryPage=({cat,sub}:{cat:string,sub:string})=>{
    const [products, setProducts]=useState<Product[]>([])
    useEffect(() => {
        const fetchProductsBySubCategory= async () =>{
            const products = await getProductBySubCategories(cat,sub)
            setProducts(products);
        }
        fetchProductsBySubCategory();
    }, [cat]);
    return(
        <div className="bg-gray-600 min-h-[100vh]">
        <div className="container grid lg:grid-cols-3 gap-4 py-6 sm:grid-cols-2 grid-cols-1">
            {
                products.map((item:Product,index:any)=>(
                    <ProductCard product={item}/>
                ))
            }
        </div>
        </div>
    )
}

export default SubCategoryPage;