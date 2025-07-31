import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneFrame, AppScreen } from "@/components/PhoneFrame";

const allProjects = [
  {
    id: "delivery-premium",
    title: "App de Delivery Premium",
    description: "Aplicativo completo de delivery com interface elegante, sistema de pagamento integrado e rastreamento em tempo real.",
    category: "Mobile App",
    year: "2024",
    technologies: ["React Native", "TypeScript", "Firebase", "Stripe"],
    metrics: {
      downloads: "50K+",
      rating: "4.8/5"
    },
    colors: {
      primary: "bg-orange-500",
      gradient: "from-orange-50 to-red-100"
    }
  },
  {
    id: "fintech-mobile",
    title: "Fintech Mobile",
    description: "Solução bancária móvel com foco em UX/UI excepcional, biometria e transações seguras.",
    category: "Fintech",
    year: "2024",
    technologies: ["Flutter", "Node.js", "PostgreSQL", "JWT"],
    metrics: {
      downloads: "100K+",
      rating: "4.9/5"
    },
    colors: {
      primary: "bg-blue-600",
      gradient: "from-blue-50 to-indigo-100"
    }
  },
  {
    id: "ecommerce-social",
    title: "E-commerce Social",
    description: "Plataforma social de compras com recursos de live shopping e integração com redes sociais.",
    category: "Social Commerce",
    year: "2024",
    technologies: ["React Native", "GraphQL", "AWS", "WebRTC"],
    metrics: {
      downloads: "75K+",
      rating: "4.7/5"
    },
    colors: {
      primary: "bg-purple-600",
      gradient: "from-purple-50 to-pink-100"
    }
  },
  {
    id: "health-tracker",
    title: "Health Tracker Pro",
    description: "App de acompanhamento de saúde com integração IoT, monitoramento contínuo e dashboard médico.",
    category: "HealthTech",
    year: "2023",
    technologies: ["React Native", "IoT", "Python", "TensorFlow"],
    metrics: {
      downloads: "25K+",
      rating: "4.6/5"
    },
    colors: {
      primary: "bg-green-600",
      gradient: "from-green-50 to-emerald-100"
    }
  },
  {
    id: "learning-platform",
    title: "EduConnect",
    description: "Plataforma de educação online com gamificação, vídeo interativo e sistema de mentoria.",
    category: "EdTech",
    year: "2023",
    technologies: ["React Native", "WebRTC", "Socket.io", "MongoDB"],
    metrics: {
      downloads: "40K+",
      rating: "4.5/5"
    },
    colors: {
      primary: "bg-indigo-600",
      gradient: "from-indigo-50 to-purple-100"
    }
  },
  {
    id: "travel-companion",
    title: "Travel Companion",
    description: "App de viagem com planejamento inteligente, recomendações personalizadas e guias offline.",
    category: "Travel",
    year: "2023",
    technologies: ["Flutter", "Google Maps", "ML Kit", "Firebase"],
    metrics: {
      downloads: "30K+",
      rating: "4.4/5"
    },
    colors: {
      primary: "bg-teal-600",
      gradient: "from-teal-50 to-cyan-100"
    }
  }
];

export default function AllProjects() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar
            </Button>
          </Link>
          <div className="text-sm text-muted-foreground">
            Ana Clara Silvestre - Mobile Developer
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">
              Todos os <span className="gradient-text">Projetos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore meu portfólio completo de aplicativos móveis desenvolvidos com tecnologias de ponta
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="outline" className="px-4 py-2">
                {allProjects.length} projetos concluídos
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                +{allProjects.reduce((sum, project) => sum + parseInt(project.metrics.downloads.replace(/[^\d]/g, '')), 0)}K downloads
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Média 4.7⭐ de avaliação
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  
                  {/* Phone Mockup */}
                  <div className="flex justify-center mb-6">
                    <PhoneFrame className="scale-50 -my-8" animated={false}>
                      <AppScreen
                        title={project.title.split(' ')[0]}
                        description={project.description.slice(0, 50) + "..."}
                        backgroundColor={`bg-gradient-to-br ${project.colors.gradient}`}
                        primaryColor={project.colors.primary}
                      />
                    </PhoneFrame>
                  </div>

                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="flex justify-between items-center mb-6 text-sm">
                    <div>
                      <div className="font-semibold text-primary">{project.metrics.downloads}</div>
                      <div className="text-muted-foreground">Downloads</div>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{project.metrics.rating}</div>
                      <div className="text-muted-foreground">Rating</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link to={`/project/${project.id}`}>
                      Ver Detalhes
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Gostou do que viu?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Vamos conversar sobre como posso ajudar no seu próximo projeto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/#contact">Entrar em Contato</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/">Voltar ao Início</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}