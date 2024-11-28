"use client";
import { usePathname } from "next/navigation";
import {useRouter} from "next/navigation";
import Categories from "@/data/categories";
import { useEffect, useState } from "react";
import CategoryPage from "@/components/pages/CategoryPage";

const ValidateCategory = (category: string) => {
    const categoryExists = Categories.some(cat => cat.cat === category);
    return categoryExists;
  };
  

const Page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const pathsArray = pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  const [category, setCategory] = useState<string>("");

  useEffect(()=>{
    if(ValidateCategory(pathsArray[0]))
    {
        setCategory(pathsArray[0]);
    }
    else
    {
        router.push('/not-found');
    }
  },[])

  return (
    <div>
        <CategoryPage cat={category}/>
    </div>
  );
};

export default Page;
