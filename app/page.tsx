'use client';
import ProgramSection from "@/components/sections/programs/program_section";
import Hero from "@/components/sections/hero";
import Values from "@/components/sections/values";

export default function Home() {
  return (
    <div className="w-full h-fit bg-black min-h-screen">
      <Hero />
      <Values />
      <ProgramSection />
    </div>
  );
}
