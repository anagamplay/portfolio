export const About = () => {
  const timeline = [
    {
      year: "2024",
      title: "Senior Mobile Developer",
      description: "Liderando projetos de alta complexidade e mentorando desenvolvedores júnior"
    },
    {
      year: "2022",
      title: "Mobile Architect",
      description: "Arquitetura de aplicações escaláveis e implementação de melhores práticas"
    },
    {
      year: "2020",
      title: "Full Stack Mobile",
      description: "Desenvolvimento end-to-end de aplicações móveis completas"
    },
    {
      year: "2018",
      title: "Mobile Developer",
      description: "Início da jornada no desenvolvimento mobile com React Native"
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
            Uma desenvolvedora apaixonada por criar experiências móveis que fazem a diferença na vida das pessoas
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
                  Com mais de 6 anos de experiência no desenvolvimento mobile, tenho uma paixão especial por criar aplicações que não apenas funcionam perfeitamente, mas que também proporcionam experiências memoráveis aos usuários.
                </p>
                <p>
                  Minha jornada começou com a curiosidade de entender como os aplicativos que usamos diariamente são construídos. Hoje, sou especialista em React Native, Flutter, e no ecossistema completo de desenvolvimento mobile.
                </p>
                <p>
                  Acredito que o melhor código é aquele que resolve problemas reais e melhora a vida das pessoas. Cada projeto é uma oportunidade de inovar e superar expectativas.
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
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
            </div>
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