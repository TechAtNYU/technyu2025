import ProgramCard from "@/components/programs/programcard";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen bg-black">
        <ProgramCard />
      </div>
      <Footer />
    </div>
  );
}
