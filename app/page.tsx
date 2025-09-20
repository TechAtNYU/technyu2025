'use client';
import ProgramSection from "@/components/programs/program_section";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Values from "@/components/sections/values";

export default function Home() {
  return (
    <div>
      <div className="w-full h-fit bg-black min-h-screen">
        <Hero />
        <Values />
        <ProgramSection />
      </div>
      <Footer />
    </div>
  );
}
