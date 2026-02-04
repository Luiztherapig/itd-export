import { Phone, Megaphone, Ear, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoInterdental from "@/assets/logo-interdental.png";
import heroTeam from "@/assets/hero-team.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/30 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Coluna Esquerda - Conteúdo */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up">
            <img 
              src={logoInterdental} 
              alt="Interdental Planos Odontológicos" 
              className="h-32 md:h-40 lg:h-48 mb-8 object-contain drop-shadow-2xl"
            />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Fale com a Interdental
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
              Atendimento humanizado para todas as bocas
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Tire dúvidas, resolva pendências ou envie sugestões. Nossa equipe está pronta para ajudar você, com agilidade e respeito.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <Button 
                asChild
                size="lg"
                className="h-auto py-4 flex flex-col items-center gap-2"
              >
                <a href="tel:+556133212221">
                  <Phone className="h-6 w-6" />
                  <span className="text-sm font-semibold">SAC</span>
                  <span className="text-xs opacity-90">Atendimento Geral</span>
                </a>
              </Button>

              <Button 
                asChild
                size="lg"
                variant="secondary"
                className="h-auto py-4 flex flex-col items-center gap-2"
              >
                <a href="mailto:atendimento@interdentaldf.com.br">
                  <Megaphone className="h-6 w-6" />
                  <span className="text-sm font-semibold">Ouvidoria</span>
                  <span className="text-xs opacity-90">Canal de Escuta</span>
                </a>
              </Button>

              <Button 
                asChild
                size="lg"
                variant="secondary"
                className="h-auto py-4 flex flex-col items-center gap-2"
              >
                <a href="#acessibilidade">
                  <Ear className="h-6 w-6" />
                  <span className="text-sm font-semibold">Acessibilidade</span>
                  <span className="text-xs opacity-90">Atendimento PCD</span>
                </a>
              </Button>

              <Button 
                asChild
                size="lg"
                variant="outline"
                className="h-auto py-4 flex flex-col items-center gap-2"
              >
                <a href="#cancelamento">
                  <XCircle className="h-6 w-6" />
                  <span className="text-sm font-semibold">Cancelamento</span>
                  <span className="text-xs opacity-90">Solicitar</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Coluna Direita - Imagem */}
          <div className="hidden lg:block animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroTeam} 
                alt="Equipe Interdental - Atendimento Humanizado" 
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
