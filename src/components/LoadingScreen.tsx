import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [scanPosition, setScanPosition] = useState(0);

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

  useEffect(() => {
    const scanTimer = setInterval(() => {
      setScanPosition(prev => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(scanTimer);
  }, []);

  return (
    <div className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-all duration-800 ${
      !isAnimating ? 'opacity-0 pointer-events-none scale-110' : 'opacity-100 scale-100'
    }`}>
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Scanning Line */}
      <div 
        className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
        style={{ 
          top: `${scanPosition}%`,
          transition: 'top 0.05s linear'
        }}
      />

      {/* Floating Binary Code */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs text-primary/30 font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      {/* Main Loading Container */}
      <div className="relative text-center space-y-12">
        
        {/* Concentric Loading Circles */}
        <div className="relative w-48 h-48 mx-auto">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-2" />
          </div>
          
          {/* Middle Ring */}
          <div className="absolute inset-4 border-2 border-accent/30 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 -translate-y-1.5" />
          </div>
          
          {/* Inner Ring */}
          <div className="absolute inset-8 border-2 border-secondary/40 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}>
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-secondary rounded-full transform -translate-x-1/2 -translate-y-1" />
          </div>

          {/* Central Core */}
          <div className="absolute inset-16 bg-gradient-to-br from-primary/50 to-accent/50 rounded-full animate-pulse">
            <div className="w-full h-full rounded-full border border-primary/60 flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full animate-ping" />
            </div>
          </div>
        </div>

        {/* Hexagonal Progress Indicator */}
        <div className="space-y-6">
          <div className="flex justify-center space-x-2">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className={`w-3 h-3 transform rotate-45 transition-all duration-300 ${
                  progress > (i + 1) * 16.67 ? 'bg-primary scale-110' : 'bg-muted'
                }`}
                style={{ 
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>

          {/* Progress Bar with Tech Style */}
          <div className="w-96 mx-auto space-y-3">
            <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden border border-primary/20">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            </div>
            
            {/* Tech-style Progress Text */}
            <div className="flex justify-between text-xs font-mono text-muted-foreground">
              <span>LOADING...</span>
              <span>{Math.round(Math.min(progress, 100))}%</span>
            </div>
          </div>
        </div>

        {/* Particle Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-bounce"
              style={{
                left: `${20 + i * 10}%`,
                bottom: '20%',
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>

        {/* Status Text */}
        <div className="text-center space-y-2">
          <div className="text-sm font-mono text-primary animate-pulse">
            INITIALIZING PORTFOLIO SYSTEM
          </div>
          <div className="text-xs text-muted-foreground font-mono">
            {progress < 30 && "LOADING ASSETS..."}
            {progress >= 30 && progress < 60 && "COMPILING COMPONENTS..."}
            {progress >= 60 && progress < 90 && "ESTABLISHING CONNECTION..."}
            {progress >= 90 && "SYSTEM READY"}
          </div>
        </div>
      </div>
    </div>
  );
};