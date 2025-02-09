import CoachCategories from "@/data/coaches";
import CategoryCard from "./CategoryCard";

const CoachCategory=()=>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6">
            {
                CoachCategories.map((coach,index)=>(
                    <CategoryCard cat={coach.cat} color={coach.bg} key={index}/> 
                ))
            }
        </div>
    )
}

export default CoachCategory;