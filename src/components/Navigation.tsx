import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass border-b border-white/10" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            ACS
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-foreground/80 hover:text-foreground transition-colors">
              Início
            </a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">
              Projetos
            </a>
            <a href="#skills" className="text-foreground/80 hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
          
          {/* CTA Button */}
          <Button variant="hero" className="hidden md:inline-flex">
            Entre em contato
          </Button>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};