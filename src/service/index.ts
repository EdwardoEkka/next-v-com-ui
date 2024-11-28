import { database } from "../../firebase";
import { ref, get } from "firebase/database";  // Import get
import { Product } from "@/app/types";

const productRef = ref(database, "products");

const getAllProducts = async () => {
    try {
      const snapshot = await get(productRef); 
      const data = snapshot.val();
      const productList = data ? Object.values(data) : [];
      return productList as Product[]; 
    } catch (error) {
      return []; 
    }
};

const getProductByCategories = async (category:string) => {
  try {
    const snapshot = await get(productRef);
    const data = snapshot.val();
    
    if (!data) {
      return [];
    }

    const productList = Object.values(data) as Product[];
    
    const filteredProducts = productList.filter((product: Product) => product.category?.category === category);

    return filteredProducts as Product[];
  } catch (error) {
    return []; 
  }
};


const getProductBySubCategories = async (category:string, subcategory:string) => {
  try {
    const snapshot = await get(productRef);
    const data = snapshot.val();
    
    if (!data) {
      return [];
    }

    const productList = Object.values(data) as Product[];
    const filteredProducts = productList.filter((product: Product) => product.category?.category === category);
    const subfilteredProducts=filteredProducts.filter((product: Product)=> product.category?.subCategory === subcategory)
    return subfilteredProducts as Product[];
  } catch (error) {
    return []; 
  }
};





export { getAllProducts, getProductByCategories, getProductBySubCategories };
