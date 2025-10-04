import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-card/50 to-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Entre em <span className="gradient-text">Contato!</span>
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
            <p className="text-muted-foreground">ana.silvestre.contact@gmail.com</p>
          </div>
          <div className="elegant-card p-6 hover:scale-105 transition-transform cursor-pointer">
            <div className="text-3xl mb-4">💼</div>
            <h3 className="font-bold mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/ana-clara-oliveira-47853b2a9/" target="__blank" className="text-muted-foreground">linkedin.com/in/ana-clara-oliveira-47853b2a9</a>
          </div>
          <div className="elegant-card p-6 hover:scale-105 transition-transform cursor-pointer">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="font-bold mb-2">WhatsApp</h3>
            <p className="text-muted-foreground">Em breve </p>
          </div>
        </div>
      </div>
    </section>
  );
};