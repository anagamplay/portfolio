import { useState } from "react";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: "📱",
    skills: [
      "React Native",
      "Flutter", 
      "Swift/iOS",
      "Kotlin/Android"
    ]
  },
  {
    title: "Frontend & Backend",
    icon: "⚡",
    skills: [
      "React.js",
      "TypeScript",
      "Node.js",
      "GraphQL"
    ]
  },
  {
    title: "Design & UX",
    icon: "🎨",
    skills: [
      "Figma",
      "UI/UX Design",
      "Prototyping",
      "Design Systems"
    ]
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    skills: [
      "AWS",
      "Firebase",
      "CI/CD",
      "Testing"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center p-4 bg-card rounded-lg border hover:shadow-md transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-semibold text-lg text-center">{skill}</span>
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