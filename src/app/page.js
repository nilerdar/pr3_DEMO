import Image from "next/image";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4"> 
        <h1 className="hidden md:block text-4xl font-bold text-white">Comunidades de alumnos</h1>
        <ProjectsSection />
      </div>
    </main>
  );
}
