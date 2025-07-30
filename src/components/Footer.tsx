export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">Portfolio</div>
            <p className="text-muted-foreground">
              Criando experiências móveis excepcionais que transformam ideias em realidade digital.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-foreground transition-colors">Início</a>
              <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
              <a href="#projects" className="block text-muted-foreground hover:text-foreground transition-colors">Projetos</a>
              <a href="#skills" className="block text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Serviços</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">Desenvolvimento Mobile</p>
              <p className="text-muted-foreground">Consultoria Técnica</p>
              <p className="text-muted-foreground">Code Review</p>
              <p className="text-muted-foreground">Mentoria</p>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">contato@portfolio.dev</p>
              <p className="text-muted-foreground">+55 11 99999-9999</p>
              <div className="flex gap-4 pt-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                  <span className="text-xs">in</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                  <span className="text-xs">gh</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                  <span className="text-xs">tw</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Portfolio. Desenvolvido com 💜 usando React, TypeScript e Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};