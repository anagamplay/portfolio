import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "App de Delivery Premium",
    description: "Aplicativo completo de delivery com interface elegante, sistema de pagamento integrado e rastreamento em tempo real.",
    tech: ["React Native", "TypeScript", "Firebase"],
    image: "🚀",
    category: "Mobile App"
  },
  {
    title: "Fintech Mobile",
    description: "Solução bancária móvel com foco em UX/UI excepcional, biometria e transações seguras.",
    tech: ["Flutter", "Node.js", "PostgreSQL"],
    image: "💳",
    category: "Fintech"
  },
  {
    title: "E-commerce Social",
    description: "Plataforma social de compras com recursos de live shopping e integração com redes sociais.",
    tech: ["React Native", "GraphQL", "AWS"],
    image: "🛍️",
    category: "Social Commerce"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Projetos</span> Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais impactantes, onde tecnologia e design se encontram para criar experiências excepcionais
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="elegant-card p-6 group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>
              
              {/* Category */}
              <div className="text-sm text-primary font-semibold mb-2">
                {project.category}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Actions */}
              <div className="flex gap-3">
                <Button variant="hero" size="sm" className="flex-1">
                  Ver Projeto
                </Button>
                <Button variant="ghost" size="sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todos os Projetos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};