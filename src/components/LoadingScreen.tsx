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
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-all duration-800 ${
      !isAnimating ? 'opacity-0 pointer-events-none scale-110' : 'opacity-100 scale-100'
    }`}>
      
      {/* Main Loading Container */}
      <div className="relative text-center space-y-8">
        
        {/* Simple Loading Spinner */}
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 border-2 border-muted rounded-full"></div>
          <div className="absolute inset-0 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto space-y-2">
          <div className="relative h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-primary rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          
          {/* Progress Text */}
          <div className="text-xs text-muted-foreground">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>

        {/* Simple Status Text */}
        <div className="text-sm text-muted-foreground">
          Carregando...
        </div>
      </div>
    </div>
  );
};