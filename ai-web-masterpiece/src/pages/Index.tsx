import { useState } from "react";
import HomeHero from "@/components/HomeHero";
import {
  HomeSelectedWork,
  HomeExperience,
  HomeEngineering,
  HomeOpenSource,
  HomeAbout,
  HomeWriting,
  HomeContact,
  HomeArchitectureDevOps,
} from "@/components/HomePortfolioSections";
import Preloader from "@/components/Preloader";
import "@/styles/portfolio-home.css";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div
        className={`portfolio-home min-h-screen bg-background transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <main>
          <HomeHero />
          <HomeSelectedWork />
          <HomeExperience />
          <HomeArchitectureDevOps />
          <HomeEngineering />
          <HomeOpenSource />
          <HomeAbout />
          <HomeWriting />
        </main>
        <HomeContact />
      </div>
    </>
  );
};

export default Index;
