import { Button } from "@/components/ui/button";
import { PhoneFrame, AppScreen } from "@/components/PhoneFrame";

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
        
        {/* iPhone Mockups Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Experiências</span> em Ação
            </h3>
            <p className="text-muted-foreground">
              Veja como os apps ganham vida nas telas dos usuários
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-center">
            {/* Delivery App */}
            <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <PhoneFrame>
                <AppScreen
                  title="FoodExpress"
                  description="Delivery rápido e seguro"
                  backgroundColor="bg-gradient-to-br from-orange-50 to-red-100"
                  primaryColor="bg-orange-500"
                >
                  <div className="space-y-4">
                    <div className="bg-white/80 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                          🍕
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Pizza Margherita</div>
                          <div className="text-sm text-gray-600">Tradicional italiana</div>
                        </div>
                        <div className="ml-auto text-orange-600 font-bold">R$ 28,90</div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-orange-500 text-white rounded-lg py-2 text-center text-sm font-semibold">
                          Adicionar
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/80 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                          🍔
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Burger Gourmet</div>
                          <div className="text-sm text-gray-600">Com bacon e queijo</div>
                        </div>
                        <div className="ml-auto text-orange-600 font-bold">R$ 32,90</div>
                      </div>
                    </div>
                  </div>
                </AppScreen>
              </PhoneFrame>
            </div>
            
            {/* Fintech App */}
            <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <PhoneFrame>
                <AppScreen
                  title="MoneyFlow"
                  description="Seu banco digital"
                  backgroundColor="bg-gradient-to-br from-blue-50 to-indigo-100"
                  primaryColor="bg-blue-600"
                >
                  <div className="space-y-4">
                    <div className="bg-white/80 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">Saldo disponível</div>
                      <div className="text-2xl font-bold text-gray-800 mb-3">R$ 4.847,32</div>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-blue-600 text-white rounded-lg py-2 text-center text-sm">
                          Transferir
                        </div>
                        <div className="flex-1 border border-blue-600 text-blue-600 rounded-lg py-2 text-center text-sm">
                          Pagar
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/80 rounded-xl p-4">
                      <div className="text-sm font-semibold text-gray-800 mb-3">Últimas movimentações</div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-600">Transferência recebida</div>
                          <div className="text-sm font-semibold text-green-600">+R$ 1.200,00</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-600">Compra no cartão</div>
                          <div className="text-sm font-semibold text-red-600">-R$ 89,90</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AppScreen>
              </PhoneFrame>
            </div>
            
            {/* E-commerce App */}
            <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <PhoneFrame>
                <AppScreen
                  title="SocialShop"
                  description="Compre e compartilhe"
                  backgroundColor="bg-gradient-to-br from-purple-50 to-pink-100"
                  primaryColor="bg-purple-600"
                >
                  <div className="space-y-4">
                    <div className="bg-white/80 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full" />
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800 text-sm">@fashionista_ana</div>
                          <div className="text-xs text-gray-600">está ao vivo</div>
                        </div>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      </div>
                      <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg h-20 mb-3 flex items-center justify-center">
                        <div className="text-purple-800 text-sm font-semibold">Live Shopping</div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-purple-600 text-white rounded-lg py-2 text-center text-xs">
                          Participar
                        </div>
                        <div className="w-8 h-8 border border-purple-600 rounded-lg flex items-center justify-center">
                          ❤️
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/80 rounded-xl p-3">
                      <div className="text-xs font-semibold text-gray-800 mb-2">Produtos em destaque</div>
                      <div className="flex gap-2">
                        <div className="w-16 h-16 bg-purple-100 rounded-lg" />
                        <div className="w-16 h-16 bg-pink-100 rounded-lg" />
                        <div className="w-16 h-16 bg-purple-100 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </AppScreen>
              </PhoneFrame>
            </div>
          </div>
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