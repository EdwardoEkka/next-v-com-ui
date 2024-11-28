import { GiMuscleUp } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";

export function MobileNav() {
  return (
    <div className="w-full nav-container h-20 flex justify-between px-4">
    <div className="flex w-full h-full items-center justify-between">
    <div className="flex items-center justify-center bg-orange-500 text-white aspect-square rounded-full h-[40px]"><GiMuscleUp/></div>
    <div className="flex items-center justify-center  text-yellow-300 aspect-square rounded-full h-[40px] text-xl"><GiHamburgerMenu/></div>
    </div>
     
    </div>
  );
}


{/* <div className="flex gap-4 w-full h-full items-center">
<ul className="flex gap-4 text-yellow-300 font-bold text-lg lg:text-xl items-center flex-wrap py-2">
  <li>EQUIPMENT</li>
  <li>APPAREL</li>
  <li>FOOTWEAR</li>
  <li>ACCESSORIES</li>
  <li>OUTDOOR</li>
  <li>WELLNESS</li>
</ul>
</div>
<div className="flex flex-1 items-center gap-4">
  <div className="flex items-center justify-center bg-yellow-300 aspect-square h-[40px]"><FaSearch/></div>
  <div className="flex items-center justify-center bg-yellow-300 aspect-square h-[40px]"><IoPerson/></div>
  <div className="flex items-center justify-center bg-yellow-300 aspect-square h-[40px]"><FaShoppingCart/></div>
</div> */}