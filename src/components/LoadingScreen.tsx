import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsAnimating(false);
            setTimeout(onComplete, 500);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-all duration-500 ${
      !isAnimating ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-accent/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-secondary/20 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-primary/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Main Content */}
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <div className="space-y-4">
          <div className="text-5xl font-bold gradient-text animate-pulse">
            Ana Clara
          </div>
          <div className="text-xl text-muted-foreground">
            Mobile Developer
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-80 mx-auto space-y-4">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="text-sm text-muted-foreground">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>

        {/* Floating Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
          <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
        </div>
      </div>
    </div>
  );
};