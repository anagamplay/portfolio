import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [animationsTriggered, setAnimationsTriggered] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setAnimationsTriggered(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <div className={`${animationsTriggered ? 'animate-stagger-1' : 'opacity-0'}`}>
        <Navigation />
      </div>
      <main>
        <div className={`${animationsTriggered ? 'animate-page-enter' : 'opacity-0'}`}>
          <Hero />
        </div>
        <div className={`${animationsTriggered ? 'animate-stagger-2' : 'opacity-0'}`}>
          <About />
        </div>
        <div className={`${animationsTriggered ? 'animate-stagger-3' : 'opacity-0'}`}>
          <Projects />
        </div>
        <div className={`${animationsTriggered ? 'animate-stagger-4' : 'opacity-0'}`}>
          <Skills />
        </div>
        <div className={`${animationsTriggered ? 'animate-stagger-5' : 'opacity-0'}`}>
          <Contact />
        </div>
      </main>
      <div className={`${animationsTriggered ? 'animate-stagger-5' : 'opacity-0'}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
