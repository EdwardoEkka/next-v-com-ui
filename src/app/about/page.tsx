import Footer from "@/components/common/footer/footer";
import { MainNav } from "@/components/common/nav/main-navbar";

const Page = () => {
  return (
    <div>
      <MainNav />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
