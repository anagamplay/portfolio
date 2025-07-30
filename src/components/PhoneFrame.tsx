import { ReactNode, useState } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
  animated?: boolean;
}

export const PhoneFrame = ({ children, className = "", animated = true }: PhoneFrameProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative mx-auto ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* iPhone Frame */}
      <div className={`
        relative w-64 h-[520px] 
        bg-gradient-to-b from-gray-800 to-gray-900 
        rounded-[2.5rem] p-2 shadow-2xl
        ${animated ? 'transition-all duration-500' : ''}
        ${isHovered && animated ? 'transform scale-105 rotate-1' : ''}
      `}>
        {/* Screen Bezel */}
        <div className="relative w-full h-full bg-black rounded-[2rem] p-3">
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
          
          {/* Screen Content Area */}
          <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-black/5 flex items-center justify-between px-6 z-10">
              <div className="text-sm font-semibold">9:41</div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-black/30 rounded-sm">
                  <div className="w-3 h-1 bg-green-500 rounded-sm m-[1px]" />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="pt-12 w-full h-full">
              {children}
            </div>
          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
        </div>
        
        {/* Side Buttons */}
        <div className="absolute left-0 top-20 w-1 h-8 bg-gray-700 rounded-r-sm" />
        <div className="absolute left-0 top-32 w-1 h-12 bg-gray-700 rounded-r-sm" />
        <div className="absolute left-0 top-48 w-1 h-12 bg-gray-700 rounded-r-sm" />
        <div className="absolute right-0 top-28 w-1 h-16 bg-gray-700 rounded-l-sm" />
      </div>
      
      {/* Reflection Effect */}
      {animated && (
        <div className={`
          absolute inset-0 bg-gradient-to-br from-white/10 to-transparent 
          rounded-[2.5rem] pointer-events-none
          transition-opacity duration-500
          ${isHovered ? 'opacity-30' : 'opacity-10'}
        `} />
      )}
    </div>
  );
};

// Componente para screenshots de apps
interface AppScreenProps {
  title: string;
  description: string;
  backgroundColor?: string;
  primaryColor?: string;
  children?: ReactNode;
}

export const AppScreen = ({ 
  title, 
  description, 
  backgroundColor = "bg-gradient-to-br from-blue-50 to-indigo-100",
  primaryColor = "bg-blue-600",
  children 
}: AppScreenProps) => {
  return (
    <div className={`w-full h-full ${backgroundColor} flex flex-col`}>
      {/* App Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 ${primaryColor} rounded-lg flex items-center justify-center`}>
            <div className="w-4 h-4 bg-white rounded-sm" />
          </div>
          <div>
            <div className="font-semibold text-sm">{title}</div>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="w-6 h-6 rounded-full bg-white/50 flex items-center justify-center">
            <div className="w-3 h-3 border border-gray-400 rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 p-4">
        {children || (
          <div className="space-y-4">
            <div className="text-lg font-bold text-gray-800">{title}</div>
            <div className="text-gray-600 text-sm">{description}</div>
            
            {/* Mock Content */}
            <div className="space-y-3 mt-6">
              <div className="h-16 bg-white/70 rounded-lg flex items-center px-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
                <div className="flex-1">
                  <div className="h-3 bg-gray-300 rounded w-3/4 mb-2" />
                  <div className="h-2 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
              
              <div className="h-16 bg-white/70 rounded-lg flex items-center px-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
                <div className="flex-1">
                  <div className="h-3 bg-gray-300 rounded w-2/3 mb-2" />
                  <div className="h-2 bg-gray-200 rounded w-3/4" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Bottom Navigation */}
      <div className="p-4 bg-white/50">
        <div className="flex justify-around">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`w-8 h-8 rounded-lg ${i === 1 ? primaryColor : 'bg-gray-300'} flex items-center justify-center`}>
              <div className="w-4 h-4 bg-white rounded-sm opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};