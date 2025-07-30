import { useState } from "react";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: "📱",
    skills: [
      { name: "React Native", level: 95 },
      { name: "Flutter", level: 88 },
      { name: "Swift/iOS", level: 82 },
      { name: "Kotlin/Android", level: 85 }
    ]
  },
  {
    title: "Frontend & Backend",
    icon: "⚡",
    skills: [
      { name: "React.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "GraphQL", level: 80 }
    ]
  },
  {
    title: "Design & UX",
    icon: "🎨",
    skills: [
      { name: "Figma", level: 88 },
      { name: "UI/UX Design", level: 85 },
      { name: "Prototyping", level: 82 },
      { name: "Design Systems", level: 90 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    skills: [
      { name: "AWS", level: 78 },
      { name: "Firebase", level: 92 },
      { name: "CI/CD", level: 85 },
      { name: "Testing", level: 88 }
    ]
  }
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Minhas <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções móveis excepcionais
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === index 
                  ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                  : "glass hover:bg-white/10"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span className="font-medium">{category.title}</span>
            </button>
          ))}
        </div>
        
        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <div className="elegant-card p-8">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-3xl">{skillCategories[activeCategory].icon}</span>
              {skillCategories[activeCategory].title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={index}
                  className="space-y-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Skill Name and Percentage */}
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">{skill.name}</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: activeCategory === skillCategories.findIndex(cat => cat.skills.includes(skill)) ? `${skill.level}%` : '0%'
                      }}
                    />
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🏆</div>
            <h4 className="text-xl font-bold mb-2">Certificações</h4>
            <p className="text-muted-foreground">AWS Solutions Architect, Google Mobile Web Specialist</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">💡</div>
            <h4 className="text-xl font-bold mb-2">Metodologias</h4>
            <p className="text-muted-foreground">Agile, Scrum, TDD, Clean Architecture</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🌟</div>
            <h4 className="text-xl font-bold mb-2">Especialidades</h4>
            <p className="text-muted-foreground">Performance Optimization, Code Review, Team Leadership</p>
          </div>
        </div>
      </div>
    </section>
  );
};