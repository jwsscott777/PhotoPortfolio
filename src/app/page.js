import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectSection"
import EmailSection from "./components/EmailSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen sm:w-full sm:h-screen sm:-0 flex-col bg-[#121212]">
      <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <EmailSection />
    <Footer />
    </div>
    </main>
  )
}
