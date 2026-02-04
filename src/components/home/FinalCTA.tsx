import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-trust to-primary animate-gradient-x" />
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 20 L45 22 L37 30 L39 40 L30 35 L21 40 L23 30 L15 22 L25 20 Z' fill='white' fill-opacity='0.3'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      {/* Decorative tooth elements */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" fill="white">
          <path d="M50 10 C30 10 20 20 20 35 C20 50 25 70 30 85 C32 90 35 95 40 95 C42 95 43 93 44 90 C46 85 48 80 50 75 C52 80 54 85 56 90 C57 93 58 95 60 95 C65 95 68 90 70 85 C75 70 80 50 80 35 C80 20 70 10 50 10 Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" fill="white">
          <path d="M50 10 C30 10 20 20 20 35 C20 50 25 70 30 85 C32 90 35 95 40 95 C42 95 43 93 44 90 C46 85 48 80 50 75 C52 80 54 85 56 90 C57 93 58 95 60 95 C65 95 68 90 70 85 C75 70 80 50 80 35 C80 20 70 10 50 10 Z" />
        </svg>
      </div>

      <div className="container relative z-10">
        <AnimatedSection animation="scale-in" className="max-w-4xl mx-auto text-center space-y-8 text-white">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Pronto para transformar seu sorriso?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Junte-se a milhares de sorrisos felizes e descubra como é fácil cuidar da sua saúde bucal
          </p>

          {/* Testimonial highlight */}
          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <Quote className="h-8 w-8 text-white/60 mx-auto mb-3" />
              <p className="text-lg italic text-white/90 mb-4">
                "A Interdental mudou minha vida! Atendimento excelente e planos que realmente cabem no bolso."
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 fill-warm text-warm" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-white/80">— Maria Silva, Brasília/DF</span>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/planos" className="flex-1 sm:flex-initial">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 text-base h-14 px-8 font-bold hover:scale-105 transition-all shadow-xl"
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a 
              href="https://api.whatsapp.com/send?phone=5561999758668&text=Ol%C3%A1!%20Venho%20do%20site%20da%20Interdental%20e%20gostaria%20de%20ajuda!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial"
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-base h-14 px-8 font-bold hover:scale-105 transition-all"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-8 pt-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-white/80" />
              <span>ANS Certificado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-white/80" />
              <span>32 anos de experiência</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-white/80" />
              <span>Atendimento 24h</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
