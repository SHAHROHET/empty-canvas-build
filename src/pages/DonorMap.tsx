
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import DonorMapComponent from "@/components/dashboard/DonorMap";

const DonorMap = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Find Blood Donors</h1>
        <DonorMapComponent />
      </main>
      
      <BottomNav />
    </div>
  );
};

export default DonorMap;
