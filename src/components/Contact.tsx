import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-card/50 to-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Vamos <span className="gradient-text">Conversar?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto incrível em mente? Estou sempre aberta para discutir novas oportunidades e desafios
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="elegant-card p-6 hover:scale-105 transition-transform cursor-pointer">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-muted-foreground">contato@portfolio.dev</p>
          </div>
          <div className="elegant-card p-6 hover:scale-105 transition-transform cursor-pointer">
            <div className="text-3xl mb-4">💼</div>
            <h3 className="font-bold mb-2">LinkedIn</h3>
            <p className="text-muted-foreground">linkedin.com/in/dev</p>
          </div>
          <div className="elegant-card p-6 hover:scale-105 transition-transform cursor-pointer">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="font-bold mb-2">WhatsApp</h3>
            <p className="text-muted-foreground">+55 11 99999-9999</p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="space-y-6">
          <Button variant="hero" size="xl" className="group">
            Iniciar Conversa
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <p className="text-sm text-muted-foreground">
            Resposta garantida em até 24 horas
          </p>
        </div>
      </div>
    </section>
  );
};