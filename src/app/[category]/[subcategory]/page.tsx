"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Categories from "@/data/categories";
import { useEffect, useState } from "react";
import SubCategoryPage from "@/components/pages/SubCategoryPage";

const ValidateCategory_SubCategory = (category: string, subcategory: string): boolean => {
    const categoryObj = Categories.find(cat => cat.cat === category);
    if (categoryObj) {
      return categoryObj.sub.includes(subcategory);
    }
    return false;
  };

const Page = () => {
    const pathname = usePathname();
    const router = useRouter();
    const pathsArray = pathname.replace(/^\/+/, "").split("/").filter(Boolean);
    const [cat, setCat] = useState<Record<string, string>>({});

    useEffect(()=>{
       if(ValidateCategory_SubCategory(pathsArray[0],pathsArray[1])){
        setCat({cat:pathsArray[0], sub:pathsArray[1]})
       } 
       else
       {
         router.push('/not-found');
       }
    },[cat])

  return (
    <div>
        <SubCategoryPage cat={cat.cat} sub={cat.sub}/>
    </div>
  );
};

export default Page;
