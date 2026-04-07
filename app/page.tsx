import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ArchitectureFlow from "./components/ArchitectureFlow";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import CodeShowcase from "./components/CodeShowcase";
import ResourcesSection from "./components/ResourcesSection";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-20">
      <LoadingScreen />
      <Header />
      <HeroSection />
      <ProblemSection />
      <ArchitectureFlow />
      <HowItWorks />
      <CodeShowcase />
      <ResourcesSection />
      <TechStack />
      <Footer />
    </main>
  );
}
