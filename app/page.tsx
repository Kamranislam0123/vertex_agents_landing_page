import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ArchitectureFlow from "./components/ArchitectureFlow";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import CodeShowcase from "./components/CodeShowcase";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-20">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ArchitectureFlow />
      <HowItWorks />
      <CodeShowcase />
      <TechStack />
    </main>
  );
}
