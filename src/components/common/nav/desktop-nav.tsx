import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";

export function DesktopNav() {
  return (
    <div className="w-full nav-container h-24 flex justify-between px-4">
      <div className="flex gap-4 w-full h-full items-center">
      <div className="flex items-center justify-center bg-orange-500 text-white aspect-square rounded-full h-[40px]"><GiMuscleUp/></div>
      <ul className="flex gap-4 lg:gap-8 text-yellow-300 font-bold text-lg lg:text-xl items-center flex-wrap py-2">
        <li>COACHES</li>
        <li>PRICING</li>
        <li>STORE</li>
        <li>ABOUT US</li>
        <li>BLOG</li>
      </ul>
      </div>
      <div className="flex flex-1 items-center gap-4">
        <div className="flex items-center justify-center bg-yellow-300 aspect-square h-[40px]"><FaSearch/></div>
        <div className="flex items-center justify-center bg-yellow-300 aspect-square h-[40px]"><IoPerson/></div>
        <div className="flex items-center justify-center bg-yellow-300 aspect-square h-[40px]"><FaShoppingCart/></div>
      </div>
    </div>
  );
}
