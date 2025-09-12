import ProgramCard from "@/components/programs/pcard/programcard";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full h-fit bg-black">
        <div className="min-h-[400vh]">
        <ProgramCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}
