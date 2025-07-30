import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PhoneFrame, AppScreen } from "@/components/PhoneFrame";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Dados dos projetos expandidos
const projectsData = {
  "delivery-premium": {
    title: "App de Delivery Premium",
    subtitle: "Transformando a experiência de delivery com tecnologia de ponta",
    description: "Aplicativo completo de delivery com interface elegante, sistema de pagamento integrado e rastreamento em tempo real. Desenvolvido com foco na experiência do usuário e performance.",
    longDescription: "Este projeto revolucionou a forma como os usuários interagem com serviços de delivery. Através de uma interface intuitiva e elegante, conseguimos reduzir o tempo de pedido em 40% e aumentar a satisfação do cliente em 85%. O app conta com funcionalidades avançadas como rastreamento em tempo real, sistema de pagamento integrado e chat com entregadores.",
    category: "Mobile App",
    client: "FoodExpress Inc.",
    duration: "4 meses",
    team: "6 desenvolvedores",
    year: "2024",
    technologies: ["React Native", "TypeScript", "Firebase", "Stripe", "Google Maps API", "Socket.io"],
    features: [
      "Autenticação biométrica",
      "Pagamento integrado com PIX e cartão",
      "Rastreamento em tempo real",
      "Chat com entregadores",
      "Sistema de avaliações",
      "Notificações push personalizadas"
    ],
    metrics: {
      downloads: "50K+",
      rating: "4.8/5",
      retention: "78%",
      conversion: "65%"
    },
    colors: {
      primary: "bg-orange-500",
      secondary: "bg-orange-100",
      gradient: "from-orange-50 to-red-100"
    }
  },
  "fintech-mobile": {
    title: "Fintech Mobile",
    subtitle: "Revolucionando o sistema bancário digital",
    description: "Solução bancária móvel com foco em UX/UI excepcional, biometria e transações seguras.",
    longDescription: "Uma solução fintech completa que combina segurança bancária tradicional com a agilidade de um app moderno. Implementamos protocolos de segurança avançados, autenticação biométrica e uma interface que simplifica operações complexas.",
    category: "Fintech",
    client: "MoneyFlow Bank",
    duration: "6 meses",
    team: "8 desenvolvedores",
    year: "2024",
    technologies: ["Flutter", "Node.js", "PostgreSQL", "JWT", "Biometrics API", "OpenBanking"],
    features: [
      "Open Banking integração",
      "Biometria facial e digital",
      "Transferências instantâneas",
      "Cartão virtual",
      "Investimentos automatizados",
      "Relatórios financeiros IA"
    ],
    metrics: {
      downloads: "100K+",
      rating: "4.9/5",
      retention: "85%",
      conversion: "72%"
    },
    colors: {
      primary: "bg-blue-600",
      secondary: "bg-blue-100",
      gradient: "from-blue-50 to-indigo-100"
    }
  },
  "ecommerce-social": {
    title: "E-commerce Social",
    subtitle: "Onde comprar se torna uma experiência social",
    description: "Plataforma social de compras com recursos de live shopping e integração com redes sociais.",
    longDescription: "Criamos uma nova categoria de e-commerce que combina compras online com interação social. O app permite que influenciadores façam vendas ao vivo, usuarios compartilhem produtos e criem listas colaborativas de desejos.",
    category: "Social Commerce",
    client: "SocialShop Ltd.",
    duration: "5 meses",
    team: "10 desenvolvedores",
    year: "2024",
    technologies: ["React Native", "GraphQL", "AWS", "WebRTC", "Redis", "Machine Learning"],
    features: [
      "Live shopping integrado",
      "Compartilhamento social",
      "Recomendações por IA",
      "Pagamento social (split)",
      "Programa de afiliados",
      "Analytics avançado"
    ],
    metrics: {
      downloads: "75K+",
      rating: "4.7/5",
      retention: "70%",
      conversion: "58%"
    },
    colors: {
      primary: "bg-purple-600",
      secondary: "bg-purple-100",
      gradient: "from-purple-50 to-pink-100"
    }
  }
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
          <Link to="/">
            <Button>Voltar ao início</Button>
          </Link>
        </div>
      </div>
    );
  }

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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <Badge variant="secondary" className="mb-4">
                  {project.category}
                </Badge>
                <h1 className="text-5xl font-bold mb-4">
                  <span className="gradient-text">{project.title}</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {project.subtitle}
                </p>
                <p className="text-lg leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground">Cliente</div>
                  <div className="font-semibold">{project.client}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Duração</div>
                  <div className="font-semibold">{project.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Equipe</div>
                  <div className="font-semibold">{project.team}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Ano</div>
                  <div className="font-semibold">{project.year}</div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">{project.metrics.downloads}</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">{project.metrics.rating}</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">{project.metrics.retention}</div>
                  <div className="text-sm text-muted-foreground">Retenção</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">{project.metrics.conversion}</div>
                  <div className="text-sm text-muted-foreground">Conversão</div>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center animate-fade-in-right">
              <PhoneFrame className="scale-110">
                <AppScreen
                  title={project.title.split(' ')[0]}
                  description={project.subtitle}
                  backgroundColor={`bg-gradient-to-br ${project.colors.gradient}`}
                  primaryColor={project.colors.primary}
                />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Tecnologias</span> Utilizadas
            </h2>
            <p className="text-muted-foreground">
              Stack tecnológico cuidadosamente selecionado para máxima performance
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features List */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="gradient-text">Funcionalidades</span> Principais
              </h2>
              <div className="grid gap-4">
                {project.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className={`w-3 h-3 ${project.colors.primary} rounded-full`} />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Phone Mockups */}
            <div className="grid grid-cols-2 gap-8 justify-items-center">
              <PhoneFrame className="scale-75" animated={false}>
                <div className={`w-full h-full bg-gradient-to-br ${project.colors.gradient} p-4`}>
                  <div className="text-center pt-8">
                    <div className="text-sm font-semibold mb-4">Tela de Login</div>
                    <div className="space-y-3">
                      <div className="h-12 bg-white/80 rounded-lg" />
                      <div className="h-12 bg-white/80 rounded-lg" />
                      <div className={`h-12 ${project.colors.primary} rounded-lg`} />
                    </div>
                  </div>
                </div>
              </PhoneFrame>
              
              <PhoneFrame className="scale-75" animated={false}>
                <div className={`w-full h-full bg-gradient-to-br ${project.colors.gradient} p-4`}>
                  <div className="text-center pt-8">
                    <div className="text-sm font-semibold mb-4">Dashboard</div>
                    <div className="space-y-3">
                      <div className="h-8 bg-white/80 rounded-lg" />
                      <div className="h-16 bg-white/80 rounded-lg" />
                      <div className="h-12 bg-white/80 rounded-lg" />
                    </div>
                  </div>
                </div>
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Processo de <span className="gradient-text">Desenvolvimento</span>
            </h2>
            <p className="text-muted-foreground">
              Metodologia ágil com foco em qualidade e entrega contínua
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { phase: "Discovery", description: "Pesquisa e definição de requisitos" },
              { phase: "Design", description: "Prototipagem e validação de UX/UI" },
              { phase: "Development", description: "Desenvolvimento ágil em sprints" },
              { phase: "Launch", description: "Deploy e monitoramento contínuo" }
            ].map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className={`w-12 h-12 ${project.colors.primary} rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4`}>
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.phase}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
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
              <Link to="/#projects">Ver Outros Projetos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}