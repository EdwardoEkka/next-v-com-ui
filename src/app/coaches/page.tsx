import Footer from "@/components/common/footer/footer";
import { MainNav } from "@/components/common/nav/main-navbar";
import CoachCategory from "@/components/coaches/CoachCategory";

const Page=()=>{
    return(
        <div>
        <MainNav/>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="container">
                <CoachCategory/>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Page;