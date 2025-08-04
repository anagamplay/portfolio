import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const codeLines = [
    "import { Portfolio } from './components'",
    "const developer = new Ana()",
    "developer.initialize()",
    "developer.loadSkills(['React', 'TypeScript'])",
    "developer.render()"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsAnimating(false);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    if (currentIndex >= codeLines.length) return;
    
    const currentLine = codeLines[currentIndex];
    
    if (currentText.length < currentLine.length) {
      const timer = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1));
      }, 80 + Math.random() * 40);
      
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setCurrentText("");
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [currentText, currentIndex]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-all duration-800 ${
      !isAnimating ? 'opacity-0 pointer-events-none scale-110' : 'opacity-100 scale-100'
    }`}>
      
      {/* Code Terminal */}
      <div className="relative text-center space-y-8 font-mono">
        
        {/* Terminal Window */}
        <div className="w-96 bg-muted/10 border border-muted/20 rounded-lg p-6 text-left">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-muted/20">
            <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
            <span className="ml-2 text-xs text-muted-foreground">portfolio.ts</span>
          </div>
          
          {/* Code Lines */}
          <div className="space-y-2 text-sm">
            {codeLines.slice(0, currentIndex).map((line, i) => (
              <div key={i} className="text-muted-foreground">
                <span className="text-primary/60">{i + 1}</span>
                <span className="ml-3">{line}</span>
              </div>
            ))}
            
            {currentIndex < codeLines.length && (
              <div className="text-foreground">
                <span className="text-primary/60">{currentIndex + 1}</span>
                <span className="ml-3">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-1">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                progress > (i + 1) * 25 ? 'bg-primary' : 'bg-muted/40'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};