import { Percent } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import drogasilLogo from "@/assets/partners/drogasil-logo.avif";
import drogaraiaLogo from "@/assets/partners/drogaraia-logo.avif";

export const MedicineSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-trust rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-warm rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <AnimatedSection animation="fade-in-up" className="max-w-5xl mx-auto">
          {/* Glass morphism card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-xl" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Content */}
              <div className="space-y-6 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-warm/10 text-warm px-4 py-2 rounded-full w-fit">
                  <Percent className="h-4 w-4" />
                  <span className="text-sm font-semibold">Benefício Exclusivo</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Mais vantagens para o seu{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-trust">
                    bem-estar
                  </span>
                </h2>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">Desconto em Medicamentos</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Com a Interdental, você garante descontos de até{" "}
                    <span className="text-warm font-bold">70%</span> nas principais farmácias físicas e digitais, ampliando seu cuidado para além do consultório.
                  </p>
                </div>

                {/* Partner cards */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <a 
                    href="https://www.drogasil.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl p-6 group flex items-center justify-center min-h-[100px]"
                  >
                    <img 
                      src={drogasilLogo} 
                      alt="Drogasil"
                      className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                  <a 
                    href="https://www.drogaraia.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl p-6 group flex items-center justify-center min-h-[100px]"
                  >
                    <img 
                      src={drogaraiaLogo} 
                      alt="Droga Raia"
                      className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>

              {/* Decorative illustration */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Animated percentage icon */}
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-warm/20 to-trust/20 flex items-center justify-center animate-pulse">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-warm to-trust flex items-center justify-center shadow-2xl">
                      <div className="text-center text-white">
                        <Percent className="h-16 w-16 mx-auto mb-2" />
                        <div className="text-4xl font-bold">até 70%</div>
                        <div className="text-sm font-medium">de desconto</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-float">
                    <div className="text-2xl">💊</div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 animate-float delay-1000">
                    <div className="text-2xl">🏥</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
