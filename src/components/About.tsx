export const About = () => {
  const timeline = [
    {
      year: "2025",
      title: "Flutter Developer - Play55",
      description: "Desenvolvimento e evolução de aplicativos móveis escaláveis em Flutter, com foco em integrações e arquitetura limpa."
    },
    {
      year: "2024",
      title: "Web & Mobile Developer - COS Software",
      description: "Desenvolvimento de sistemas web e móveis com foco em integrações, arquitetura modular e UI responsiva."
    },
    {
      year: "2023",
      title: "Full-Stack Developer - IFMS",
      description: "Desenvolvimento de sistema de monitoramento full-stack, unindo processamento de imagens em Python/Flask com frontend em Flutter."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-card/50 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sou Ana Clara Silvestre, uma desenvolvedora apaixonada por criar experiências móveis que fazem a diferença na vida das pessoas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Transformando ideias em <span className="gradient-text">realidade digital</span>
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Apaixonada por criar soluções digitais que unem funcionalidade e ótima experiência do usuário, atuo no desenvolvimento e evolução de aplicativos móveis com foco em qualidade, escalabilidade e design intuitivo.               </p>
                <p>
                  Minha abordagem prioriza arquiteturas bem estruturadas, interfaces responsivas e integrações eficientes, sempre buscando alinhar tecnologia e propósito.
                </p>
                <p>
                  Acredito que cada projeto é uma oportunidade de transformar ideias em produtos digitais que gerem valor real e impacto positivo para os usuários.
                </p>
              </div>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">6+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">1M+</div>
                <div className="text-sm text-muted-foreground">Downloads Apps</div>
              </div>
            </div> */}
          </div>

          {/* Right Content - Timeline */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-8">Jornada Profissional</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Year Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm group-hover:scale-110 transition-transform">
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-6">
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};